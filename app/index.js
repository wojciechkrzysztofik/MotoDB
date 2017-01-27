var express = require('express');
var passport = require('passport');
var mongoose = require('mongoose');
var config = require('./config/config');

// Create a new Express application.
var app = express();

// Use application-level middleware for common functionality, including
// logging, parsing, and session handling.
app.use(require('morgan')('combined'));
app.use(require('cookie-parser')());
app.use(require('body-parser').urlencoded({ extended: true }));
app.use(require('express-session')({ secret: 'motodb', resave: false, saveUninitialized: false }));

// Initialize Passport and restore authentication state, if any, from the
// session.
app.use(passport.initialize());
app.use(passport.session());

// Controllers
app.use(require('./home/router'))
app.use(require('./auth/router'))
app.use('/bikes', require('./bikes/router'))
app.use('/api', require('./api/router'))

// Configure view engine to render Handlebars templates.
app.set('view engine', 'hbs');
app.set('views', __dirname);

// Handlebars helpers
require('./helpers/hbs/active_page')

module.exports = app
