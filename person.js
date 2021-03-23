var chai = require('chai')
  , chaiModel = require('./helpers/model')
  , expect = chai.expect;

chai.use(chaiModel);

  var arthur = new Model('person');
  expect(arthur).to.be.a.model;
  
  
  arthur.set('name', 'Arthur Dent');
  arthur.set('occupation', 'traveller');
  console.log(arthur.get('name'));

  var crab = "snick snick";

  console.log('testing type of arthur');
  