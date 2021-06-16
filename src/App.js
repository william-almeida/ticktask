import { Notifier } from "./controllers/NotifierController.js"
import { Dom } from "./controllers/DomController.js"
import { Task } from "./controllers/TaskController.js"

const App = {
  async init() {
    await Notifier.request()
    Dom.init()
    console.log('All right')
    Task.init()
  }
}

export { App }
