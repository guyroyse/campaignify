function Adapter() {
  let fetchCharacters = dataFetcher('data/characters.json')
  let fetchSettings = dataFetcher('data/settings.json')
  let fetchPlots = dataFetcher('data/plots.json')

  function dataFetcher(path) {
    return function() {
      return fetch(path).then(response => response.json())
    }
  }

  return { fetchCharacters, fetchSettings, fetchPlots }
}

export default Adapter
