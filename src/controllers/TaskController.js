import { TasksDB } from "../model/Tasks.js";

const Task = {
  init() {
    const taskList = TasksDB.database

    for (let i = 0; i < taskList.length; i++) {
      console.log(taskList[i])
      // console.log('asdaj')
    }
  }
}

export { Task }
