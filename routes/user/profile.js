const express = require('express');
const router = express.Router();

const auth = require('../../middleware/auth/auth.js');
const profileCtrl = require('../../controller/user/index.js').profile;

router.get('/profile', auth, profileCtrl);

module.exports = router;