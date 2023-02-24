const url = "https://animechan.vercel.app/api/quotes"

const dataContainer = document.querySelector(".animeContainer")

async function getQuotes() {
  try {
    const response = await fetch(url)
    const data = await response.json()

    const quotes = data

    dataContainer.innerHTML = ""
    for (const key in quotes) {
      var item = quotes[key]

      for (const key in item) key, item[key]

      dataContainer.innerHTML += `<div class="animes">
                                   <div><a href="details.html?id=${item.anime}" class="characterName">${item.character}<a/>
                                   <p class="character">${item.character}</p></div>
                                   <p class="quote">${item.quote}</p></div>`
    }
  } catch (err) {
    console.log(err)
  }
}

getQuotes()
