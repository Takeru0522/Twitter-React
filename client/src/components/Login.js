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
			console.log(parsed)
		} catch(err) {
			console.log(err, 'Error in onSubmit in Login')
		}
	}
	render() {

		return (
			<div>
				<h1 className="bg-warning w-100">Auth</h1>
				
				<Form className="bg-light p-3" onSubmit={this.onSubmit}>
					<FormGroup>
						<h3>Login</h3>
						
						<Input 
							type="email"
							name="email"
							id="email"
							placeholder="Email"
							className="mb-3"
							onChange={this.onChange}
							value={this.state.email}
						/>
						
						<Input 
							type="password"
							name="password"
							id="password"
							placeholder="Password"
							className="mb-3"
							onChange={this.onChange}
							value={this.state.password}
						/>
						<Button color="dark" block className="mt-4">Login</Button>
					</FormGroup>
				</Form>
			</div>
		)
	}
}




export default Login;




