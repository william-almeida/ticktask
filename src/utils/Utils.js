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
  
}

export { Utils }