const express = require('express');
var router = express.Router();
var controller = require('./UserController');

// POST /users/register - רישום משתמש חדש
router.post('/register', controller.register);

// POST /users/login - התחברות משתמש
router.post('/login', controller.login);

module.exports = router;
