import { DB } from "../model/Tasks.js";
import { TaskUtils } from "../utils/taskUtils.js";

const Task = {
  init() {
    Task.update()
    Task.handleButton()
    Task.create()
  },

  update() {
    const tasks = DB.database
    const container = document.querySelector('.task-list-container')
    container.innerHTML = ' '
    for (let i = 0; i < tasks.length; i++) {
      Task.show(tasks[i])
    }

  },

  show(task) {
    const container = document.querySelector('.task-list-container')
    container.innerHTML += `
      <div class="item">
        <input type="checkbox">
        <p>${task.description}</p>
      </div>`
  },

  handleButton() {
    const newTask = document.querySelector('#new-task')
    const button = document.querySelector('#add-task')

    // When entering a new task, obtain the description and enable the button
    newTask.addEventListener('input', () => {
      const description = newTask.value
      if (description !== '') {
        //habilita o botão
        button.disabled = false
        button.classList.remove('disabled')
      } else {
        //desabilita o botão se o conteúdo do input ficar em branco
        button.disabled = true
        button.classList.add('disabled')
      }
    })

  },

  create() {
    const button = document.querySelector('#add-task')
    button.addEventListener('click', () => {
      const description = document.querySelector('#new-task').value
      DB.addNewTask({
        id: TaskUtils.idGenerator(),
        description: description
      })
      Task.update()
    })
  }
}

export { Task }
