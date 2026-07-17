const express = require("express");
const cors = require("cors");
require("dotenv").config();

const connectDB = require("./config/db");
const leadRoutes = require("./routes/leadRoutes");

const app = express();

// Connect Database
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/leads", leadRoutes);

// Test Route
app.get("/", (req, res) => {
  res.send("Mini CRM Backend is Running 🚀");
});

// Server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});