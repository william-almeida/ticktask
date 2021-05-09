import { DB } from '../model/Tasks.js'

const TaskUtils = {
  idGenerator() {
    const tasks = DB.database
    const lastTask = tasks.length - 1
    const newID = lastTask === -1 ? 0 : tasks[lastTask].id + 1
  },

  handleButton() {
    const newTask = document.querySelector('#new-task')
    const button = document.querySelector('#add-task')
    newTask.addEventListener('input', ()=> {
      const description = newTask.value
      if (description !== null && description !== '') {
        //habilita o botão
        button.disabled = false;
      } else {
        //desabilita o botão se o conteúdo do input ficar em branco
        bu.disabled = true;
      }
    })
    
  },

}

export { TaskUtils }