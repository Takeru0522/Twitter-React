import React, { Component } from 'react';

import Login from './Login';
import Signup from './Signup';

class Landing extends Component {
	constructor(){
		super()
		this.state = {
			currentUser: ''
		}
	}
	getUser(){
		const currentUser = localStorage.getItem('currentUser');
		this.setState({
			currentUser: currentUser
		})
	}
	componentDidMount(){
		this.getUser();
		console.log('- componentDidMount -')
	}
	// temporary
	handleLogout = async (e) => {
		try {
			const res = await fetch('/api/auth/logout', {
				method: 'GET'
			})
			const parsed = await res.json()
			console.log(parsed.data)
			localStorage.clear();
			window.location.href = '/';
		} catch(err) {
			console.log(err)
		}
	}
	//
	render() {
		console.log(this.state.currentUser)
		return (
			<div>
				<h1 className="mt-3 w-100 bg-warning">Landing</h1>
				{this.state.currentUser ? <h2>User logged in </h2> : null}
				{this.state.currentUser ? <button type="submit" className="btn btn-dark" onClick={this.handleLogout}>Logout</button> : null}
				<div className="container bg-warning w-100 h-50">
					{ this.state.currentUser ? 
						<h2>{this.state.currentUser}</h2>
						: <div className="row">This is witdh of 100% row</div> }
					<div className="row">
						<div className="col-8 bg-danger">
							<h1>Hello</h1>
							<h1>Hello</h1>
							<h1>Hello</h1>
							<h1>Hello</h1>
						</div>
						<div className="col-4 bg-primary">
							{!this.state.currentUser ? <Login /> : null }
							{!this.state.currentUser ? <Signup /> : null }
							

							<h2>World</h2>
							<h2>World</h2>
							<h2>World</h2>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default Landing;