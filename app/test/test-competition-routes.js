var app = require('../server'),
    chai = require('chai'),
    chaiHttp = require('chai-http'),
    should = chai.should()

chai.use(chaiHttp)

describe('/GET users', () => {
    it('it should GET all the users', (done) => {
      chai.request(app)
          .get('/competition/gettest')
          .end((err, res) => {
              res.should.have.status(200);
              res.body.should.be.a('array');
              res.body.length.should.be.eql(2);
            done();
          });
    });
});
/*
exports.competition_list_should_return_200 = function(done){
  chai.request(app)
    .get('/competition')
    .end(function(err, res){
      res.should.have.status(200);
      res.should.be.html;
      res.text.should.match(/Lista konkursów/);
      done();
    });
};

exports.competition_add_should_return_200 = function(done){
  chai.request(app)
    .get('/competition/add')
    .end(function(err, res){
      res.should.have.status(200);
      res.should.be.html;
      res.text.should.match(/Dodaj nowy konkurs/)
      done();
    });
};
*/
