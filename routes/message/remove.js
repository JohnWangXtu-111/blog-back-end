const express = require("express");
const router = express.Router();

const removeCtrl = require("../../controller/message/index.js").remove;
const removeValidator = require("../../validator/message/index.js").remove;
const auth = require('../../middleware/auth/auth.js');


router.post("/remove", auth, removeValidator, removeCtrl);

module.exports = router;