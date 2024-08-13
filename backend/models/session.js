const mongoose = require('mongoose');

const sessionSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  startTime: {
    type: Date,
    required: true,
  },
  endTime: {
    type: Date,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
});

const Session = mongoose.model('Session', sessionSchema);

module.exports = Session;
