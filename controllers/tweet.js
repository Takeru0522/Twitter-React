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

router.delete('/:id', async (req, res) => {
	try {
		const foundTweet = await Tweet.findByIdAndDelete(req.params.id)
		// const foundUser foundTweet.tweetedBy
		if(foundTweet) {
			console.log(foundTweet, 'deleted this tweet')
			res.json({
				message: "Deleted the tweet."
			})
		} else {
			console.log('You got some issue in delete tweet route')
			res.json({
				message: "Could not delete the tweet"
			})
		}
	} catch(err) {
		console.log(err, 'Error in delete / tweet')
	}
})








module.exports = router;