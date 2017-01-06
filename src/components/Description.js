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
				<p>Price: $599.99 FREE Shipping (2 days) for Prime members Details</p>
				<p>In Stock</p>
				<p>Want it Friday, Jan. 6? Order within 19hrs and 19 mins and choose Standard Shipping at checkout</p>
				<span><a href="#">Details</a></span>
				<ul>
					<li></li>
				</ul>
				<p>Compare with similar items</p>
				<p><a href="#">Used &amp; new (58) from $599.99 &amp; FREE shipping</a></p>
				<p><a href="#">Report incorrect product information</a></p>
				<p>This item's packaging will indicate what is inside. To cover it, select Ship in Amazon box on the checkout page.</p>
			</div>
		);
	}
}

export default Description;