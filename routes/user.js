const express = require('express');

const router = express.Router();

const userControler = require('../controllers/user');

router.get('/signup',userControler.signup);
router.post('/create-user',userControler.createUser);

module.exports = router;