import { DB } from "../model/Tasks.js";
import { TaskUtils } from "../utils/taskUtils.js";

const Task = {
  init() {
    const tasks = DB.database
    for (let i = 0; i < tasks.length; i++) {
      Task.show(tasks[i])
    }

  },
  start() {
    Task.handleButton()
    Task.create()
  },

  show(task) {
    const container = document.querySelector('.task-container')
    container.innerHTML += `
      <div class="item">
        <input type="checkbox">
        <p>${task.description}</p>
      </div>`
  },
  
  handleButton() {
    const newTask = document.querySelector('#new-task')
    const button = document.querySelector('#add-task')
    newTask.addEventListener('input', ()=> {
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
    button.addEventListener('click', ()=> {
      const description = document.querySelector('#new-task').value
      DB.addNewTask({
        id: TaskUtils.idGenerator(),
        description: description
      })
      Task.init()
    } )
  }
}

export { Task }
