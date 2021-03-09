var assert = require('chai').assert;

var foo = 'bar';
var beverages = { tea: ['chai', 'matcha', 'oolong']};

console.log('running assert tests...')

assert.typeOf(foo, 'string');
assert.typeOf(foo, 'string', 'foo is a string');
assert.equal(foo, 'bar', 'foo equal `bar`');
assert.lengthOf(foo, 3, 'foo`s value has a lenght of 3');
assert.lengthOf(beverages.tea, 3, 'beverages has 3 types of tea');

console.log('assert tests done');