const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Tweet = require('./Tweet');
// modify UTC time to Tokyo time
const moment = require('moment-timezone');
const dateTokyo = moment.tz(Date.now(), "Asia/Tokyo");
const time = dateTokyo.format('MMMM Do YYYY, h:mm:ss a');


const userSchema = new mongoose.Schema({
	username: {
		type: String,
		required: true
	},
	email: {
		type: String,
		required: true,
		unique: true
	},
	password: {
		type: String,
		required: true
	},
	date: {
		type: String,
		default: time
	},
	selfIntroduction: {
		type: String,
	},
	imgUrl: {
		type: String,
		default: 'https://react.semantic-ui.com/images/wireframe/image.png'
	},
	tweetList: [{
		type: Schema.Types.ObjectId, ref: 'Tweet'
	}],
	likedTweet: [{
		type: Schema.Types.ObjectId, ref: 'Tweet'
	}],
	follow : [{
		type: Schema.Types.ObjectId, ref: 'User'
	}],
	follower : [{
		type: Schema.Types.ObjectId, ref: 'User'
	}],
});



module.exports = User = mongoose.model('User', userSchema);



