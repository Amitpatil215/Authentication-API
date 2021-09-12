const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");

dotenv.config();

// Import Routes
const authRoute = require("./routes/auth");

//connect to DB
mongoose.connect(process.env.DB_CONNECT_URL, () => {
  console.log("Connected to Database");
});

// Middleware
app.use(express.json());

//Route Middleware
app.use("/api/user", authRoute);

app.listen(3000, () => console.log("Server up and running"));
