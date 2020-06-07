let number = [-91, -93, -45, 67, 96, 40, -34, 96, -42, 58]

let validateArray = (number) => {
  if (Array.isArray(number)) {
    for (let i = 0; i < number.length; i++) {
      if (number[i] == NaN || number.length == 0) {
        return false
      } else {
        return true
      }
    }
  }
}

let sumOfPositive = (number) => {
  let counter = 0
  let sum = 0

  for (let i = 0; i < number.length; i++) {
    if (number[i] >= 0) {
      sum = sum + number[i]
      counter++
    }
  }
  return {count: counter, sum: sum}
}

console.log(sumOfPositive(number))
console.log(validateArray(number))
