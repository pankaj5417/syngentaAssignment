const mongoose=require("mongoose")
const bookSchema=new mongoose.Schema({
    title:{type:String, required:true},
    category:{type:String, required:false},
    author:{type:String, required:false}
   // chapter_no:{type:Number,required:false},
   // year:{type:Number,required:false}


})

module.exports=mongoose.model("book",bookSchema)