import { Dom } from "./DomController.js"
import { Notifier } from "./NotifierController.js"
import { Utils } from "../utils/Utils.js"

const Timer = {
  // time: 25 * 60,
  time: 10, // for tests
  currentTime: 0,
  interval: null,
  isActive: false,

  init(){
    Timer.isActive = true
    Timer.currentTime = Timer.time
    Timer.interval = setInterval(Timer.countdown, 1000)
  },

  countdown(){
    const launcherButton = document.querySelector('#countdown-button')
    
    Timer.currentTime -= 1

    Dom.render({
      minutes: Utils.timeToMinutes(Timer.currentTime),
      seconds: Utils.timeToSeconds(Timer.currentTime)
    })

    if(Timer.currentTime === 0){
      Notifier.notify()
      Timer.isActive = false
      clearInterval(Timer.interval)
      
      Dom.enableButton(launcherButton)

      Dom.render({
        minutes: '00',
        seconds: '10'
      })
    }
  }
}

export { Timer }