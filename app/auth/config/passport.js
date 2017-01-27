var passport = require('passport'),
    Strategy = require('passport-local').Strategy,
    User = require('../models/user');

passport.use(new Strategy(
  function(username, password, cb) {
    User.findOne({ username: username }, function(err, user) {
      if (err) { console.log('err1'); return cb(err); }
      if (!user) { console.log('err2'); return cb(null, false); }
      if (user.password != password) { console.log('err3'); return cb(null, false, { message: 'no such user' }) }

      return cb(null, user);
    });
  }));

passport.serializeUser(function(user, cb) {
  cb(null, user.id);
});

passport.deserializeUser(function(id, cb) {
  User.findById(id, function(err, user) {
    if (err) { return cb(err); }
    cb(null, user);
  });
});
