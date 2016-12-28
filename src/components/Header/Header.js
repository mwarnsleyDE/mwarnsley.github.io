import React from 'react';
import {Component} from 'react';

import Input from './Input';

class Header extends Component {
	render() {
		return(
			<div id="search_header">
				<Input value="Marcus Warnsley"/>
				<i className="fa fa-search" aria-hidden="true"></i>
			</div>
		);
	}
}

export default Header;