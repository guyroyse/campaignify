function Model() {

  let characters, settings, plots

  function load() {
    let paths = ['data/characters.json', 'data/settings.json', 'data/plots.json']

    return Promise
      .all(paths.map(path => fetch(path).then(response => response.json())))
      .then(lists => [characters, settings, plots] = lists)
  }
    
  function campaignify() {
    return {
      character: selectRandom(characters),
      setting: selectRandom(settings),
      plot: selectRandom(plots)
    }
  }

  function selectRandom(items) {
    return items[Math.floor(Math.random() * items.length)]
  }

  return { load, campaignify }
}

function View() {

  let button = document.querySelector("#generate")
  let characterElement = document.querySelector("#character")
  let settingArticleElement = document.querySelector("#settingArticle")
  let settingElement = document.querySelector("#setting")
  let plotElement = document.querySelector("#plot")

  function enableButton() { button.disabled = false }
  function disableButton() { button.disabled = true }

  function characterText(text) { characterElement.textContent = text }
  function settingArticle(text) { settingArticleElement.textContent = text }
  function settingText(text) { settingElement.textContent = text }
  function plotText(text) { plotElement.textContent = text }

  function onButtonClick(handler) { button.addEventListener('click', handler) }

  return {
    enableButton, disableButton,
    characterText, settingArticle, settingText, plotText,
    onButtonClick }
}

function Controller() {

  let model, view

  function onLoad() {
    model = new Model()
    view = new View()

    view.disableButton()
    view.onButtonClick(() => clickHandler())
  
    model.load().then(() => {
      view.enableButton()
      clickHandler()
    })
  }

  function clickHandler() {
    let { character, setting, plot } = model.campaignify()
    view.characterText(character)
    view.settingArticle(startsWithVowel(setting) ? "an" : "a")
    view.settingText(setting)
    view.plotText(plot)
  }

  function startsWithVowel(s) {
    return s.match(/^[aeiouAEIOU]/)
  }
  
  return { onLoad }
}

let controller = new Controller()

document.addEventListener('DOMContentLoaded', () => controller.onLoad())
