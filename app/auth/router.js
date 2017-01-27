var express = require('express'),
    router = express.Router(),
    passport = require('passport'),
    auth = require('./config/passport'),
    User = require('./models/user');

var app = express();

function showLoginForm(req, res) {
  if(req.query.bad) {
    var message = 'Wrong username or password.';
  } else {
    var message = '';
  }
  res.render('auth/views/login', { layout: 'views/layouts/main', message: message });
}

function login(req, res) {
  res.redirect('/bikes/add');
}

function logout(req, res) {
  req.logout();
  res.redirect('/');
}

function showProfile(req, res) {
  res.render('auth/views/profile', { layout: 'views/layouts/main', page_name: 'auth_profile', user: req.user });
}


router.get('/login', showLoginForm)
router.post('/login',
  passport.authenticate('local', {
    failureRedirect: '/login?bad=true',
    badRequestMessage : 'Missing username or password.',
    passReqToCallBack: true
  }), login)
router.get('/logout', logout)
router.get('/profile', require('connect-ensure-login').ensureLoggedIn(), showProfile)

module.exports = router
