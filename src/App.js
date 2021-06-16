import { Notifier } from "./controllers/NotifierController.js"
import { Dom } from "./controllers/DomController.js"

const App = {
  async init() {
    await Notifier.request()
    Dom.init()
    console.log('All right')
  }
}

export { App }
