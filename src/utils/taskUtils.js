import { DB } from '../model/Tasks.js'

const TaskUtils = {
  idGenerator() {
    const tasks = DB.database
    const lastTask = tasks.length - 1
    const newID = lastTask === -1 ? 0 : tasks[lastTask].id + 1
    return newID
  }, 

}

export { TaskUtils }