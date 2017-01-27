var app = require('../../app/test-app')
var test = require('tape')

test('app/bikes/add should redirect to login page', function (assert) {
  app.get('/bikes/add')
    .expect(302)
    .expect('Content-Type', 'text/plain; charset=utf-8')
    .end(assert.end)
})
