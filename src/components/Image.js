import React from 'react';
import {Component} from 'react';
import Overlay from './Overlay';

class ProfileImage extends Component {
	constructor() {
		super();

		this.viewFullImage = this.viewFullImage.bind(this);
		this.closeModal = this.closeModal.bind(this);

		this.state = {
			displayOverlay: false,
		};
	}
	viewFullImage() {
		this.setState({
			displayOverlay: true,
		});
	}
	closeModal() {
		this.setState({
			displayOverlay: false,
		});
	}
	render() {
		return(
			<div>
				<img onClick={this.viewFullImage} id="profile_image"src={'../../images/prof-pic.jpg'} alt="Marcus Warnsley" />
				<Overlay showOverlay={this.state.displayOverlay}>
					<div className="overlay-panel">
						<div className="inside-panel">
							<i onClick={this.closeModal} className="fa fa-times close-modal" aria-hidden="true"></i>
							<img onClick={this.viewFullImage} id="profile_image"src={'../../images/prof-pic.jpg'} alt="Marcus Warnsley" />
						</div>
					</div>
				</Overlay>
			</div>
		);
	}
}

export default ProfileImage;