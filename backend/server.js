const express = require("express")
const connectToDB = require("./db_connection")
const userRouter = require("./routes/userRoute")

connectToDB()
app = express()
app.use(userRouter)


//app.use('/api/users', userRoutes);
//app.use('/api/sessions', sessionRoutes);


app.listen(1234, ()=>{
    console.log("server started at Port: 1234")
})


