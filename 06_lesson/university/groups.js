'use strict'

function Group(number) {
  this.number = number
  this.listOfStudents = []

  this.includeStudent = function(student) {
    this.listOfStudents.push(student)
  }

  this.missing = function() {
    for (let i = 0; i < this.listOfStudents.length; i++) {
      // console.log(this.listOfStudents[i])
      if (!this.listOfStudents[i].health()) {
        console.log('Missing ' + this.listOfStudents[i].lastNameWithInitials())
      }
    }
  }
}

const group1 = new Group('Fin 04-2')

group1.includeStudent(stud1)
group1.includeStudent(stud2)
group1.includeStudent(stud3)
console.log(group1.listOfStudents)
console.log(group1.listOfStudents[0].lastNameWithInitials())
console.log('-----------------------')

group1.missing()
