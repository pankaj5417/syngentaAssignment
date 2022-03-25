const mongoose=require("mongoose")
const bookSchema=new mongoose.Schema({
    chapter_name:{type:String, required:true},
    pages:{type:Number,required:false},
    book_id:{type:mongoose.Schema.Types.ObjectId,
    ref:"book",
    required:true
}


})

module.exports=mongoose.model("book",bookSchema)