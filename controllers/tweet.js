const express = require('express');
const router = express.Router();
const Tweet = require('../models/Tweet');


// Get all users
router.get('/', async (req, res) => {
	try {
		const allTweets = await Tweet.find();
		res.json({
			status: 200,
			data: allTweets
		})
	} catch(err) {
		console.log(err, 'Error in get / tweet')
	}
})

// post tweet
router.post('/', async (req, res) => {
	try {
		const newTweet = await Tweet.create(req.body);
		res.json({
			status: 200,
			data: newTweet
		})
	} catch(err) {
		console.log(err, 'Error in Post tweet')
	}
})




module.exports = router;