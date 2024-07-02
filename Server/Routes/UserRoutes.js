const express = require('express');
const router = express.Router();
const { signUp,login} = require('../Controller/UserController');
const { userAuth } = require('../middleware/userMiddleware');

router.post('/signup', signUp);
router.post('/login',login)

module.exports = router;
