'use strict';

function Property(id, propertyCity, propertyName, propertyNote, propertyPrice, ownerId, dataHelper) {
  this.id = id ? id : 1;
  this.city = propertyCity;
  this.name = propertyName;
  this.note = propertyNote;
  this.price = propertyPrice;
  this.propertyOwner = ownerId ? ownerId : 1;
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
