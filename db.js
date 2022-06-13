const mongoose=require("mongoose")
 const connection=mongoose.connect("mongodb://localhost:27017/c4trail")

 let dataSchema=new mongoose.Schema({
    name:String,
    age:Number,
    status:Boolean 
 })
 const Data=new mongoose.model("trial",dataSchema)

 module.exports=connection