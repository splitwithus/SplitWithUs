'use strict';
require('dotenv').config();

const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const port = 8080;

/**
 * static files middleware
 */
app.use(function (req, res, next) {
  if (req.url.match(/.js$|.html$|.css$|.png$|.woff|.woff2|.tff$/)) {
    res.sendFile(path.join(__dirname + '/..' + req.url));
  }  else next();
});

/**
 * body and cookie parsing middleware
 */
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(cookieParser());

/**
 * ROUTING
 */

// Static HTML routing
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + './../index.html'));
});

const db = require('./db/dbConfig');
// import database controllers
// import {addUser} from './controllers/event-controllers';

// database connection
db.connect()
  .then(obj => {
    console.log('connected to db');
    // db.query('SELECT * FROM "Users"')
    // .then((resp) => console.log(resp))
    // db.query('SELECT * FROM "Services"')
    // .then((resp) => console.log(resp))
  })
  .catch(error => console.log('error connecting'));

// server routes

// Create New Routes
app.post('/createuser', (req, res) => {
  console.log('hello create user');
  res.send('hello add user');
});
// Join a Group
app.post('/joingroup', (req, res) => {
  console.log('hello join group');
  res.send('hello join group');
});
// Leave a Group
app.post('/leavegroup', (req, res) => {
  console.log('hello leave group');
  res.send('hello leave group');
});
// Home
app.get('/home', (req, res) => {
  console.log('hello home');
  res.send('hello home');
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

module.exports = app;
