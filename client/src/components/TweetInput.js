import React, { Component } from 'react';
import { Form, Input, Button, FormGroup, } from 'reactstrap';

class TweetInput extends Component {
	constructor(){
			super();
			this.state = {
				main: '',
				tweetedBy: ''
			}
	}
	setCurrentUser(){
		const currentUser = localStorage.getItem('currentUser')
		this.setState({
			tweetedBy: currentUser
		})
	}
	componentDidMount(){
		this.setCurrentUser();
	}
	onChange = (e) => {
		this.setState({
			[e.currentTarget.name]: e.currentTarget.value
		});
	}
	onSubmit = async (e) => {
		e.preventDefault();
		try {
			const res = await fetch('/api/tweets/', {
				method: 'POST',
				body: JSON.stringify(this.state),
				headers: {
					'Content-Type': 'application/json'
				},
			})
			const parsed = await res.json();
			console.log(parsed.data)
		} catch(err) {
			console.log(err, 'Error in onSubmit for Posting tweet ')
		}
	}
	render(){
		console.log(this.props.currentUser, 'currentUser from Tweet Input')
		console.log(this.state)
		return(
			<div>
				<Form className="bg-light p-3" onSubmit={this.onSubmit}>
					<Input 
						type="textarea"
						name="main"
						placeholder="What's happening?"
						className="mb-1"
						onChange={this.onChange}
						value={this.state.main}
					/>						
					<Button color="primary" block className="mt-2">Tweet</Button>
				</Form>
			</div>

		)
	}
}


export default TweetInput;