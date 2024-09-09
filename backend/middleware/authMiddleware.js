const jwt = require('jsonwebtoken');

// Protect Routes - only logged-in users can access protected routes
const protect = (req, res, next) => {
  let token = req.header('Authorization');
  if (!token) return res.status(401).json({ message: 'No token, authorization denied' });

  try {
    token = token.split(" ")[1]; // Bearer <token>
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded.user;
    next();
  } catch (err) {
    res.status(401).json({ message: 'Token is not valid' });
  }
};

// Public Access for Home, Session, and Cart (anyone can access these routes)
const publicAccess = (req, res, next) => {
  next(); // Just move to the next middleware/controller
};

module.exports = { protect, publicAccess };
