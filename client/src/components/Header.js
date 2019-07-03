import React, { Component } from 'react';
// import '../App.css';

class Header extends Component {
	render(){
		return (
			<div>
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<h3>Twitter React</h3>
				</header>
			</div>
		)
	}
}