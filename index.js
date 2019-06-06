const express = require("express");
// no const required as we're not pulling anything out of passport.js file
require("./services/passport");
const app = express();

// Long method:
// const authRoutes = require("./routes/authRoutes");
// authRoutes(app);
// Short method:
require("./routes/authRoutes")(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);
