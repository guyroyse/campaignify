document.addEventListener('DOMContentLoaded', async () => {

  let button = document.querySelector("#generate")
  button.disabled = true

  let lists = await fetchLists([
    'data/characters.json',
    'data/settings.json',
    'data/plots.json'
  ])

  button.addEventListener('click', () => campaignify(...lists))
  button.disabled = false

  campaignify(...lists)

})

async function fetchLists(names) {
  return await Promise
    .all(names
      .map(path => fetch(path).then(response => response.json())))
}

function campaignify(characters, settings, plots) {
  updateSelector("#character", characters)
  updateSelector("#setting", settings)
  updateSelector("#plot", plots)
}

function updateSelector(selector, list) {
  document.querySelector(selector).textContent = selectRandom(list)
}

function selectRandom(items) {
  return items[Math.floor(Math.random() * items.length)]
}
