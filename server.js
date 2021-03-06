require("dotenv").config();
const express = require("express");
const path = require("path");
const cors = require("cors");
const PORT = process.env.PORT || 3001;
const app = express();
const db = require("./models");
const authenticationController = require("./controllers/authenticationController");

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("*", (req, res, next) => {
  res.header("Access-Control-Allow-Origin", process.env.ORIGIN);
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  res.header("Access-Control-Allow-Credentials", true);
  next(); 
});

app.options("*", cors());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Define API routes here
app.get("/api/ping", (req, res) => {
  res.json({running: true});
});

app.post("/register", authenticationController.registerUser);
app.post("/login", authenticationController.loginUser);
app.get("/auth/google", authenticationController.googleAuth);
app.get("/auth/google/callback", authenticationController.googleCallback);

require("./routes/apiRoutesExpense")(app);

// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

var syncOptions = { force: false };

// If running a test, set syncOptions.force to true
// clearing the `testdb`
if (process.env.NODE_ENV === "test") {
  syncOptions.force = true;
}

db.sequelize.sync(syncOptions).then(() => {
  app.listen(PORT, () => {
    console.log(`🌎 ==> API server now on port ${PORT}!`);
  });
});

