//CRUD operations

const mongodb= require('mongodb')
const MongoClient = mongodb.Mongoclient

const connectionURL='mongodb://127.0.0.1:27017'
const databaseName='taskmanage'

MongoClient.connect(connectionURL,{useNewParser:true},(error,client)=>{
 if(error){
     return console.log("Unable to connect to database!")
 }
})
