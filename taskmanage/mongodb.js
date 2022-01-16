//CRUD operations

// const mongodb= require('mongodb')
// const MongoClient = mongodb.MongoClient
// const ObjectID = mongodb.ObjectID

const { MongoClient, ObjectID } = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'taskmanage'

// const id = new ObjectID()
// console.log(id.id.length)
// console.log(id.toHexString().length)
// console.log(id.getTimestamp())

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
  if (error) {
    return console.log("Unable to connect to database!")
  }
  const db = client.db(databaseName)

  // db.collection('users').findOne({_id:new ObjectID("61e18e5830cf074a941f6866")},(error,user)=>{
  //   if (error){
  //     return console.log('unable to fetch')
  //   }
  //   console.log(user)
  // })

  // db.collection('users').find({ age:21 }).toArray((error,users)=>{
  //   console.log(users)
  // })
  // db.collection('users').find({ age:21 }).count((error,count)=>{
  //   console.log(count)
  // })


  // // #challenge-2
  // db.collection('tasks').findOne({_id:new ObjectID('61e267c829cc973570728d64')},(error,task)=>{
  //       console.log(task)
  // })


  // ----------------------------------------------------------------------------------------------------------

  const updatePromise = db.collection('users').updateOne({
    _id: new ObjectID("61e18ede048f6236388fd48a")
  },
    {
      $set: {
        name: 'Andrew',

      },
      $inc: {
        age: 1
      }
    })
  updatePromise.then((result) => {
    console.log(result)
  }).catch((error) => {
    console.log(error)
  })


  db.collection('tasks').updateMany({
    completed: false
  }, {
    $set: {
      completed: true
    }
  }).then((result) => {
    console.log(result.modifiedCount)
  }).catch((error) => {
    console.log(error)
  })


  // ------------delete documents---------------------

  db.collection('users').deleteMany({
    age: 21
  }).then((result) => {
    console.log(result)
  }).catch((error) => {
    console.log(error)
  })


  db.collection('tasks').deleteOne({
    description:'renew inspection'
  }).then((result)=>{
    console.log(result)
  }).catch((error)=>{
    console.log(error)
  })
})
