const DB = {
  database: [
    {
      id: 0,
      description:"Fazer as model e exibir na index",
    },
    {
      id: 1,
      description:"Manipular os dados do array []",
    },
    {
      id: 2,
      description:"recirar os temas []",
      status: 'in-progress'
    },
    {
      id: 3,
      description:"Maratonar animes",
      status: 'in-progress'
    },
    {
      id: 4,
      description:"Manipular os dados do array []",
      status: 'in-progress'
    }
  ],
  
  addNewTask({id, description}) {
    DB.database.push({
      id: id,
      description: description
    })
    
  }
}

export { DB }