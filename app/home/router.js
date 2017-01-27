var router = require('express').Router(),
    express = require('express'),
    hbs = require('hbs'),
    join = require('path').join;

function getHomePage(req, res) {
  res.render('home/views/home',
  {
    layout: 'views/layouts/main',
    page_name: 'home',
    user: req.user
  })
}

router.use(express.static(join(__dirname, '../public')))

router.get('/', getHomePage)

module.exports = router
