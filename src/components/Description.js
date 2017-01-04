import React from 'react';
import {Component} from 'react';
import Rating from './Rating';

class Description extends Component {
	render() {
		return(
			<div>
				<h1>Marcus Warnsley - Front End Software Developer</h1>
				<p>by Marcus Warnsley</p>
				<Rating stars={5}/>
			</div>
		);
	}
}

export default Description;