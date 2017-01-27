var config = module.exports
var PRODUCTION = process.env.NODE_ENV === 'production'

config.express = {
  port: process.env.EXPRESS_PORT || 3000,
  ip: '127.0.0.1'
}

config.mongodb = {
  dbname: 'myappdatabase',
  host: 'localhost'
}
if (PRODUCTION) {
  // for example
  config.express.ip = '0.0.0.0'
}
