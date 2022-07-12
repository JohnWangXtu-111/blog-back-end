const signupController = require('../controller/signup.js');
const express = require("express");
const router = express.Router();
const upload = require("../utils/upload.js");
const signupValidator = require("../validator/signup.js");
//注册
router.post(
  "/signup",
  signupValidator,
  upload.single("avatar"),
  signupController
);

module.exports = router;
