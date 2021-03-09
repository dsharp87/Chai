var expect = require('chai').expect
  , foo = 'bar'
  , beverages = { tea: [ 'chai', 'matcha', 'oolong' ] };

console.log('starting expect tests...')

expect(foo).to.be.a('string');
expect(foo).to.equal('bar');
expect(foo).to.have.lengthOf(3);
expect(beverages).to.have.property('tea').with.lengthOf(3);

var answer = 43;

//no message before error
// expect(answer).to.equal(42);

//custom message prepended before error message
expect(answer, 'topic [answer] shoopy doopy').to.equal(42);

console.log('expect tests completed');