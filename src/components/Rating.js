import React from 'react';
import {Component} from 'react';

class Rating extends Component {
	render() {
		const {ratingContainerClasses, starClasses} = this.props;
		return (
			<div>
				<ul className={ratingContainerClasses}>
					<li className={starClasses}>&#9734;</li>
					<li className={starClasses}>&#9734;</li>
					<li className={starClasses}>&#9734;</li>
					<li className={starClasses}>&#9734;</li>
					<li className={starClasses}>&#9734;</li>
				</ul>
			</div>
		);
	}
}

export default Rating;