import { Notifier } from "./Notifier.js"
import { Dom } from "./Dom.js"

const App = {
  async start() {
    await Notifier.request()
    Dom.init()
  }
}

export { App }