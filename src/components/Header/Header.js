import React from 'react';
import {Component} from 'react';
import {Row, Col} from 'react-bootstrap';

import Input from '../Common/Input';
import Select from '../Common/Select';

import DropDown from '../../resources/DropDown';

class Header extends Component {
	render() {
		const options = DropDown.dropOptions;
		return(
			<div id="search_header">
				<Row>
					<Col sm={2} md={2}>

					</Col>
					<Col sm={8} md={8}>
						<div className="search-box">
							<Select classes="search-drop" selectOptions={options} optionClasses="search-drop-options"/>
							<Input value="Marcus Warnsley" classes="form-control main-search"/>
							<i className="fa fa-search search-icon" aria-hidden="true"></i>
						</div>
					</Col>
					<Col sm={2} md={2}>

					</Col>
				</Row>
				<Row>
					<Col sm={1} md={1}>
						<div className="sub-department-drop">
							<span>Departments</span>
							<div className="sub-department-drop-panel">
								<ul className="sub-dep-drop-group">
									<li className="sub-dep-options"><a href="#">Content</a></li>
									<li className="sub-dep-options"><a href="#">Content</a></li>
									<li className="sub-dep-options"><a href="#">Content</a></li>
									<li className="sub-dep-options"><a href="#">Content</a></li>
								</ul>
							</div>
						</div>
					</Col>
					<Col sm={8} md={8}>
						<ul className="sub-nav-group">
							<li className="sub-nav-options"><a href="#">Browsing History</a></li>
							<li className="sub-nav-options"><a href="http://mwarnsley.github.io/">Marcus' github.io</a></li>
							<li className="sub-nav-options"><a href="#">Today's Deals</a></li>
							<li className="sub-nav-options"><a href="#">Gift Cards &amp; Registry</a></li>
							<li className="sub-nav-options"><a href="#">Sell</a></li>
							<li className="sub-nav-options"><a href="#">Help</a></li>
						</ul>
					</Col>
					<Col sm={3} md={3}>
						<ul className="sub-nav-group">
							<li className="sub-nav-options"><a href="#">Browsing History</a></li>
							<li className="sub-nav-options"><a href="http://mwarnsley.github.io/">Marcus' github.io</a></li>
							<li className="sub-nav-options"><a href="#">Today's Deals</a></li>
							<li className="sub-nav-options"><a href="#">Gift Cards &amp; Registry</a></li>
							<li className="sub-nav-options"><a href="#">Sell</a></li>
							<li className="sub-nav-options"><a href="#">Help</a></li>
						</ul>
					</Col>
				</Row>
			</div>
		);
	}
}

export default Header;