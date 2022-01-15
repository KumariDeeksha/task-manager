//CRUD operations

const mongodb= require('mongodb')
const MongoClient = mongodb.MongoClient

const connectionURL='mongodb://127.0.0.1:27017'
const databaseName='taskmanage'

MongoClient.connect(connectionURL,{useNewUrlParser:true},(error,client)=>{
 if(error){
     return console.log("Unable to connect to database!")
 }
  const db =client.db(databaseName)
  db.collection('users').insertOne({
      name: 'Deeksha',
      age: 21
  },(error,result) =>{
    if(error){
    return console.log('unable to insert user')}
    console.log(result.ops)
    // ops is an array of documents
  })
    db.collection('users').insertMany([
      {
          name:'jen',
          age:34
    },
    {
      name:'harry',
      age:32
    }, (error,result)=>{
       if(error){
        return console.log('unable to insert user')}
        
       
       console.log(result.ops)
    }
  ])


// #challenge
 db.collection('tasks').insertMany([
   {
     description:'clean the house',
     completed: true
   },
   {
    description:'renew inspection',
    completed: false
   },
   {
    description:'take care of pots',
    completed: true
   } 
  ],(error,result)=>{
        if(error){
        return console.log('unable to insert document!')
   }
   console.log(result.ops)
  })
})

