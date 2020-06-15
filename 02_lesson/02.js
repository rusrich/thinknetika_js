const text = 'Lorem ipsum dolor sit amet'
let array = []

function structure(inputText) {
  let splitText = inputText.split(' ')
  // console.log(splitText);

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
}

structure(text)
console.log(array)
