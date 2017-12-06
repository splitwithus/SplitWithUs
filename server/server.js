'use strict';
require('dotenv').config();

const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const passport = require('passport');

const port = 8080;
/***************************
  static files middleware 
 ***************************/
app.use(function (req, res, next) {
  if (req.url.match(/.js$|.html$|.css$|.png$|.woff|.woff2|.tff$/)) {
    res.sendFile(path.join(__dirname + '/..' + req.url));
  }  else next();
});

/***************************
 body and cookie parsing middleware
 ***************************/
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cookieParser());

/***************************
 * ROUTING
 ***************************/

// Static HTML routing
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + './../index.html'));
});

/***************************
 * Database Setup
 ***************************/
const db = require('./db/dbConfig');

// Database Controllers
const userController = require('./controllers/userController');
const groupController = require('./controllers/groupController');
const serviceController = require('./controllers/serviceController');

/***************************
 *Database Connection
 ***************************/
// db.connect()
//   .then(obj => {
//     console.log('connected to db');
//     // db.query('SELECT * FROM "Users"')
//     // .then((resp) => console.log(resp))
//     // db.query('SELECT * FROM "Services"')
//     // .then((resp) => console.log(resp))
//   })
//   .catch(error => console.log('error connecting'));

/***************************
Server Routes
 ***************************/
// All Users
app.get('/users', userController.allUsers);

// All Services
app.get('/services', serviceController.allServices);

// Login/Logout Routes
app.get('/login', userController.login);
app.get('/logout', userController.logout);

// Forgot Password
app.get('/forgotpw', userController.forgotpw);

// Create User
app.post('/createuser', userController.addUser);

// Join a Group
app.post('/joingroup', groupController.joinGroup);

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

<<<<<<< HEAD
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + './../index.html'));
});

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname + './../index.html'));
});

=======

//************************
>>>>>>> 816a667fe1f52175c23f4cc402d00f2cc50cc31c
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

module.exports = app;
