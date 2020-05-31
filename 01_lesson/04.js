let counter = 0
let k = 0, p, n, m
do {
  p = prompt('Введите число')
  n = parseInt(p)
  if (n == NaN) {
    n = prompt('Введите число')
    n = parseInt(n)
  } else {
    if ( p !== '') {
      k = k + n
      console.log(k)
      counter++
    } else {
      m = k / counter
      alert(`Summ: ${k}, Count: ${counter}, Middle: ${m}`)
    }
    
  }
  
} while ( p !== '')