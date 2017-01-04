import React from 'react';
import {Component} from 'react';
import {Link} from 'react-router';

class SubNavigation extends Component {
	render() {
		return (
			<div>
				<nav>
					<ul>
						<li className="nav-link-holder">
							<Link to="www.google.com">Deals</Link>
						</li>
					</ul>
				</nav>
			</div>
		);
	}
}

export default SubNavigation;