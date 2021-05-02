import { Timer } from "./Timer.js"

const Button = {
  target: document.querySelector('#countdown-button'),
  init() {
    Button.target.addEventListener(
      'click',
      () => {
        Button.startCowntdown()
      }
    )
  }
  ,
  startCowntdown() {
    if (!Timer.isActive) {
      Timer.init()
      Button.disable()
    }
  },
  disable() {
    Button.target.disabled = true
    Button.target.classList.add('disabled')
  }

}

export { Button }

/*
statar o cowntdown ao clicar
se o status do botão for inativo

*/