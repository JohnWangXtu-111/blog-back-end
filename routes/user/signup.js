const express = require("express");
const router = express.Router();

const upload = require("../../utils/upload.js");
const signupCtrl = require('../../controller/user/index.js').signup;
const signupValidator = require('../../validator/user/index.js').signup;


//注册
router.post(
  "/signup",
  signupValidator,
  upload.single("avatar"),
  signupCtrl
);

module.exports = router;
