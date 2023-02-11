require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const connection = require("./db");
const userRoutes = require("./app/routes/users");
const authRoutes = require("./app/routes/auth");
const logoutRoutes = require("./app/routes/logout");

// database connection
connection();

// middlewares
app.use(express.json());
app.use(cors());

// routes
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/logout", logoutRoutes);

require('./app/routes/lecHall.router')(app)

const port = process.env.PORT || 8080;
app.listen(port, console.log(`Listening on port ${port}...`));
