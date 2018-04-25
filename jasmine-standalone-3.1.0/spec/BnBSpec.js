'use strict';

describe('BnB', function() {
  // if (process.env.ENVIRONMENT === 'test') {
  //   databaseName = 'postgres://mariagetmanova@localhost:5432/ahbnb_test';
  // } else {
  //   databaseName = 'postgres://mariagetmanova@localhost:5432/ahbnb';
  // }
  // this.client = new pg.Client(databaseName);

  var bnb;
  var date1 = (new Date(2018, 10, 1)).getTime();
  var date2;
  var prop;
  var user;
  var city;
  var index9;
  var name;
  var note;
  var price;
  var newProp;
  var expectedPropertyFirst;
  var expectedPropertySecond;
  var expectedUserFirst;
  var expectedUserSecond;
  var propertyArray;
  var propertyId;
  var UserId;
  var UserName;
  var email;
  var newUser;

  beforeEach(function() {
    bnb = new BnB();
    prop = new Property();
    user = new User();
    expectedUserFirst = bnb.createUser(1, 'Mary', 'marytest@gmail.com');
    expectedUserSecond = bnb.createUser(2, 'Andrew', 'andrewtest@gmail.com');
    expectedPropertyFirst = bnb.createProperty(1, 'London', 'NiceFlat', 50);
    expectedPropertySecond = bnb.createProperty(2, 'London', 'BadFlat', 30);
  });

  it('takes property as argument and adds it to properties array', function() {
    bnb.addProperty(prop);
    expect(bnb.properties).toEqual([prop]);
  });

  it('takes user as argument and adds it to users array', function() {
    bnb.addUser(user);
    expect(bnb.users).toEqual([user]);
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

  it('creates a new user', function() {
    UserId = 1;
    UserName = 'marwa';
    email = 'marwa@gmail.com';
    newUser = bnb.createUser(UserId, UserName, email);
    bnb.addUser(newUser);
    expect(bnb.users).toEqual([newUser]);
  })

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

  it('returns an id of the user in the array', function() {
    bnb.addUser(expectedUserFirst);
    bnb.addUser(expectedUserSecond);
    expect(bnb.findUserIndex(2)).toEqual(1);
  });

  it('deletes a property from the list', function() {
    bnb.addProperty(expectedPropertyFirst);
    bnb.addProperty(expectedPropertySecond);
    bnb.deleteProperty(1);
    expect(bnb.properties).toEqual([expectedPropertySecond]);
  });

  it('takes new name as a parameter and update name of property found by id', function() {
    bnb.addProperty(expectedPropertyFirst);
    bnb.updatePropertyName(1, 'SoNiceFlat');
    expect(expectedPropertyFirst.name).toEqual('SoNiceFlat')
  });

  it('takes a new note as a paramater and updates the note on the property found by id', function() {
    bnb.addProperty(expectedPropertyFirst);
    bnb.updatePropertyNote(1, 'Just a pointless note!');
    expect(expectedPropertyFirst.note).toEqual('Just a pointless note!');
  });

  it('takes a new price as a paramter and updates the price on the property found by id', function() {
    bnb.addProperty(expectedPropertyFirst);
    bnb.addProperty(expectedPropertySecond);
    bnb.updatePropertyPrice(2, 40);
    expect(expectedPropertySecond.price).toEqual(40);
  });

  it('updates the username by id', function() {
    bnb.addUser(expectedUserFirst);
    bnb.updateUserName(1, 'Marwa');
    expect(expectedUserFirst.UserName).toEqual('Marwa')
  });

  it('updates the user email by id', function() {
    bnb.addUser(expectedUserFirst);
    bnb.updateUserEmail(1, 'marwatest@gmail.com');
    expect(expectedUserFirst.email).toEqual('marwatest@gmail.com')
  });

  it('takes a date and accepts a booking on a property', function() {
    var expectedBooking = new Booking(0, 1, [date1]);
    bnb.addProperty(expectedPropertyFirst);
    bnb.addProperty(expectedPropertySecond);
    bnb.bookProperty(1, date1);
    expect(expectedPropertyFirst.dataHelper.bookings).toEqual([expectedBooking]);
  });
});
