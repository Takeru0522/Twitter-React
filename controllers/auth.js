const express = require('express');
const router = express.Router();
const User = require('../models/User');
const bcrypt  = require('bcryptjs');

// Sign up
router.post('/signUp', async (req, res) => {
	const hashedPassword = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10));
	try {
		const newUser = {
			username: req.body.username,
			email: req.body.email,
			password: hashedPassword
		}
		const createdUser = await User.create(newUser)
		req.session.logged = true;
		req.session.username = req.body.username;
		res.json({
			status: 200,
			data: createdUser
		})
	} catch(err) {
		console.log(err, 'sign up error')
	}
})



module.exports = router;
