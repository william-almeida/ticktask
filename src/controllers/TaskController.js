import { DB } from "../model/Tasks.js";

const Task = {
  init() {
    const tasks = DB.database
    for (let i = 0; i < tasks.length; i++) {
      Task.show(tasks[i])
    }
  },
  show(task) {
    const container = document.querySelector('.task-container')
    container.innerHTML += `
      <div class="item">
        <input type="checkbox">
        <p>${task.description}</p>
      </div>`
  },
  createTask() {
    
  }
}

export { Task }
