'use strict';
require('dotenv').config();

const express = require('express');
const app = express();
const path = require('path');

// middleware
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const passport = require('passport');
const GithubStrategy = require('passport-github').Strategy;
const session = require('express-session');

const port = 8080;
/***************************
 * Static files middleware
 ***************************/
app.use(function (req, res, next) {
  if (req.url.match(/.js$|.html$|.css$|.png$|.woff|.woff2|.tff$/)) {
    res.sendFile(path.join(__dirname + '/..' + req.url));
  } else next();
});

app.use(passport.initialize());
app.use(passport.session());

/***************************
 * Body and cookie parsing middleware
 ***************************/
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());

/***************************
 * Initialize Express Sessions
 ***************************/
app.use(session({
  key: 'user_sid',
  secret: 'nyancatmeow',
  resave: false,
  saveUninitialized: false,
  cookie: {
    expires: 600000
  }
}));
/*
 * Middleware will check if user's cookie is still saved in browser and if user is not set, then automatically log the user out.
 */
app.use((req, res, next) => {
  if (req.cookies.user_sid && !req.session.user) {
    res.clearCookie('user_sid');
  }
  next();
});

/*
 * Middleware to check if user is in an active session
 */
const sessionChecker = (req, res, next) => {
  if (req.session.user && req.cookies.user_sid) {
    res.redirect('/servicespage');  // figure out which route to redirect to
  } else {
    next();
  }
};

/***************************
 OAuth
 ***************************/
passport.use(new GithubStrategy({
  clientID: '95a121558b40b1023f42',
  clientSecret: 'ca15e822b7c2211955486ea211a0567885f71a30',
  callbackURL: 'http://localhost:8080/auth/github/callback'
},
function (accessToken, refreshToken, profile, done) {
  return done(null, profile);
}
));
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

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + './../index.html'));
});

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname + './../index.html'));
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

module.exports = app;
