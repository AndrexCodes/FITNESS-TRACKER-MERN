const express = require('express');
const { publicAccess } = require('../middleware/authMiddleware');
const router = express.Router();

// Allow anyone to view the home page
router.get('/', publicAccess, (req, res) => {
  res.send('Welcome to the Fitness Tracking Application!');
});

module.exports = router;
