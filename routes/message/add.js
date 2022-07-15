const express = require("express");
const router = express.Router();

const addCtrl = require("../../controller/message/index.js").add;
const addValidator = require("../../validator/message/index.js").add;
const auth = require('../../middleware/auth/auth.js');


router.post("/add", auth, addValidator, addCtrl);

module.exports = router;
