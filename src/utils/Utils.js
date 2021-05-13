import { DB } from "../model/Tasks.js"

const Utils = {
  timeToMinutes(time) {
    const minutes = Math.floor(time / 60)
    return Utils.formatTime(minutes)
  },

  timeToSeconds(time) {
    const seconds = time % 60
    return Utils.formatTime(seconds)
  },

  formatTime(time) {
    return String(time).padStart(2, '0')
  },
  
  idGenerator() {
    const tasks = DB .database
    const lastTask = tasks.length - 1
    const newID = lastTask === -1 ? 0 : tasks[lastTask].id + 1
    return newID
  }
}

export { Utils }