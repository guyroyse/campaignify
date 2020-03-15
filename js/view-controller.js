import Model from './model.js'
import { Button, Span } from './widgets.js'

function ViewController() {
  let model = new Model()

  let button = new Button('#generate')
  let character = new Span('#character')
  let settingArticle = new Span('#settingArticle')
  let setting = new Span('#setting')
  let plot = new Span('#plot')

  button.onClick(() => onButtonClicked())

  button.disable()
  buildCampaign()
    .then(() => button.enable())

  function onButtonClicked() {
    button.disable()
    buildCampaign()
      .then(() => button.enable())
  }

  function buildCampaign() {
    return model
      .campaign()
      .then(campaign => {
        character.text(campaign.character.name)
        settingArticle.text(campaign.setting.article)
        setting.text(campaign.setting.name)
        plot.text(campaign.plot.name) })
  }
}

export default ViewController
