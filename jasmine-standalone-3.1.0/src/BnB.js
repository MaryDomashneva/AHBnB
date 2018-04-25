'use strict';

function BnB() {
  // var databaseName = '';
  // if (process.env.ENVIRONMENT === 'test') {
  //   databaseName = 'postgres://mariagetmanova@localhost:5432/ahbnb_test';
  // } else {
  //   databaseName = 'postgres://mariagetmanova@localhost:5432/ahbnb';
  // }
  // this.client = new pg.Client(databaseName);

  this.properties = []
};

BnB.prototype.addProperty = function(property) {
  this.properties.push(property);
};

 BnB.prototype.createProperty = function(propertyId, propertyCity, propertyName, propertyNote, propertyPrice) {
   var property = new Property();
   property.id = propertyId;
   property.city = propertyCity;
   property.name = propertyName;
   property.note = propertyNote;
   property.price = propertyPrice;
   return property;
 };

  BnB.prototype.listAllProperty = function() {
    // const query = {
    //   text: `SELECT * FROM bookings WHERE city = $1;`,
    //   values: [city]
    // }
    // this.client.connect();
    // this.client.query(query)
    //   .then(result => {
    //     this.properties = result.rows.map(function(row) {
    //       return new Property(row.id, row.city, row.name, row.note, row.price)
    //     })
    //   })
    //   .then(result => this.client.end());

    return this.properties.map(function(property) {
      return property.name;
    });
  };

BnB.prototype.findPropertyIndex = function(propertyId) {
  var index = this.properties.findIndex(function(property, index, properties) {
    return property.id === propertyId
   });
   return index
 };

BnB.prototype.deleteProperty = function(propertyId) {
  var index = this.findPropertyIndex(propertyId)
  this.properties.splice(index, 1);
 };

 BnB.prototype.updatePropertyName = function(propertyId, newName) {
   var index = this.findPropertyIndex(propertyId);
   this.properties[index].name = newName;
 };

 BnB.prototype.updatePropertyNote = function(propertyId, newNote) {
   var index = this.findPropertyIndex(propertyId);
   this.properties[index].note = newNote;
 };

 BnB.prototype.updatePropertyPrice = function(propertyId, newPrice) {
   var index = this.findPropertyIndex(propertyId);
   this.properties[index].price = newPrice;
 };

 BnB.prototype.bookProperty = function(propertyId, date) {
   var index = this.findPropertyIndex(propertyId);
   var myProperty = this.properties[index];
   var booking = new Booking(0, propertyId, [date]);
   myProperty.dataHelper.bookings.push(booking);
 };

 BnB.prototype.findProperty  = function(propertyId) {
   return this.properties.find(function(element) {
     return element.id === propertyId;
     return element.id
   });
 };
