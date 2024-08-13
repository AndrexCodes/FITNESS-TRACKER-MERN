//file to define the User schema:

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
    unique: true
  },
  age: {
    type: Number,
    required: true,
  },
  created: {
    type: Number,
    required: true
  },
  updated: {
    typed: Number,
    required: true
  }
});

const User = mongoose.model('User', userSchema);

module.exports = User;
