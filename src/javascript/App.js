import { Notifier } from "./Notifier.js"
import { Timer } from "./Timer.js"
import { View } from "./View.js"

const App = {
  async start() {
    await Notifier.init()
    View.init()
  }
}

export { App }