import { Notifier } from "./controllers/Notifier.js"
import { Dom } from "./controllers/DomController.js"

const App = {
  async start() {
    await Notifier.request()
    Dom.init()
  }
}

export { App }