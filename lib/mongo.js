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
  email: {
    type: String,
    required: true,
  },
  createdAt: {
    type: String,
    default: Date,
  },
  updateAt: {
    type: String,
    default: Date,
  },
  age: {
    type: Number,
    default: 0,
  },
  sex: {
    type: String,
    default: "robot",
  },
  level: {
    type: Number,
    default: 0,
  },
  avatarUrl: {
    type: String,
    default: "",
  },
  followers: {
    type: Number,
    default: 0
  },
});

exports.User = mongoose.model("User", UserSchema);