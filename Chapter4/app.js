
const express = require("express");
const path = require("path");

// Import routers for user and host functionality
const UserRouter = require("./routes/userRouter");
const {HostRouter} = require("./routes/hostRouter");

// Import utility for managing root directory path
const rootDir = require("./utils/pathUtil"); 

// Initialize Express app and configure view engine
const app = express();
app.set('view engine', 'ejs');
app.set('views','views');
app.use(express.urlencoded({ extended: true }));

// Register route handlers
app.use(UserRouter);
app.use("/host", HostRouter);

// Handle 404 errors - must be last route
app.use((req, res, next) => {
  res
    .status(404)
    .sendFile(path.join(rootDir, "views", "404NOTFOUND.html"));
});

// Start server on port 3002
const PORT = 3002;
app.listen(PORT, () => {
  console.log(`Server is running on http://0.0.0.0:${PORT}`);
});
