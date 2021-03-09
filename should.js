var should = require('chai').should() //actually call the function
  , foo = 'bar'
  , beverages = { tea: [ 'chai', 'matcha', 'oolong'], drank: ['coke', 'pepsi'] };

console.log('starting should tests');

foo.should.be.a('string');
foo.should.equal('bar');
foo.should.have.lengthOf(3);
beverages.should.have.property('tea').with.lengthOf(3);


console.log('standard should tests finished');

console.log('starting existance type tests');

//Given that should works by extending Object.prototype, there are some scenarios where should will not work. Mainly, if you are trying to check the existence of an object. Take the following pseudocode:

//this will throw a db is undefined error
db.get(1234, function (err, doc) {
    // we expect error to not exist
    // we expect doc to exist and be an object
  });


db.get(1234, function (err, doc) {
  should.not.exist(err);
  should.exist(doc);
  doc.should.be.an('object');
});
