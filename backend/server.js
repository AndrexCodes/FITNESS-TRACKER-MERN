const express = require("express");
const connectToDB = require("./config/db");
const userRouter = require("./routes/userRoute");
const auth = require('./middleware/authMiddleware');
const logger = require('./middleware/logger');
const errorHandler = require('./middleware/errorHandler');
const cors = require('cors'); // Import the CORS middleware
const authController = require('./controllers/authController'); // Import the auth controller

// Connect to the database
connectToDB();

// Initialize the express application
const app = express();

// Enable CORS
app.use(cors());

// Middleware to parse JSON bodies
app.use(express.json());

// Use logger middleware for all routes
app.use(logger);

// User routes
app.use("/api/user", userRouter);
app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/sessions', require('./routes/sessionRoute'));
app.use('/api/dashboard', require('./routes/dashboardRoutes'));

// Public routes (fixed: use app, not router)
app.get('/', (req, res) => res.send('Welcome to Fitness Tracker!'));
app.post('/signup', authController.signup);
app.post('/login', authController.login);

// Example of using auth middleware on a protected route
// app.get('/api/protected', auth, (req, res) => {
//     res.json({ message: 'This is a protected route' });
// });

// Use error handler middleware
app.use(errorHandler);

// Start the server
const PORT = 3000;
app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server started at Port: ${PORT}`);
});
