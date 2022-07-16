const express = require("express");
const router = express.Router();

const fetchCtrl = require("../../controller/message/index.js").fetch;
const fetchValidator = require("../../validator/message/index.js").fetch;

router.get('/fetch', fetchValidator, fetchCtrl);

module.exports = router;