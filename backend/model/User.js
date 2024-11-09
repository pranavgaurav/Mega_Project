const mongoose=require("mongoose");

const userschema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    role:{
        type:String,
        required:true
    },
    dept:{
        type:String,
        required:true
    },
    img:{
        type:String,
        required:true
    },
    title:{
        type:String,
        required:true
    }
})


module.exports=mongoose.model("User",userschema);