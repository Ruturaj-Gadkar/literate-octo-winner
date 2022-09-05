//collection file for schemaa and models
const mongoose=require("mongoose"); 

const usersSchema=  mongoose.Schema(
    {
       firstName:String,
       lastName:String,
       Age:Number,
       gender:String

    }
);

module.exports=mongoose.model("users",usersSchema)