import { Notifier } from "./Notifier.js"
import { Timer } from "./Timer.js"

const App = {
  async start() {
    await Notifier.init()
    Notifier.notify()
    Timer.init()
  }
}

export { App }