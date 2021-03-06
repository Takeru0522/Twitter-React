const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const User = require('./User');

// modify UTC time to Tokyo time
const moment = require('moment-timezone');
const dateTokyo = moment.tz(Date.now(), "Asia/Tokyo");
const time = dateTokyo.format('MMMM Do YYYY, h:mm:ss a');


const tweetSchema = mongoose.Schema();
tweetSchema.add({
	main: {
		type: String,
		maxlength: 200, 
	},
	tweetedBy: {
		type: String
	},
	date: {
		type: String,
		default: time
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