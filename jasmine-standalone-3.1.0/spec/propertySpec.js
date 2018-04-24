'use strict';

describe('Property', function() {
  var dataHelper;

  beforeEach(function() {
    var date1 = (new Date(2018, 10, 1)).getTime();
    var date2 = (new Date(2018, 10, 2)).getTime();
    var date3 = (new Date(2018, 10, 3)).getTime();
    var date4 = (new Date(2018, 10, 4)).getTime();
    var bookingFirst = new Booking(1,1,[date1, date2, date3, date4]);

    var date5 = (new Date(2018, 11, 1)).getTime();
    var date6 = (new Date(2018, 11, 2)).getTime();
    var date7 = (new Date(2018, 11, 3)).getTime();
    var date8 = (new Date(2018, 11, 4)).getTime();
    var bookingSecond = new Booking(2,1,[date6, date7, date8, date5]);

    dataHelper = new DataHelper();
    spyOn(dataHelper, "fetchBookingsByPropertyId")
      .and
      .callFake(function(propertyId) {
        if (propertyId === 1) {
          return [bookingFirst, bookingSecond];
        } else {
          return [];
        }
      });
  });

  it('calls dataHelper to fetch bookings when check for availability', function() {
    var property = new Property(2, dataHelper);
    property.isAvailable([]);
    expect(dataHelper.fetchBookingsByPropertyId).toHaveBeenCalled();
    expect(dataHelper.fetchBookingsByPropertyId.calls.argsFor(0)).toEqual([2]);
  });

  it('returns true if property is available', function() {
    var property = new Property(1, dataHelper);
    var bookingDates = [
      (new Date(2018, 10, 5)).getTime(),
      (new Date(2018, 10, 6)).getTime(),
      (new Date(2018, 10, 7)).getTime()
    ];
    expect(property.isAvailable(bookingDates)).toEqual(true);
  });

  it('returns false if property is not available', function() {
    var property = new Property(1, dataHelper);
    var bookingDates = [
      (new Date(2018, 11, 4)).getTime(),
      (new Date(2018, 11, 5)).getTime(),
      (new Date(2018, 11, 6)).getTime()
    ];
    expect(property.isAvailable(bookingDates)).toEqual(false);
  });
});
