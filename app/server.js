var express = require('express');
var passport = require('passport');
var mongoose = require('mongoose');
var config = require('./config/config');

// db connection
mongoose.connect('mongodb://' + config.mongodb.host + '/' + config.mongodb.dbname);

// @todo
//require('./middlewares/auth');

// Create a new Express application.
var app = require('./index')

// Controllers
// app.use(require('./controllers'))

app.listen(config.express.port);

module.exports = app
