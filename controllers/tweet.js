const express = require('express');
const router = express.Router();
const Tweet = require('../models/Tweet');


// Get all tweets
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


// Post tweet
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

// Get single tweet by id
router.get('/:id', async (req, res) => {
	try {
		const foundTweet = await Tweet.find({_id: req.params.id})
		console.log(foundTweet)
		res.json({
			status: 200,
			data: foundTweet,
		})
	} catch(err) {
		console.log(err, 'Error in get single tweet by id')
	}
})


// Update tweet
router.put('/:id', async (req, res) => {
	try {
		const updatedTweet = await Tweet.findByIdAndUpdate({_id: req.params.id}, req.body, {new: true});
		console.log(updatedTweet, 'Updated successfully.');
		res.json({
			status: 200,
			data: updatedTweet,
			message: "Updated successfully"
		});
	} catch(err) {
		console.log(err, 'Error in update / tweet')
	}
})

// Delete tweet
router.delete('/:id', async (req, res) => {
	try {
		const deletedTweet = await Tweet.findByIdAndDelete(req.params.id)
		// const deletedUser deletedTweet.tweetedBy
		if(deletedTweet) {
			console.log(deletedTweet, 'deleted this tweet')
			res.json({
				message: "Deleted the tweet.",
				data: deletedTweet
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