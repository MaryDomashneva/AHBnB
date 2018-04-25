'use strict';
const pg = require('pg');

const productionDatabase = 'postgres://mariagetmanova@localhost:5432/ahbnb';
// const testDatabase = 'postgres://localhost:5432/ahbnb_test';

var client = new pg.Client(productionDatabase);
client.connect(function(err){
  if(err){
    return console.error('could not connect to postgres',err);
  } client.query('SELECT * FROM users', function(err,result){
    if(err){
      return console.error('error running query', err);
    }
    console.log(result);
    client.end();
  });
});


// const databases = [productionDatabase];
//
// databases.forEach(function(database) {
//   console.log('Creating database...');
//   const client = new pg.Client(database);
//   client.connect();
//   client.query('CREATE TABLE users(id SERIAL PRIMARY KEY, username VARCHAR(100), email VARCHAR(60), password VARCHAR(60));')
//     .then(res => client.query('CREATE TABLE properties(id SERIAL PRIMARY KEY, city VARCHAR(100), name VARCHAR(100), note VARCHAR(255), price INTEGER, status VARCHAR(100), owner_id INTEGER REFERENCES users (id));'))
//     .then(res => client.query('CREATE TABLE bookings(id SERIAL PRIMARY KEY, user_id INTEGER REFERENCES users (id), property_id INTEGER REFERENCES properties (id));'))
//     .then(res => client.end())
//     .then(res => console.log('Database has been created...'))
//     .catch(e => console.error(e.stack));
// });
