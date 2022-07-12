const express = require("express");
const router = express.Router();
const loginValidator = require("../validator/login.js");
const loginController = require("../controller/login.js");
router.post("/login", loginValidator, loginController);

module.exports = router;
