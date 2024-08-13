const express = require("express")
const userRouter = express.Router()
const { User } = require("../models/user");

// Action - signup, signin, 
userRouter.get("/signup", async (req, res) => {
    const jsonData = req.body;
    const newUser = new User(jsonData)
    try {
        const result = await newUser.save()
        res.json({status: 200})
    } catch (error) {
        res.json({status: 404})
    }
})

userRouter.get("/signin", async (req, res) => {
    const jsonData = req.body;
    User.findOne({name:jsonData.name})
})


module.exports = userRouter