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
    button.addEventListener('click', ()=> { alert('okok')} )
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

}

export { TaskUtils }