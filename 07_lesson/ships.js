'use strict'

const Ship = function(name) {
  this.name = name
  this.color = 'white'

  this._position = {x: 0, y: 0}

}

const MotorShip = function(name) {
  this.name = name
  this.enginePower = 1000
  this.material = 'Steel'
}

const SailShip = function(name) {
  this.name = name
  this.countMast = 3
  this.squareSails = 20
}

MotorShip.prototype = new Ship()
SailShip.prototype = new Ship()

const ship1 = new MotorShip('Great Motor Ship')
const ship2 = new SailShip('Great Sail Ship')
const ship3 = new MotorShip('New Motor Ship')
