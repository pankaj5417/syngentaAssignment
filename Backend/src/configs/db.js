const mongoose=require("mongoose")
module.exports=()=>{
    return mongoose.connect("mongodb+srv://pankaj:pk123@cluster0.env7u.mongodb.net/lms?retryWrites=true&w=majority",{
        useNewUrlParser:true,
    useUnifiedTopology:true,
 
    })
}