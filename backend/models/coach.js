
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,P
  },
  phone: {
    type: Number,
    required: true,
    unique: true
  }

})