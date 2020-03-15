function Button(selector) {
  let button = document.querySelector(selector)

  function onClick(handler) {
    button.addEventListener('click', handler)
  }

  function enable() { button.disabled = false }
  function disable() { button.disabled = true }

  return { onClick, enable, disable }
}

function Span(selector) {
  let element = document.querySelector(selector)

  function text(s) {
    if (s !== undefined) element.textContent = s
  }

  return { text }
}

export { Button, Span }
