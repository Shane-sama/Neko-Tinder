fetch('https://nekos.best/api/v2/neko')
  .then(response => response.json())
  .then(json => {
    console.log(json.results[0].url)
    document.getElementById("neko").src = json
    })