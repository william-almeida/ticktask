import { Notifier } from "./Notifier.js"
import { Timer } from "./Timer.js"
import { Button } from "./Button.js"

const App = {
  async start() {
    await Notifier.request()
    Button.init()
  }
}

export { App }