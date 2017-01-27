var router = require('express').Router(),
    Bike = require('../bikes/models/bike');

function getBikes(req, res, next) {
  var bikes;

  Bike.find().exec()
      .then(function(result){
        bikes = result;
      })
      .then(function() {
        res.json(bikes)
      })
      .then(null, next);
}

// /api/get_list
router.get('/get_list', getBikes)

module.exports = router
