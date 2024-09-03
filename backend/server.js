const express = require("express")
const connectToDB = require("./db_connection")
const userRouter = require("./routes/userRoute")

connectToDB()
app = express()
app.use(express.json());

// Use logger middleware for all routes
app.use(logger);

// User routes
app.use("/api/user", userRouter);

// Example of using auth middleware on a protected route
app.get('/api/protected', auth, (req, res) => {
    res.json({ message: 'This is a protected route' });
});

// Use error handler middleware
app.use(errorHandler);

// Start the server
const PORT = 1234;
app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server started at Port: ${PORT}`);
});
