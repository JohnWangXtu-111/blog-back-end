const express = require("express");
const router = express.Router();

const loginCtrl = require('../../controller/user/index.js').login;
const loginValidator = require('../../validator/user/index.js').login;

router.post("/login", loginValidator, loginCtrl);

module.exports = router;
