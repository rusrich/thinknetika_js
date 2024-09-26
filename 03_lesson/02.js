let text = 'Lorem ipsum dolor sit amet'

function wordStat(inputText) {

  if (inputText.length === 0)
  return 'Пустая строка'

  if (typeof inputText == 'boolean')
    return 'Invalid'

  if (typeof inputText == 'number')
    return 'Invalid'
  
  
  const splitText = inputText
    .trim()
    .replace(/\s+/gi,' ')
    .split(' ')
  let array = []
  // console.log(splitText);
  if (inputText.length === 0)
    return 'Пустая строка'

  for (let i = 0; i < splitText.length; i++) {
    // console.log(splitText[i])
    let word = splitText[i]
    let arrayChar = []
    
    for (let w = 0; w < splitText[i].length; w++) {
      arrayChar.push(splitText[i].charCodeAt(w))
    }
    arrayChar = arrayChar.reduce( (acc, value) => acc + value )
    // console.log(arrayChar);
    array.push({word: word, sum: arrayChar})
  }

  return array
}


console.log(wordStat(text))
