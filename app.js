let characters, settings, plots
let button, character, setting, plot

document.addEventListener('DOMContentLoaded', () => {

  character = document.querySelector("#character")
  setting = document.querySelector("#setting")
  plot = document.querySelector("#plot")

  button = document.querySelector("#generate")
  button.addEventListener('click', () => campaignify())

  Promise.all([

    fetch('data/characters.json')
      .then(response => response.json())
      .then(data => characters = data),

    fetch('data/settings.json')
      .then(response => response.json())
      .then(data => settings = data),

    fetch('data/plots.json')
      .then(response => response.json())
      .then(data => plots = data)

  ])
    .then(csp => [characters, settings, plots] = csp)
    .then(campaignify)

})

function campaignify() {
  character.textContent = selectRandom(characters)
  setting.textContent = selectRandom(settings)
  plot.textContent = selectRandom(plots)
}

function selectRandom(items) {
  return items[Math.floor(Math.random() * items.length)]
}
