const should = require('should');// eslint-disable-line no-unused-vars
const supertest = require('supertest');
const Koa = require('koa');
const path = require('path');
const mdw = require('../middleware');

describe('initialize', () => {
  it('should throw error when the first parameter is not a string', () => {
    (() => {
      mdw(123);
    }).should.throwError('root must be a string');
  });
});

describe('handle static files request', () => {
  const app = new Koa();
  app.use(mdw(path.join(__dirname, 'mock')));

  const request = supertest(app.listen());

  it('html', (done) => {
    request.get('/mock.html').expect(200).end((err, res) => {
      res.header['content-type'].should.equal('text/html; charset=utf-8');
      done();
    });
  });

  it('js', (done) => {
    request.get('/mock.js').expect(200).end((err, res) => {
      res.header['content-type'].should.equal('application/javascript; charset=utf-8');
      done();
    });
  });

  it('css', (done) => {
    request.get('/mock.css').expect(200).end((err, res) => {
      res.header['content-type'].should.equal('text/css; charset=utf-8');
      done();
    });
  });

  it('jpg in images folder', (done) => {
    request.get('/images/1327.jpg').expect(200).end((err, res) => {
      res.header['content-type'].should.equal('image/jpeg');
      done();
    });
  });
});
