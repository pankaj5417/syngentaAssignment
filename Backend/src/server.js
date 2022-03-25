const app=require("./index.js")
const connect=require("./configs/db")
const port=process.env.PORT ||2345
app.listen(2346 , async function(){
    await connect()
    console.log("server is running on port 2346")
})