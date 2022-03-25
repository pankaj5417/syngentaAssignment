const express=require("express")

const bookController=require("./controllers/book.Controller")
const app=express()
app.use(express.json())

app.use("/book",bookController)

module.exports=app