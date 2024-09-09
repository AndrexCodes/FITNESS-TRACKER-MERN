const express = require('express');
const { protect } = require('../middleware/authMiddleware');
const router = express.Router();

// Protect the dashboard route
router.get('/', protect, (req, res) => {
  res.send('Welcome to your dashboard');
});

module.exports = router;
