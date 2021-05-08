import { TasksDB } from "../model/Tasks.js";

const Render = {
  init() {
    const tasks = TasksDB.database
    for (let i = 0; i < tasks.length; i++) {
      Render.show(tasks[i])
    }
  },
  show(task) {
    const container = document.querySelector('.task-container')
    container.innerHTML += `
      <div class="item">
        <input type="checkbox">
        <p>${task.description}</p>
      </div>`
  }
}

export { Render }
