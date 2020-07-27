let inputText = prompt('Введите текст')

let cleanText = inputText.trim().replace(/\s+/gi,' ')

console.log(cleanText)