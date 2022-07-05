const mongoose = require("mongoose");
const config = require("../config/config.js");

mongoose.connect(config.mongo);

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    default: 0,
  },
  sex: {
    type: String,
    default: "male",
  },
  level: {
    type: Number,
    default: 0,
  },
  avatarUrl: {
    type: String,
    default: "",
  },
});

exports.User = mongoose.model('User', UserSchema);
