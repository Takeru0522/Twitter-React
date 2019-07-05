import React, { Component } from 'react';

const TweetListGuest = (props) => {

	
	const tweetList = props.allTweets.map((tweet) => {
			return(
				<div key={tweet._id}>
					<h2>{tweet.tweetedBy}</h2>
					<p>{tweet.main}</p>
				</div>
			)			
	})
	return(
		<div>
			<h2>TweetListGuest</h2>
			<div>
				{tweetList}
			</div>
		</div>
	)	
}


export default TweetListGuest;
