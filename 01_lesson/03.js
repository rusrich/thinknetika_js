let inputDate = (message) => prompt(message)
let dateUsa = inputDate('Укажите дату в американском формате: мм/чч/гггг')
let dateUsaSplit = dateUsa.split('/')
let d, m, y
let regexp = /\d{1,2}\/\d{1,2}\/\d{4}/

if (regexp.test(dateUsa)) {
  if (dateUsaSplit[0].length < 2) {
    m = `0${dateUsaSplit[0]}`
  } else {
    m = dateUsaSplit[0]
  }
  if (dateUsaSplit[1].length < 2) {
    d = `0${dateUsaSplit[1]}`
  } else {
    d = dateUsaSplit[1]
  }
  y = dateUsaSplit[2]
  let dateRus = `${d}.${m}.${y}`
  console.log(dateRus);
} else {
  inputDate('Вы ввели некорректную дату. Укажите дату в американском формате: мм/чч/гггг')
}