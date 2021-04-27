import { Notifier } from "./Notifier.js"
import { Utils } from "./Utils.js"
import { View } from "./View.js"

const Timer = {
  time: 25 * 60,
  currentTime: 0,
  interval: null,

  init(){
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
      clearInterval(Timer.interval)
    }
    console.log(Timer.currentTime)
  }
}

export { Timer }