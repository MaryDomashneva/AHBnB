'use strict';

function BnB() {
  this.properties = []
};

BnB.prototype.addProperty = function(property) {
  this.properties.push(property);
};

 BnB.prototype.createProperty = function(propertyId, city, name, note, price) {
   var property = new Property();
   property.id = propertyId;
   property.city = city;
   property.name = name;
   property.note = note;
   property.price = price;
   return property;
 };

  BnB.prototype.listAllProperty = function() {
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
   var my_property = this.properties[index];
   var propertyBookings = my_property.dataHelper.bookings.push(date);
 };

 BnB.prototype.findProperty  = function(propertyId) {
   return this.properties.find(function(element) {
     return element.id === propertyId;
     return element.id
   });
 };
