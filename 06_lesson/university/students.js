'use strict'

// fullname indexes
// 0 - LastName
// 1 - Name
// 2 - MiddleName
function Student(fullName) {
  let _fullName = fullName
  this.fullNameArr = _fullName.split(' ')
  this.helthTemperature = 36.6
  this.healthy = true

  this.lastName = this.fullNameArr[0]
  this.name = this.fullNameArr[1]
  this.middleName = this.fullNameArr[2]

  // this.getLastName = function() {
  //   return this.fullNameArr[0]
  // }
  // this.getName = function() {
  //   return this.fullNameArr[1]
  // }
  // this.getMiddleName = function() {
  //   return this.fullNameArr[2]
  // }

  this.fullName = function() {
    return _fullName
  }
  this.lastNameWithInitials = function() {
    return this.lastName + ' ' +
      this.name.substr(0, 1) + '.' +
      this.middleName.substr(0, 1) + '.'
  }
  this.health = function() {
    if (this.helthTemperature == 36.6) {
      return this.healthy
    } else {
      this.healthy = false
      return this.healthy
    }
  }
}


const stud1 = new Student('Rebrov Sergey Victorovich')
const stud2 = new Student('Petrov Petr Petrovich')
const stud3 = new Student('Ivanoc Ivan Ivanovich')
console.log(stud1.name)
console.log(stud1.fullName())
console.log(stud1.lastNameWithInitials())
console.log(stud1.helthTemperature)
console.log(stud1.health())
stud2.helthTemperature = 37
stud3.helthTemperature = 38
console.log(stud2.health())
console.log(stud3.health())
