const express = require("express");
const mongoose = require("mongoose");
const keys = require("./config/keys");
// no const required as we're not pulling anything out of passport.js file
require("./models/User");
require("./services/passport");

mongoose.connect(keys.mongoURI);

const app = express();

// Long method:
// const authRoutes = require("./routes/authRoutes");
// authRoutes(app);
// Short method:
require("./routes/authRoutes")(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);
