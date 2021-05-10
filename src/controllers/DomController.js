import { Timer } from "./TimerController.js"

const Dom = {
  target: document.querySelector('#countdown-button'),
  init() {
    Dom.target.addEventListener('click',() => { Dom.startCowntdown()})
  },

  startCowntdown() {
    if (!Timer.isActive) {
      Timer.init()
      Dom.disableButton()
    }
  },

  disableButton() {
    Dom.target.disabled = true
    Dom.target.classList.add('disabled')
  },

  enableButton() {
    Dom.target.disabled = false
    Dom.target.classList.remove('disabled')
  },

  render({minutes, seconds}) {
      const target = document.querySelector('#clock')
      target.innerHTML = `<span>${minutes}:${seconds}</span>`
  }
}

export { Dom }
