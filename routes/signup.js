const express = require("express");
const router = express.Router();
const User = require("../model/user.js");
const sha1 = require("node-sha1");
const upload = require("../utils/upload.js");
const validate = require("../utils/validate.js");
const signupValidator = require("../validator/signup.js");
//注册
router.post(
  "/signup",
  validate(signupValidator),
  upload.single("avatar"),
  async (req, res) => {
    let avatarPath = req.file?.path;
    try {
      password = sha1(password);
      let avatarUrl = avatarPath || "../public/upload/avatar/default.png";
      let { username, password, age, sex, email } = req.body;
      let user = {
        username,
        password,
        age,
        sex,
        email,
        avatarUrl,
      };
      let result = await User.create(user);
      result.avatarUrl = avatarUrl;
      res.status(200).send({
        message: "注册成功",
        code: 200,
        result,
      });
    } catch (err) {
      console.log("when create user", err.message);
    }
  }
);

module.exports = router;
