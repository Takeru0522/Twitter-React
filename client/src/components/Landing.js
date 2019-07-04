import React, { Component } from 'react';
import Auth from './Auth';

class Landing extends Component {
	render() {
		return (
			<div>
				<h1 className="mt-3 w-100 bg-warning">Landing</h1>
				<div className="container bg-warning w-100 h-50">
					<div className="row">a<p className="text-center">This is witdh of 100% row</p></div>
					<div className="row">
						<div className="col-8 bg-danger">
							<h1>Hello</h1>
							<h1>Hello</h1>
							<h1>Hello</h1>
							<h1>Hello</h1>
						</div>
						<div className="col-4 bg-primary">
							<Auth />
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