const express = require('express');
const Session = require('../models/session');

const router = express.Router();

// Get all sessions
router.get('/', async (req, res) => {
  try {
    const sessions = await Session.find();
    res.json(sessions);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Create a new session
router.post('/', async (req, res) => {
  const session = new Session({
    name: req.body.name,
    startTime: req.body.startTime,
    endTime: req.body.endTime,
    price: req.body.price,
  });

  try {
    const newSession = await session.save();
    res.status(201).json(newSession);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Get a session by ID
router.get('/:id', async (req, res) => {
  try {
    const session = await Session.findById(req.params.id);
    if (session == null) {
      return res.status(404).json({ message: 'Cannot find session' });
    }
    res.json(session);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Update a session by ID
router.patch('/:id', async (req, res) => {
  try {
    const session = await Session.findById(req.params.id);
    if (session == null) {
      return res.status(404).json({ message: 'Cannot find session' });
    }

    if (req.body.name != null) {
      session.name = req.body.name;
    }
    if (req.body.startTime != null) {
      session.startTime = req.body.startTime;
    }
    if (req.body.endTime != null) {
      session.endTime = req.body.endTime;
    }
    if (req.body.price != null) {
      session.price = req.body.price;
    }

    const updatedSession = await session.save();
    res.json(updatedSession);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete a session by ID
router.delete('/:id', async (req, res) => {
  try {
    const session = await Session.findById(req.params.id);
    if (session == null) {
      return res.status(404).json({ message: 'Cannot find session' });
    }

    await session.remove();
    res.json({ message: 'Session deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
