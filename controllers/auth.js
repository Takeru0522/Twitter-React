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


// Login
router.post('/login', async (req, res) => {
	try {
		const foundUser = await User.findOne({ email: req.body.email });
		if(foundUser) {
			const passwordMatch = bcrypt.compareSync(req.body.password, foundUser.password);
			if(passwordMatch) {
				console.log(foundUser, 'User logged in.')
				req.session.logged = true;
				req.session.username = foundUser.username;
				res.json({
					status: 200,
					data: foundUser,
					message: "User logged in"
				})
			} else {
				console.log('password error')
				res.json({
					status: 404,
					message: "Password doesn't match."
				})
			}
		} else {
			console.log('User not found')
			res.json({
				status: 404,
				message: "User doesn't exist."
			})
		}
	} catch(err) {
		console.log(err, 'login error')
	}
})


// Logout
router.get('/logout', (req, res) => {
	req.session.destroy((err) => {
		if(err) {
			console.log(err, 'Logout Error')
			res.json({
				message: 'Could not logout'
			})
		} else {
			res.json({
				message: 'Successfully Logged out'
			})
		}
	})
})










module.exports = router;
