const express = require('express');
const router = express.Router;

const auth = require('../../middleware/auth/auth.js');
const like = require('../../validator/message/index.js').like;


router.post('/like', auth, like);

module.exports = router;