let reverse = (word) => {
  rw = word.split('').reverse().join('')
  alert(rw)
}

reverse(prompt('Введите слово для реверса'))