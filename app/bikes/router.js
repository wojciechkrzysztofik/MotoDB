var router = require('express').Router(),
    express = require('express'),
    hbs = require('hbs'),
    join = require('path').join,
    Bike = require('./models/bike');

function showList(res, req, bikes) {
  res.render('bikes/views/list',
  {
    layout: 'views/layouts/main',
    page_name: 'bikes_list',
    bikes: bikes,
    user: req.user
  })
}

function getList(req, res, next) {
  var bikes;

  Bike.find().exec()
      .then(function(result){
        bikes = result;
      })
      .then(function() {
        res.render('bikes/views/list',
        {
          layout: 'views/layouts/main',
          page_name: 'bikes_list',
          bikes: bikes,
          user: req.user
        })
      })
      .then(null, next);
}

function addNew(req, res) {
  res.render('bikes/views/add',
  {
    layout: 'views/layouts/main',
    page_name: 'bikes_add',
    user: req.user
  })
}

function saveBike(req, res) {
  var newBike = Bike({
    brand: req.body.brand,
    model: req.body.model,
    engine: req.body.engine
  });

  // save the user
  newBike.save(function(err) {
    if (err) throw err;

    res.redirect('/bikes/list');
  });
}

router.use(express.static(join(__dirname, '../public')))

router.get('/list', getList)
router.get('/add', require('connect-ensure-login').ensureLoggedIn(), addNew)
router.post('/add', require('connect-ensure-login').ensureLoggedIn(), saveBike)

module.exports = router
