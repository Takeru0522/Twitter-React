import React, { Component } from 'react';
import TweetListGuest from './TweetListGuest';

class TweetContainer extends Component {
	constructor(){
		super();
		this.state = {
			allTweets: []
		}
	}
	getAllTweets = async (e) => {
		try {
			const res = await fetch('/api/tweets/', {
				method: 'GET',
			});
			const parsed = await res.json();
			this.setState({
				allTweets: parsed.data
			})
		} catch(err) {
			console.log(err, 'Error in getAllTweets')
		}
	}
	componentDidMount(){
		this.getAllTweets();
	}


	render(){
		console.log(this.state)
		return(
			<div>
				<h2>Tweet Container</h2>
				<TweetListGuest allTweets={this.state.allTweets}/>
			</div>
		)
	}
}



export default TweetContainer;

