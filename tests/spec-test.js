const should = require('should');// eslint-disable-line no-unused-vars
const mdw = require('../middleware');

describe('initialize', () => {
  it('should throw error when the first parameter is not a string', () => {
    (() => {
      mdw(123);
    }).should.throwError('root must be a string');
  });
});
