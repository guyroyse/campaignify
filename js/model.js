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
      .then(selections => buildCampaign(...selections))
  }

  let selectCharacter = selector('characters', adapter.fetchCharacters)
  let selectSetting = selector('settings', adapter.fetchSettings)
  let selectPlot = selector('plots', adapter.fetchPlots)

  function buildCampaign(character, setting, plot) {
    return {
      character: {
        name: character.name
      },
      setting: {
        article: startsWithVowel(setting.name) ? "an" : "a",
        name: setting.name
      },
      plot: { 
        name: plot.name,
        link: plot.link,
        punctuation: endsWithPunctuation(plot.name) ? "" : "."
      }
    }
  }

  function startsWithVowel(s) {
    return s.match(/^[aeiouAEIOU]/)
  }

  function endsWithPunctuation(s) {
    return s.match(/[\.\!\?]$/)
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
