const searchButton = document.querySelector('#search');
const imageResults = document.querySelector('.images');
const inputField = document.querySelector('#keyword');

function getApi() {
  imageResults.innerHTML=""
  const keyword = inputField.value
  const requestUrl = `https://api.giphy.com/v1/gifs/search?api_key=4qRHV52R4834naAfdqPY7faYTOvD63kX&q=${keyword}&limit=3&rating=g`

  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (gifs) {
      console.log(gifs.data)
      for (const image of gifs.data) {
        const imageEl = document.createElement('img')
       imageEl.setAttribute('src', image.images.downsized.url)
      
        imageResults.appendChild(imageEl)
        console.log(image.images.downsized.url)
      }
    })
  //append images to the page
}


searchButton.addEventListener('click', getApi)