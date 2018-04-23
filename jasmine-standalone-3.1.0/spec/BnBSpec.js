'use strict';

describe('BnB', function() {
  var bnb;
  var prop;
  var city;
  var name;
  var note;
  var price;
  var newProp;
  var expectedProperty;

  beforeEach(function() {
    bnb = new BnB();
    prop = new Property();
    expectedProperty = bnb.createProperty('London', 'NiceFlat', 'Available', 50);
  });

  it('takes property as argument and adds it to array', function() {
    bnb.addProperty(prop);
    expect(bnb.properties).toEqual([prop]);
  });

  it('creates a new property', function() {
    city = 'London',
    name = 'NiceHouse',
    note = 'Available now!',
    price = 40,
    newProp = bnb.createProperty(city, name, note, price),
    bnb.addProperty(newProp);
    expect(bnb.properties).toEqual([newProp]);
  });

  it('lists all properties', function(){
    bnb.addProperty(expectedProperty);
    expect(bnb.listAllProperty()).toEqual(['NiceFlat']);
  });
});
