'use strict'

const Shipyard = function() {

  this.build = function(ship) {  
    if (ship instanceof this.specific) {
      console.log('The ship built')
      return true
    } else
      throw new Error('The ship can\'t be built here')
  }
  this.repairs = function(ship) {  
    if (ship instanceof this.specific) {
      console.log('The ship repaired')
      return true
    } else
      throw new Error('The ship can\'t be repaired here')
  }
  this.painting = function(ship) {  
      console.log(`The ${ship.name} painted`)
      return true
  }
  this.change = function(shipOld, shipNew) {  
    if (shipOld instanceof this.specific && shipNew instanceof this.specific) {
      console.log('Ships changed')
      return true
    } else
      throw new Error('Ships can\'t be changed here')
  }

}

const MotorShipyard = function(title) {
  this.title = title
  this.specific = MotorShip
}
const SailShipyard = function(title) {
  this.title = title
  this.specific = SailShip
}

MotorShipyard.prototype = new Shipyard()
SailShipyard.prototype = new Shipyard()

const shipyard1 = new MotorShipyard('Murmansk shipyard')
const shipyard2 = new SailShipyard('Baltic\'s shipyard')

console.log(shipyard1)
console.log(ship1)

console.log(shipyard1.build(ship1));
console.log(shipyard1.repairs(ship1));
console.log(shipyard1.painting(ship1));
console.log(shipyard1.change(ship1, ship3));

