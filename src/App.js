import React from 'react';
import {Component} from 'react';
import Description from './components/Description';
import Select from './components/Common/Select';
import ProfileImage from './components/Image';
import Header from './components/Header/Header';

const opt = [
	{value: 'volvo', text: 'Volvo'},
	{value: 'mercedes', text: 'Mercedes'},
];

class App extends Component {
	render() {
		return(
			<div>
				<Header/>
				<Description/>
				<Select selectOptions={opt}/>
				<ProfileImage/>
			</div> 
		);
	}
}

export default App;