const express = require("express")
const userRouter = express.Router()
const { User } = require("../models/user");

// Action - signup, signin, 
userRouter.get("/signup", (req, res)=>{
    const jsonData = req.body;
    const newUser = new User({
        
    })
    res.json({})
})


module.exports = userRouter