import { Timer } from "./Timer.js"

const Dom = {
  target: document.querySelector('#countdown-button'),
  init() {
    Dom.target.addEventListener(
      'click',
      () => {
        Dom.startCowntdown()
      }
    )
  }
  ,
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
  }
}

export { Dom }

/*
statar o cowntdown ao clicar
se o status do botão for inativo

*/