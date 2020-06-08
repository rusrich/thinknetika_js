let numbersArray = [-91, -93, -45, 67, 96, 40, -34, 96, -42, 58]

// В задании сказаоно не выполнять с помощью метода forEach
// reduce тоже не стал использовать, поскольку использовал его в задании к прошлой лекции
// попробовал через for

let sumOfPositive = (numbersArray) => {
  // console.log(typeof numbersArray);
  
  if (!Array.isArray(numbersArray))
    return 'Invalid'

  if (numbersArray.length === 0)
    return 'Invalid'

  let counter = 0
  let sum = 0
  // console.log(typeof 'a');
  
  for (let i = 0; i < numbersArray.length; i++) {
    if (typeof numbersArray[i] === 'string')
      return 'Invalid'

    if (typeof numbersArray[i] === 'boolean')
      return 'Invalid'

    if (numbersArray[i] >= 0) {
      sum = sum + +numbersArray[i]
      counter++
    }
  }
  return {count: counter, sum: sum}
}

console.log(sumOfPositive(numbersArray))

// let validateArray = (numbersArray) => {
//   if (Array.isArray(numbersArray)) {
//     for (let i = 0; i < numbersArray.length; i++) {
//       if (numbersArray[i] == NaN || numbersArray.length == 0) {
//         console.log(numbersArray[i])
//         // return false
//       } else {
//         // return true
//       }
//     }
//   }
// }



// let sumOfPositive = (numbersArray) => {
//   let counter = 0
//   let sum = 0

//   for (let i = 0; i < numbersArray.length; i++) {
//     if (numbersArray[i] >= 0) {
//       sum = sum + numbersArray[i]
//       counter++
//     }
//   }
//   return {count: counter, sum: sum}
// }

// console.log(validateArray(numbersArray))

// if (validateArray(numbersArray))
//   console.log(sumOfPositive(numbersArray))
