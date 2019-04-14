import React from 'react';
import './homepage.css';

export default class Homepage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			open: false,
		};
	}
	render() {
		return (
			<div>
				<center>
					<h1>React Boilerplate</h1>
				</center>
        
			</div>
		);
	}
}
