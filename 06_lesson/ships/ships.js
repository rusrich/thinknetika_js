'use strict';

function Ship(name) {
    let _isAnchorDroped = false;
    // Не знаю как задать уникальное имя
    // Для переименования можно написать сеттер
    // на проверку уже существующего имени
    let _name = name;
    let _distance = 0;
    this.model;
    this.speed = 0;
    this.position = { x: 0, y: 0 };
    this.positionsArray = [this.position];
    this.getDistance = function() {
        return _distance
    };
    this.setDistance = function () {
        // Формула расчета дистанции по координатам между двумя точками
        // AB = Math.sqrt(Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2))
        for (let i = this.positionsArray.length - 1; i > 0; i--) {
            _distance += 
            Math.sqrt(
                Math.pow((this.positionsArray[i].x - this.positionsArray[i - 1].x), 2) +
                Math.pow((this.positionsArray[i].y - this.positionsArray[i - 1].y), 2)
                )

            }
        // console.log(this._distance);
        return _distance

    };
    
    this.moveTo = function (position) {
        if (_isAnchorDroped)
            throw new Error('You need to rise anchor');

        this.position = {
            x: position.x,
            y: position.y,
        };
        this.positionsArray.push(this.position);
    };
    this.getName = function () {
        return _name
    }
    this.setName = function (name) {
    }
    this.move = function (direction) {
        
    };
    this.isAnchorDroped = function () {
        // console.log('isAnchorDroped', this);
        return _isAnchorDroped;
    };
    /**
     * @param {boolean} droped
     */
    this.dropAnchor = () => {
        if (this.speed !== 0)
            throw new Error('Speed must be 0');

        _isAnchorDroped = true;
    };
    this.riseAnchor = () => {
        if (this.speed !== 0)
            throw new Error('Speed must be 0');

        _isAnchorDroped = false;
    };
}

const ship = new Ship('Best ship');
// const ship2 = new Ship('Best ship');
// shipArray.push(ship2);
ship.moveTo({ x: 10, y: 10 });
ship.moveTo({ x: 30, y: 15 });
ship.moveTo({ x: 35, y: 35 });
console.log(ship.positionsArray);
console.log(ship.setDistance());
console.log(ship.isAnchorDroped());
// ship.speed = 10
console.log(ship.speed);




// console.log(ship);















// ship.dropAnchor();

// ship.moveTo({ x: 20, y: 20 });
// console.log(ship);


// const ship2 = new Ship('Good ship 2'); 







// console.log(ship);
// console.log(ship.getAnchorDroped());
// // ship._isAnchorDroped = true; Так нельзя
// console.log(ship);
// console.log('  after 1 try', ship.getAnchorDroped());
// ship.speed = 0;
// ship.setAnchorDroped(true);
// console.log(ship);
// console.log(ship.getAnchorDroped());




// const car = {
//     model: 'Model X',
//     seats: 4,
// }

// dropAnchor(ship);
// dropAnchor(car);

// function dropAnchor(ship) {
//     console.log(ship);
//     console.log(typeof ship);

//     if (!(ship instanceof Ship))
//         throw new Error('Not a Ship');

//     ship.isAnchorDroped = true;
// }









// Save it

// const arr = {
//     '0': 'a',
//     '1': 'b',
//     length: 2,
// }

// for (let i = 0; i < arr.length; i++)
//     console.log(arr[i]);

// Array.from(arr)
//      .forEach(item => console.log(item))