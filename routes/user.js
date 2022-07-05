const express = require("express");
const router = express.Router();
//User model
const User = require("../model/user.js");
const fs = require('fs');
const sha1 = require("node-sha1");
const upload = require("../utils/upload.js");


router.post("/signup", upload.single("avatar"), async (req, res) => {
  const { username, password, age = 0, sex = "male", level = 0 } = req.body;
  const path = req.file.path;
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
    fs.unlink(path, err => {
      if(err) return;
      console.log('登录失败头像已删除');
    });
    res.status(304).send({
      message: err.message,
    });
  }



  password = sha1(password);
  const user = { username, password, age, sex, level };
  try {
    const result = await User.create(user);
    console.log('result', result);
    res.status(200).send({
      message: "success",
    });
  } catch (err) {
    console.log("when create user", err.message);
  }
});

module.exports = router;
