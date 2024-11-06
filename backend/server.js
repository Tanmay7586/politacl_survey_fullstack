// backend/server.js
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const pollRoutes = require("./routes/pollRoutes");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({ origin: "http://localhost:5173" })); // Replace 5173 with your frontend port if different  
app.use(express.json());

// Routes
app.use("/api/polls", pollRoutes);

// Connect to DB and start server
connectDB();
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
