import chai from 'chai';
chai.should();

//Can't actually import the package root as it will import the generated source.
//I wonder how we can get around that...
import cookie from '../src/server.js';

describe(cookie, () => {
  it('is a test test. Get it? Test test!', () => {
    cookie().should.equal(4);
  })
})