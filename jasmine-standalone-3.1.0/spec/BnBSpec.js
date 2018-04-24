'use strict';

describe('BnB', function() {
  var bnb;
  var prop;
  var city;
  var name;
  var note;
  var price;
  var newProp;
  var expectedPropertyFirst;
  var expectedPropertySecond
  var propertyArray;
  var propertyId;

  beforeEach(function() {
    bnb = new BnB();
    prop = new Property();
    expectedPropertyFirst = bnb.createProperty(1, 'London', 'NiceFlat', 'Available', 50);
    expectedPropertySecond = bnb.createProperty(2, 'London', 'BadFlat', 'Available', 30);
  });

  it('takes property as argument and adds it to array', function() {
    bnb.addProperty(prop);
    expect(bnb.properties).toEqual([prop]);
  });

  it('creates a new property', function() {
    propertyId = 3
    city = 'London';
    name = 'NiceHouse';
    note = 'Available now!';
    price = 40;
    newProp = bnb.createProperty(propertyId, city, name, note, price);
    bnb.addProperty(newProp);
    expect(bnb.properties).toEqual([newProp]);
  });

  it('lists all properties', function() {
    bnb.addProperty(expectedPropertyFirst);
    expect(bnb.listAllProperty()).toEqual(['NiceFlat']);
  });

  it('finds the correct property from the list', function() {
    bnb.addProperty(expectedPropertyFirst);
    bnb.addProperty(expectedPropertySecond);
    expect(bnb.findProperty(2)).toEqual(expectedPropertySecond);
  });

  it('returns an id of property in array', function() {
    bnb.addProperty(expectedPropertyFirst);
    bnb.addProperty(expectedPropertySecond);
    expect(bnb.findPropertyIndex(2)).toEqual(1);
  });

  it('deletes a property from the list', function() {
    bnb.addProperty(expectedPropertyFirst);
    bnb.addProperty(expectedPropertySecond);
    bnb.deleteProperty(1);
    expect(bnb.properties).toEqual([expectedPropertySecond]);
  });
});
