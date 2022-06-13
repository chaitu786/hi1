const express= require("express")
const connect=require("./db")
const app=express()

app.use(express.urlencoded({extended:true}))
app.use(express.json())


app.get('/',(req,res)=>{
    res.end("working")
})

app.listen(8080,async(err,data)=>{

   
    await connect
    console.log("connected");
    
    // try {
    //     await connect
    //     console.log("connected");
    // } catch (error) {
    //     console.log(error);
    // }
})