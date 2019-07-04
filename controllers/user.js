const express = require('express');
const router = express.Router();
const User = require('../models/User')


// Get all users
router.get('/', async (req, res) => {
	try {
		const allUsers = await User.find({});
		res.json({
			status: 200,
			data: allUsers
		})
	} catch(err) {
		console.log(err, 'Error in get / user')
	}
})


// Get a user by id
router.get('/:id', async (req, res) => {
	try {
		const foundUser = await User.find({_id: req.params.id})
		console.log(foundUser)
		res.json({
			status: 200,
			data: foundUser,
		})
	} catch(err) {
		console.log(err, 'Error in get / user by id')
	}
})


// Update user
router.put('/:id', async (req, res) => {
	try {
		const updatedUser = await User.findByIdAndUpdate({_id: req.params.id}, req.body, {new: true});
		console.log(updatedUser, 'updatedUser');
		res.json({
			status: 200,
			data: updatedUser,
			message: "Updated user successfully."
		})
	} catch(err) {
		console.log(err, 'Error in put / user')
	}
})


// Delete user
router.delete('/:id', async (req, res) => {
	try {
		const deletedUser = await User.findByIdAndDelete({_id: req.params.id})
		console.log(deletedUser, 'Deleted user')
		res.json({
			status: 200,
			data: deletedUser,
			message: "Deleted User successfully"
		})
	} catch(err) {
		console.log(err, 'Error in delete / user ')
	}
})








module.exports = router;

