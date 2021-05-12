import { Timer } from "./TimerController.js"

const Dom = {
  init() {
    Dom.startCowntdown()
  },

  startCowntdown() {
    const launcherButton = document.querySelector('#countdown-button')
    launcherButton.addEventListener('click', () => {
      Timer.init()
      Dom.disableButton(launcherButton)
    })
  },

  disableButton(button) {
    button.disabled = true
    button.classList.add('disabled')
  },

  enableButton(button) {
    button.disabled = false
    button.classList.remove('disabled')
  },

  render({ minutes, seconds }) {
    const clock = document.querySelector('#clock')
    clock.innerHTML = `<span>${minutes}:${seconds}</span>`
  }
}

export { Dom }
