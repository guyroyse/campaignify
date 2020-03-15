import Adapter from './adapter.js'

function Model() {
  let adapter = new Adapter()

  let data = {
    characters: null,
    settings: null,
    plots: null
  }

  function campaign() {
    return Promise
      .all([ selectCharacter(), selectSetting(), selectPlot() ])
      .then(selections => {
        let [character, setting, plot] = selections
        return {
          character: {
            name: character
          },
          setting: {
            article: startsWithVowel(setting) ? "an" : "a",
            name: setting
          },
          plot
        }})
  }

  let selectCharacter = selector('characters', () => adapter.fetchCharacters())
  let selectSetting = selector('settings', () => adapter.fetchSettings())
  let selectPlot = selector('plots', () => adapter.fetchPlots())

  function startsWithVowel(s) {
    return s.match(/^[aeiouAEIOU]/)
  }

  function selector(listName, fetcher) {
    return function() {
      if (data[listName]) {
        return Promise.resolve(selectRandom(data[listName]))
      }
  
      return fetcher()
        .then(response => {
          data[listName] = response
          return selectRandom(data[listName])
        })  
    }
  }

  function selectRandom(list) {
    return list[Math.floor(Math.random() * list.length)]
  }

  return { campaign }
}

export default Model
