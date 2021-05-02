const Notifier = {
  permission: 'default',
  async request (){
    if (Notifier.permission !== 'granted' ) {
      Notifier.permission = await Notification.requestPermission()
    }
  },
  notify (){
    const audio = new Audio('/src/audio/notification.mp3')
    if (Notification.permission === 'granted') {
      audio.play()
      new Notification('Fim do ciclo!', {
        body: `Tenha um descanso de 5 min e volte ao foco.`
      })
    }
  }
}

export { Notifier }