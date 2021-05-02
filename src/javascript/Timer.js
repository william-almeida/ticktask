import { Dom } from "./Dom.js"
import { Notifier } from "./Notifier.js"
import { Utils } from "./Utils.js"
import { View } from "./View.js"

const Timer = {
  time: 25 * 60,
  currentTime: 0,
  interval: null,
  isActive: false,

  init(){
    Timer.isActive = true
    Timer.currentTime = Timer.time
    Timer.interval = setInterval(Timer.countdown, 1000)
  },

  countdown(){
    Timer.currentTime -= 1

    View.render({
      minutes: Utils.timeToMinutes(Timer.currentTime),
      seconds: Utils.timeToSeconds(Timer.currentTime)
    })

    if(Timer.currentTime === 0){
      Notifier.notify()
      Timer.isActive = false
      Dom.enableButton()
      clearInterval(Timer.interval)

    }
  }
}

export { Timer }