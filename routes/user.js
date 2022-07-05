const express = require("express");
const router = express.Router();
//User model
const User = require("../model/user.js");

const sha1 = require("node-sha1");
const multer = require("multer");
const createFolder = require("../utils/create-folder.js");
const uploadFolder = "./public/upload/avatar";
const uuid = require("node-uuid");
const fs = require('fs');
createFolder(uploadFolder);
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, uploadFolder);
  },
  filename: function (req, file, cb) {
    cb(null, uuid.v4() + file.originalname);
  },
});

const upload = multer({ storage: storage });

router.post("/signup", upload.single("avatar"), (req, res) => {
  const { username, password, age = 0, sex = "male", level = 0 } = req.body;
  try {
    if (!(username.length <= 6 && username.length >= 1)) {
      throw new Error("username length is between 0 and 6");
    }
    if (!(password.length <= 6 && password.length >= 1)) {
      throw new Error("password length is between 0 and 6");
    }
    if (["male", "female"].indexOf(sex) === -1) {
      throw new Error("sex must be male or female");
    }
  } catch (err) {
    res.status(304).send({
      message: err.message,
    });

  }
  password = sha1(password);
  User.create({ username, password, age, sex, level });
  res.status(200).send({
    message: "success",
  });
});

module.exports = router;
