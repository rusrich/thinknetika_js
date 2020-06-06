function filterMassive(arr) {
  let arr2 = arr.filter( num => num < 0)
  let sum = arr2.reduce( (acc, value) => acc + value )
  let count = arr2.length
  return `Сумма: ${sum}, Количество: ${count}`
}

console.log(filterMassive([91, 93, 45, -67, -96, -40, 34, -96, 42, -58]));