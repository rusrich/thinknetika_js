'use strict';

function Pier(name, position) {
  this.name = name;
  this.position = {
    x: position.x,
    y: position.y
  };
  this.moorShips = [];

  this.moor = function(ship) {
    if (this.position.x !== ship.position.x && this.position.y !== ship.position.y)
      throw new Error('Ship can\'t moor, because ship has not arrive')

    if (ship.speed !== 0)
      throw new Error('Going ship can\'t moor to pier')

    this.moorShips.push(ship)
  };

  this.unmoor = function(ship) {

    if (this.moorShips.length == 0)
      throw new Error('On pier no ships')

    for (let i = 0; i < this.moorShips.length; i++) {
      if (this.moorShips[i].getName() == ship.getName()) {
        this.moorShips.splice(i)
      } 
    }
  }
}

const pier1 = new Pier('Sadovaya', {x: 35, y: 35});

console.log(pier1);
console.log(pier1.moorShips);
pier1.moor(ship);
console.log(pier1.moorShips);
pier1.unmoor(ship);
// pier1.unmoor(ship);
console.log(pier1.moorShips);
