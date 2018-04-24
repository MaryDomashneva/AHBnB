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

 BnB.prototype.updateProperty = function() {

 };

 BnB.prototype.findProperty  = function(propertyId) {
   return this.properties.find(function(element) {
     return element.id === propertyId;
     return element.id
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

 BnB.prototype.bookProperty = function() {

 };
