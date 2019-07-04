const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const User = require('./User');

const tweetSchema = mongoose.Schema();
tweetSchema.add({
	main: {
		type: String,
		maxlength: 200, 
	},
	tweetedBy: {
		type: String
	},
	data: {
		type: Date,
		default: Date.now
	},
	reply: [{
		type: Schema.Types.ObjectId, ref: 'Tweet',
	}],
	// or
	// reply: [tweetSchema],
	whoLiked: [{
		type: Schema.Types.ObjectId, ref: 'User',
	}]
	// or
	// whoLiked: [User.schema]
});

const Tweet = mongoose.model('Tweet', tweetSchema);
module.exports = Tweet;