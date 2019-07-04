import React, { Component } from 'react';
import { Button, Form, Input, FormGroup } from 'reactstrap';
import Login from './Login';
import Signup from './Signup';
class Auth extends Component {
	constructor(){
		super()
		this.state = {

		}
	}
	render(){
		return(
			<div>
				<Login />
				<Signup />
			</div>
		)
	}
	
	
}


export default Auth;