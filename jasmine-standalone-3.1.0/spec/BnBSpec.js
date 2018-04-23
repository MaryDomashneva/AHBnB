'use strict';

describe('BnB', function() {
  var bnb;
  var prop;

  beforeEach(function() {
    bnb = new BnB();
    prop = new Property();
  });

  it('takes an property as argument and adds it to array', function() {
    bnb.addProperty(prop)
    expect(bnb.properties).toEqual([prop]);
  })
});
