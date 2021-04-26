const Notifyer = {
  async init (){
    const permission = await Notification.requestPermission()
    
  },
  notify (){}
}

export { Notifyer }