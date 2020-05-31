let inputText = prompt('Ввведите текст')
let cleanText = inputText.toLocaleLowerCase().trim().replace(' ', '')
let spliter = cleanText.split('')
let gla = ['a', 'e', 'i', 'o', 'u', 'y']
let counterGla = 0

for (let i = 0; i < cleanText.length; i++) {
  for (let g = 0; g < gla.length; g++) {
    if (spliter[i] == gla[g]) {
      counterGla++
    }
  }
}

let counterSog = cleanText.length - counterGla

console.log('Гласных букв в тексте: ' + counterGla)
console.log('Согласных букв в тексте: ' + counterSog)