'use strict';

function Property(id, dataHelper) {
  this.id = id ? id : 1;
  this.city = 'default';
  this.name = 'default';
  this.note = 'default';
  this.price = 10;
  this.status = 'available';
  this.dataHelper = dataHelper ? dataHelper : new DataHelper();
};

Property.prototype.bookings = function() {
  return this.dataHelper.fetchBookingsByPropertyId(this.id);
};

Property.prototype.isAvailable = function(dates) {
  var bookedDates = [].concat.apply(
    [],
    this.bookings().map(function(booking) {
      return booking.dates;
    }),
  );
  var isNotAvailable = dates.some(function(date) {
    return bookedDates.includes(date);
  });
  return !isNotAvailable;
};
