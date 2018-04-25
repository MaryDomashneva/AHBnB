'use strict';
const pg = require('pg');

function Booking(userId, propertyId, dates) {
  this.userId = userId;
  this.propertyId = propertyId;
  this.dates = dates;
};
