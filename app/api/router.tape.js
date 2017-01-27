var app = require('../../app/test-app')
var test = require('tape')

test('app/api/get_list should return json array with all bikes from DB', function (assert) {
  app.get('/api/get_list')
    .expect(200)
    .expect('Content-Type', 'text/plain; charset=utf-8')
    .end(assert.end)
})
