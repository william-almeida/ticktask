  import { DB } from  '../model/Tasks.js'

const TaskUtils = {
  idGenerator() {
    const tasks = DB.database
    const lastTask = tasks.length - 1
    console.log('last task:', lastTask)
    const newID = lastTask === -1 ? 0 : tasks[lastTask].id + 1
    console.log('new id:', newID)
    TaskUtils.hasDescrition()
  },
  hasDescrition() {
    const input = document.querySelector('#new-task')
    
    console.log(input.nodeValue)

  }
}

export{ TaskUtils }