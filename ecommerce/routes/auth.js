const router = require('express').Router();
const { request } = require('express');
const User = require('../models/User');

//Register
router.post('/register', (re, res) => {
	const newUser = new User({
		username: req.body.username,
		email: req.body.email,
        password: req.body.password,
	});
});

module.exports = router;
