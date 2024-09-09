const mongoose = require('mongoose');

const SessionSchema = new mongoose.Schema({
  name: { type: String, required: true },
  startTime: { type: Date, required: true },
  endTime: { type: Date, required: true },
  price: { type: Number, required: true },
});

module.exports = mongoose.model('Session', SessionSchema);
