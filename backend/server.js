const express = require("express")
const connectToDB = require("./db_connection")
const userRouter = require("./routes/userRoute")

connectToDB()
app = express()
app.use(userRouter)


app.listen(1234, ()=>{
    console.log("server started at Port: 1234")
})


