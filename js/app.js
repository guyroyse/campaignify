import ViewController from './view-controller.js'

function App() {

  let viewController

  function start() {
    document.addEventListener('DOMContentLoaded', () => {
      viewController = new ViewController()
    })
  }

  return { start }
}

export default App

