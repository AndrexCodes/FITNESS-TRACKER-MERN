const express = require("express")
const connectToDB = require("./db_connection")
const userRouter = require("./routes/userRoute")

connectToDB()
app = express()
app.use(express.json());
app.use("/api/user", userRouter)


app.listen("0.0.0.0", 1234, ()=>{
    console.log("server started at Port: 1234")
})


