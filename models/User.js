const mongoose = require("mongoose");
const { Schema } = mongoose;
// const Schema = mongoose.Schema; Same thing.

const userSchema = new Schema({
  googleId: String
});

mongoose.model("users", userSchema);
