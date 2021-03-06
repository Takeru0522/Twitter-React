import React, { Component } from 'react';
import { Button, Form, Input, FormGroup } from 'reactstrap';

class Login extends Component {
	constructor(){
		super()
		this.state = {
			email: '',
			password: ''
		}
	}
	onChange = (e) => {
		this.setState({
			[e.currentTarget.name]: e.currentTarget.value
		});
	}
	onSubmit = async (e) => {
		e.preventDefault();
		try {
			const res = await fetch('/api/auth/login', {
				method: 'POST',
				body: JSON.stringify(this.state),
				credentials: 'include',
				headers: {
					'Content-Type': 'application/json',
				}
			})
			const parsed = await res.json();
			console.log(parsed.data)
			await localStorage.setItem('currentUser', parsed.data.username)
			window.location.href = '/'
		} catch(err) {
			console.log(err, 'Error in onSubmit in Login')
		}
	}
	render() {

		return (
			<div>
				<h1 className="bg-warning w-100">Auth</h1>
				{this.state.currentUser ? <h3>Logged in</h3> : null}
				<Form className="bg-light p-3" onSubmit={this.onSubmit}>
					
						<h3>Login</h3>
						
						<Input 
							type="email"
							name="email"
							placeholder="Email"
							className="mb-3"
							onChange={this.onChange}
							value={this.state.email}
						/>
						
						<Input 
							type="password"
							name="password"
							placeholder="Password"
							className="mb-3"
							onChange={this.onChange}
							value={this.state.password}
						/>
						<Button color="dark" block className="mt-4">Login</Button>
					
				</Form>
			</div>
		)
	}
}




export default Login;




