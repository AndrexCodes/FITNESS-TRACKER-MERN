
const mongoose = require('mongoose');

const coachSchema = new mongoose.Schema({


name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  phone: {
    type: Number,
    required: true,
    unique: true
  }

})
const Coach = mongoose.model('Coach', userSchema);

module.exports = Coach;