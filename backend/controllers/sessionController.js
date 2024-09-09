const Session = require('../models/Session');

exports.createSession = async (req, res) => {
  const { name, startTime, endTime, price } = req.body;

  try {
    const newSession = new Session({ name, startTime, endTime, price });
    await newSession.save();
    res.status(201).json(newSession);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};

// Implement other CRUD operations (read, update, delete) as needed.
