const express = require('express');
const router = express.Router();

const auth = require('../../middleware/auth/auth.js');
const updateValidator = require('../../validator/message/index.js').update;
const updateCtrl = require('../../controller/message/index.js').update;

router.post('/update', auth, updateValidator, updateCtrl);


module.exports = router;