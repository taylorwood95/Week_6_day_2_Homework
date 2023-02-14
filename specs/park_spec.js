const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {
  let trex1;
  let trex2;
  let trex3;
  let velociraptor1;
  let velociraptor2;
  let diplodocus;
  let gallimimus;
  let park;

  beforeEach(function () {
    trex1 = new Dinosaur('t-rex', 'carnivore', 50);
    trex2 = new Dinosaur('t-rex', 'carnivore', 40);
    trex3 = new Dinosaur('t-rex', 'carnivore', 60);

    velociraptor1 = new Dinosaur('velociraptor', 'carnivore', 25);
    velociraptor2 = new Dinosaur('velociraptor', 'carnivore', 20);

    diplodocus = new Dinosaur('diplodocus', 'herbivore', 30);
    gallimimus = new Dinosaur('gallimimus', 'omnivore', 4);

    park = new Park('Jurassic Park', 20);
  })





  it('should have a name', function() {
    const actual = park.name
    assert.strictEqual(actual, 'Jurassic Park');
  });

  it('should have a ticket price', function(){
    const actual = park.ticketPrice;
    assert.strictEqual(actual, 20)
  });

  it('should have a collection of dinosaurs', function(){
    const actual = park.dinosaurs;
    assert.deepStrictEqual(actual, [])
  });

  it('should be able to add a dinosaur to its collection', function(){
    park.addDinosaur(trex1);
    // assert.strictEqual(park.addDinosaur(),1)
    assert.deepStrictEqual(park.dinosaurs, [trex1])
  });

  it('should be able to remove a dinosaur from its collection', function(){
    park.addDinosaur(trex1)
    park.addDinosaur(trex2)
    park.removeDinosaur(trex1)
    assert.deepStrictEqual(park.dinosaurs, [trex2])
  });

  it('should be able to find the dinosaur that attracts the most visitors', function(){
    park.addDinosaur(trex1)
    park.addDinosaur(trex2)
    park.addDinosaur(trex3)
    assert.deepStrictEqual(park.mostAttractiveDino(), trex3)
  });

  it('should be able to find all dinosaurs of a particular species', function (){
    park.addDinosaur(trex1)
    park.addDinosaur(trex2)
    park.addDinosaur(trex3)
    assert.deepStrictEqual(park.foundDinoSpecies(), 3)
  });

  it('should be able to calculate the total number of visitors per day', function (){
    park.addDinosaur(trex1)
    park.addDinosaur(trex2)
    park.addDinosaur(trex3)
    assert.deepStrictEqual(park.totalVisitors(), 150)
  });

  it('should be able to calculate the total number of visitors per year', function() {
    park.addDinosaur(trex1)
    park.addDinosaur(trex2)
    park.addDinosaur(trex3)
    assert.strictEqual(park.totalVisitsPerYear(), 54750)
  });

  it('should be able to calculate total revenue for one year',function (){
    const actual = park.ticketPrice * 365
    assert.strictEqual(park.totalRevenuePerYear(), 7300)
  });

  it('should be able to remove all dinosaurs of a certain species', function() {
    park.addDinosaur(trex1);
    park.addDinosaur(trex2);
    park.addDinosaur(trex3);
    assert.deepStrictEqual(park.removeAllSpecies(), [])
  })

});
