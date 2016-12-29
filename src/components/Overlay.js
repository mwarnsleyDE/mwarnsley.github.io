import React from 'react';
import {Component} from 'react';

class Overlay extends Component {
	render() {
		const {showOverlay} = this.props;
		return (
			<div className={showOverlay ? 'overlay active-overlay' : 'overlay'}>
				{this.props.children}
			</div>
		);
	}
}

export default Overlay;