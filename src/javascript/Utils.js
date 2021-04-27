const Utils = {
  timeToMinutes(time) {
    const minutes = time / 60
    return Math.floor(minutes)
  },
  timeToSeconds(time) {
    const seconds = time % 60
    return Math.floor(seconds)
  }
}

export { Utils }