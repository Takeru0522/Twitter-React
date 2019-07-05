import React, { Component } from 'react';
import TweetListGuest from './TweetListGuest';
import { Form, Input, Button, FormGroup, } from 'reactstrap';

class TweetContainer extends Component {
	constructor(props){
		super(props);
		this.state = {
			allTweets: [],
			newTweet: {
				main: '',
				tweetedBy: ''
			},
			currentUser: ''
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
	getUser(){
		const currentUser = localStorage.getItem('currentUser');
		this.setState({
			currentUser: currentUser,
			newTweet: {
				...this.state.newTweet,
				tweetedBy: currentUser
			}
		})
	}
	componentDidMount(){
		this.getAllTweets();
		this.getUser()
	}
	componentWillMount(){
		
	}
	onChange = (e) => {
		this.setState({
			newTweet: {
				...this.state.newTweet,
				main: e.currentTarget.value
			}
		});
	}
	onSubmit = async (e) => {
		e.preventDefault();
		try {
			const res = await fetch('/api/tweets/', {
				method: 'POST',
				body: JSON.stringify(this.state.newTweet),
				headers: {
					'Content-Type': 'application/json'
				},
			})
			const parsed = await res.json();
			console.log(parsed.data)
			this.getAllTweets();
			this.render()
			
		} catch(err) {
			console.log(err, 'Error in onSubmit for Posting tweet ')
		}
	}
	deleteTweet = async (id) => {
		try {
			const res = await fetch('/api/tweets/' + id, {
				method: 'DELETE',
			});
			const parsed = await res.json();
			console.log(parsed.data)
			this.getAllTweets();
			this.render()
		} catch(err) {
			console.log(err, 'Error in deleteTweet')
		}
	}


	render(){
		return(
			<div>
				<h2>Tweet Container</h2>
				<div>
					<Form className="bg-light p-3" onSubmit={this.onSubmit}>
						<Input 
							type="textarea"
							name="main"
							placeholder="What's happening?"
							className="mb-1"
							onChange={this.onChange}
							value={this.state.newTweet.main}
						/>						
						<Button color="primary" block className="mt-2">Tweet</Button>
					</Form>
				</div>

				<TweetListGuest allTweets={this.state.allTweets} deleteTweet={this.deleteTweet}/>
			</div>
		)
	}
}



export default TweetContainer;

