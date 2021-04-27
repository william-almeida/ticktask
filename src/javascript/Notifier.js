const Notifier = {
  permission: 'default',
  async init (){
    if (Notifier.permission === 'denied' ) {
      Notifier.permission = await Notification.requestPermission()
    }
  },
  notify (){
    if (Notification.permission === 'granted') {
      new Audio('../audio/notification.mp3').play();
      new Notification('Fim do ciclo!', {
        body: `Tenha um descanso de 5 min e volte ao foco.`
      })
    }
  }
}

export { Notifier }