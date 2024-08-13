const mongoose = require('mongoose');

const sessionSchema = new mongoose.Schema({
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
const Session = mongoose.model('Session', userSchema);

module.exports = Session;