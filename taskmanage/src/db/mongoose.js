const mongoose =require('mongoose')
const validator=require('validator')

mongoose.connect('mongodb://127.0.0.1:27017/taskmanage-api',{
useNewUrlParser:true,
useCreateIndex:true
})
const User = mongoose.model('User',{
    name:{
        type:String,
        required:true,
        trim:true,
    },
    email:{
      type:String,
      required:true,
      trim:true,
      lowercase:true,
      validate(value){
          if(!validator.isEmail(value)){
              throw new Error('Email is invalid')
          }
      }
    },
    age:{
        type:Number,
        default:0,
        validate(value){
            if(value<0){
                throw new Error('Age must be a positive number')

            }
        }
    },
    password:{
          type:String,
          required:true,
        trim:true,
        minlength:7,
        validate(value){
            if(value.toLowerCase().includes('password')){
                throw new Error('password cannot contain "password"')

            }
        }
    }
})
const me=new User({
    name:'        Deeksha ',
    email:'MYdeeksha@uhhW.IO',
    password:'       gjhjhk '
})

me.save().then((me)=>{
       console.log(me)
}).catch((error)=>{
    console.log('Error',error)
})


//challenge-1//
const Task=mongoose.model('Task',{
    description:{
        type:String,
        trim:true,
        required:true
    },
    completed:{
        type:Boolean,
        default:false
    }
})

const task=new Task({
    description:'learn something'
    
})

task.save().then(()=>{
    console.log(task)
}).catch((error)=>{
    console.log('Error',error)
})
