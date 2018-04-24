'use strict';

function BnB() {
  this.properties = []
};

BnB.prototype.addProperty = function(property) {
  this.properties.push(property);
};

 BnB.prototype.createProperty = function(city, name, note, price) {
   var property = new Property();
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

 BnB.prototype.deleteProperty = function() {

 };


 BnB.prototype.bookProperty = function() {

 };
