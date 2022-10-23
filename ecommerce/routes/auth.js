const router = require('express').Router();
const { request } = require('express');
const User = require('../models/User');
const CryptoJS = require('crypto-js');

//Register
router.post('/register', async (req, res) => {
	const newUser = new User({
		username: req.body.username,
		email: req.body.email,
		password: CryptoJS.AES.encrypt(
			req.body.password,
			process.env.PASS_SEC
		).toString(),
	});

	try {
		const savedUser = await newUser.save();
		res.status(201).json(savedUser);
	} catch (err) {
		res.status(500).json(err);
	}
});

//Login
router.post("/login", async (req, res) => {
	// console.log('user working');
	try {
		const user = await User.findOne({ username: req.body.username });
		!user && res.status(401).json('Wrong Credentials');
		const hashedPassword = CryptoJS.AES.decrypt(
			user.password,
			process.env.PASS_SEC
		);
		const Password = hashedPassword.toString(CryptoJS.enc.Utf8);
		Password !== req.body.password &&
			res.status(401).json('Wrong Credentials');
		// const { password, ...others } = user;

		res.status(200).json(err);
	} catch (err) {
		res.status(500).json(err);
		console.log("server error")
	}
});

module.exports = router;
