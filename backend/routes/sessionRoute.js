const express = require('express');
const { createSession } = require('../controllers/sessionController');
const { protect, publicAccess } = require('../middleware/authMiddleware');
const router = express.Router();

// Open for everyone to view all sessions
router.get('/', publicAccess, async (req, res) => {
  const sessions = await Session.find();
  res.json(sessions);
});

// Only logged-in users can add a new session
router.post('/', protect, createSession);

module.exports = router;
