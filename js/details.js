const queryString = document.location.search
const URLparams = new URLSearchParams(queryString)
const animeTitle = URLparams.get("id")
const animeName = document.querySelector(".animeName")
const animeContainer = document.querySelector(".animeContainer")
console.log(animeTitle)

async function getAnimes() {
  fetch(`https://animechan.vercel.app/api/quotes/anime?title=${animeTitle}`)
    .then((response) => response.json())
    .then((animeTitle) => {
      for (const key in animeTitle) {
        var item = animeTitle[key]

        for (const key in item) key, item[key]

        animeContainer.innerHTML += `<div class="animes">
                                   <div><a href="details.html?id=${item.anime}" class="characterName">${item.character}<a/>
                                   <p class="character">${item.character}</p></div>
                                   <p class="quote">${item.quote}</p></div>`
      }
    })
  animeName.innerHTML = `<div>Top 10 Anime Quotes from ${animeTitle}</div>`
}

getAnimes()
