const mongoose = require("mongoose")
const dotenv = require("dotenv")

dotenv.config()
const connectionString = process.env.DB_STRING
const connectToDB = async () => {
    try {
        await mongoose.connect(connectionString, {
            autoIndex: true
        })
        console.log('Connected to Mongodb Atlas');} catch (error) {
        console.error(error);
    }
}

module.exports = connectToDB