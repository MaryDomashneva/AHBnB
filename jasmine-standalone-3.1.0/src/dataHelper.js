'use strict';

function DataHelper() {
  this.bookings = [];
};

DataHelper.prototype.fetchBookingsByPropertyId = function(propertyId) {
  return this.bookings;
};
