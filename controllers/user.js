const express = require('express');
const router = express.Router();
const User = require('../models/User')

// Get all users
router.get('/', (req, res) => {
	console.log('Hello')
})

module.exports = router;