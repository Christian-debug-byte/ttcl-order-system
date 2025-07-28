const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

const app = express();

dotenv.config();

connectDB();
// Start Server
const PORT = process.env.PORT || 7000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
