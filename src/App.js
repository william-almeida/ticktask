import { Notifier } from "./controllers/NotifierController.js"
import { Dom } from "./controllers/DomController.js"
import { Render } from "./controllers/TaskController.js"

const App = {
  async init() {
    await Notifier.request()
    Dom.init()
    Render.init()
  }
}

export { App }