import React, { Component } from 'react';
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