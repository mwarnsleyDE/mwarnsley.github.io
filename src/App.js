import React from 'react';
import {Component} from 'react';
import Description from './components/Description';
import Select from './components/Common/Select';
import ProfileImage from './components/Image';
import Header from './components/Header/Header';
import SubNavigation from './components/SubNavigation';
import Rating from './components/Rating';

class App extends Component {
	render() {
		return(
			<div>
				<img id="banner_image" src={'../../images/banner.jpg'} alt="Banner" />
				<Header/>
				<SubNavigation/>
				<Description/>
				<ProfileImage/>
				<Rating/>
			</div> 
		);
	}
}

export default App;