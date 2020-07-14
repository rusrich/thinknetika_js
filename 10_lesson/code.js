const API_KEY = '0QIUVkVy1WSwhapQtcNXfRD1PdEi8KeY'

const gifsFactory = () => {
  let hiddenXHR
  return (query) => {
    if (hiddenXHR) {
      hiddenXHR.abort()
      const gifs = document.querySelector('#gifs')
      gifs.innerHTML = ''
    }
      return new Promise(((resolve, reject) => {
        let xhr = new XMLHttpRequest()
        hiddenXHR = xhr
        xhr.open('GET', `https://api.giphy.com/v1/gifs/search?q=${query}&api_key=${API_KEY}&limit=10`)
        xhr.onload = function() {
          if (xhr.status !== 200) {
            reject(xhr.status)
            return
          } else {
            resolve(JSON.parse(xhr.response))
          } 
        }
        xhr.send()
      }))
  }
}

const getGif = gifsFactory()

//Полностью рабочая версия без задержки в 500 мс.
document.querySelector('#search').addEventListener('input', (event) => {
  getFunc(event.target.value)
})


// Используя debounce возникает проблема.
// При первом вводе получаю данные, видно в консоли
// Если делаю повторный запрос с другими данными, то получаю новые данные,
// Но элементы картинки отображаются с первого запроса
// const debounce = (fn, delay) => {
//   let timeoutID
//   return function(...args) {
//     if (timeoutID) {
//       clearTimeout(timeoutID)
//     }
//     timeoutID = setTimeout( () => {
//       fn(...args)
//     }, delay)
//   }
// }

// document.querySelector('#search').addEventListener('input', debounce(event => {
//   getFunc(event.target.value)
// }, 500))

// Не знаю как избавить от глобальной переменной gif_result
let gif_result
const createElements = () => {
  return () => {
      const gifs = document.querySelector('#gifs')
      if (gif_result) {
        for (let i =0; i < gif_result.data.length; i++) {
          const gif = document.createElement('div')
          const img = document.createElement('img')
          const p = document.createElement('p')
          gif.id = 'gif'
          gifs.append(gif)
          gif.append(img)
          gif.append(p)
          img.src = gif_result.data[i].images.fixed_width_still.url
          p.innerText = gif_result.data[i].title.slice(0, -4)
        }
      }
  }
}

const createEl = createElements()

const getFunc = async (query) => {
  const result = await getGif(query)
  const result2 = await createEl()
  gif_result = result
  console.log(gif_result);
}