const {Schema,model}=require("mongoose")


const UserSchema= Schema({
    name:{type:String,required:true},
    email:{type:String,required:true},
    
    password:{type:String,required:true},
    number:{type:Number,required:true},
    address:String
   
  
    
})
const User =model("user",UserSchema)

module.exports={User}