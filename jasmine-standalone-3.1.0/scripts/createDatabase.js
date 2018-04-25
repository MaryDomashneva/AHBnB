'use strict';

// var pg = require('pg');
// const productionDatabase = 'postgres://mariagetmanova@localhost:5432/ahbnb';
// const testDatabase = 'postgres://mariagetmanova@localhost:5432/ahbnb_test';
// const databases = [productionDatabase, testDatabase];
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
