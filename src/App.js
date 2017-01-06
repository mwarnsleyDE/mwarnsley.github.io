import React from 'react';
import {Component} from 'react';
import {Row, Col} from 'react-bootstrap';
import Description from './components/Description';
import Select from './components/Common/Select';
import ProfileImage from './components/Image';
import Header from './components/Header/Header';

class App extends Component {
	render() {
		return(
			<div>
				<img id="banner_image" src={'../../images/banner.jpg'} alt="Banner" />
				<Header/>
				<Row>
					<div className="bottom-sub-nav">
						<ul className="bottom-sub-nav-group">
							<li className="bottom-sub-nav-item"><a href="#">Content</a></li>
							<li className="bottom-sub-nav-item"><a href="#">Content</a></li>
							<li className="bottom-sub-nav-item"><a href="#">Content</a></li>
							<li className="bottom-sub-nav-item"><a href="#">Content</a></li>
							<li className="bottom-sub-nav-item"><a href="#">Content</a></li>
							<li className="bottom-sub-nav-item"><a href="#">Content</a></li>
						</ul>
					</div>
				</Row>
				<img id="bottom_banner_image" src={'../../images/bottom-banner.png'} alt="Bottom Banner" />
				<Row>
					<Col sm={5} md={5}>
						<div className="profile">
							<ProfileImage/>
						</div>
					</Col>
					<Col sm={5} md={5}>
						<div className="description">
							<Description/>
						</div>
					</Col>
					<Col sm={2} md={2}></Col>
				</Row>
			</div> 
		);
	}
}

export default App;