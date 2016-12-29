import React from 'react';
import {Component} from 'react';

class Label extends Component {
	render () {
		const {classes, labelId, labelFor, labelTitle, labelText} = this.props;
		return (
			<label className={classes} id={labelId} htmlFor={labelFor} title={labelTitle}>{labelText}</label>
		);
	}
}

Label.propTypes = {
	/*
	 *	This is the ID for the label
	 */
	labelId: React.PropTypes.string,
	/*
	 *	This attaches the label to a specific input
	 */
	labelFor: React.PropTypes.string.isRequired,
	/*
	 *	This is the title of the label
	 */
	title: React.PropTypes.string,
	/*
	 *	This is the text that will be displayed by the label
	 */
	labelText: React.PropTypes.string,
	/*
	 *	These are the classes associated with the label
	 */
	classes: React.PropTypes.string,
};

Label.defaultProps = {
	labelId: '',
	labelFor: '',
	title: '',
	labelText: '',
	classes: '',
};

export default Label;