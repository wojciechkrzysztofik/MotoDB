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

function getBike(req, res, next) {

  var id = req.params.id,
      bike;

  Bike.findById(id).exec()
      .then(function(result){
        bike = result;
      })
      .then(function() {
        res.render('bikes/views/preview',
        {
          layout: 'views/layouts/main',
          page_name: 'bikes_preview',
          bike: bike,
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
    engine: req.body.engine,
    fuel_system: req.body.fuel_system,
    ignition: req.body.ignition,
    suspension: req.body.suspension,
    powerhorsepower: req.body.power_horsepower,
    power_torque: req.body.power_torque,
    tires_front: req.body.tires_front,
    tires_rear: req.body.tires_rear,
    breaks_front: req.body.breaks_front,
    breaks_rear: req.body.breaks_rear,
    dimensions_rake: req.body.dimensions_rake,
    dimensions_trail: req.body.dimensions_trail,
    dimensions_wheelbase: req.body.dimensions_wheelbase,
    dimensions_length: req.body.dimensions_length,
    dimensions_width: req.body.dimensions_width,
    dimensions_height: req.body.dimensions_height,
    dimensions_seat_height: req.body.dimensions_seat_height,
    dimensions_dry_weight: req.body.dimensions_dry_weight,
    dimensions_wet_weight: req.body.dimensions_wet_weight,
    performance_top_60mph: req.body.performance_top_60mph,
    performance_top_speed: req.body.performance_top_speed,
    performance_fuel_economy: req.body.fuel_economy
  });

  // save the user
  newBike.save(function(err) {
    if (err) throw err;

    res.redirect('/bikes/list');
  });
}

router.use(express.static(join(__dirname, '../public')))

router.get('/list', getList)
router.get('/preview/:id', getBike)
router.get('/add', require('connect-ensure-login').ensureLoggedIn(), addNew)
router.post('/add', require('connect-ensure-login').ensureLoggedIn(), saveBike)

module.exports = router
