'use strict';

const pg = require('pg');

function DataHelper() {
  var databaseName = '';
  if (process.env.ENVIRONMENT === 'test') {
    databaseName = 'postgres://localhost:5432/ahbnb_test';
  } else {
    databaseName = 'postgres://localhost:5432/ahbnb';
  }
  this.client = new pg.Client(databaseName);
  this.bookings = [];
};

DataHelper.prototype.fetchBookingsByPropertyId = function(propertyId) {
  // const query = {
  //   text: 'SELECT * FROM bookings WHERE property_id = $1;',
  //   values: [propertyId],
  // }
  // this.client.connect();
  // client.query(query)
  // .then(res =>
  //   console.log('Bookings have been fetched...');
  //   this.bookings = res.rows.map(function(booking) {
  //     return new Booking(booking.user_id, booking.property_id, booking);
  //   });
  // )
  // .catch(e => console.error(e.stack));
  return this.bookings;
};
