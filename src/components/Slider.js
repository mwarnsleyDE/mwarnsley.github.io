import React from 'react';
import {Component} from 'react';

class Slider extends Component {
	render () {
		const {classes, description} = this.props;
		return (
			<div className={classes}>
				<h3>{description}</h3>
			</div>
		);
	}
}

export default Slider;