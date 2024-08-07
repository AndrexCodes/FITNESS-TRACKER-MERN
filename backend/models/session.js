const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    starttime: {
        type: Number,
        required: true,
    },
    endtime: {
        type: Number,
        required: true,
    },
    members: {
        type: Array,
        required: true
    }
})