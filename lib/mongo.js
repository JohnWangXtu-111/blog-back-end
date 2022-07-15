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
  created_at: {
    type: Number,
    default: Date.now,
  },
  update_at: {
    type: Number,
    default: Date.now,
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
    default: 0,
  },
});

exports.User = mongoose.model("User", UserSchema);

const MessageSchema = mongoose.Schema({
  author: {
    type: String,
    required: true,
  },
  like_count: {
    type: Number,
    default: 0,
  },
  collection_count: {
    type: Number,
    default: 0,
  },
  comments: [{ type: mongoose.ObjectId, ref: "Comment" }],
  created_at: {
    type: Number,
    default: Date.now,
  },
  update_at: {
    type: Number,
    default: Date.now,
  },
  content: {
    type: String,
    required: true
  }
});

module.exports.Message = mongoose.model("Message", MessageSchema);

const CommentSchema = mongoose.Schema({});
module.exports.Comment = mongoose.model("Comment", CommentSchema);
