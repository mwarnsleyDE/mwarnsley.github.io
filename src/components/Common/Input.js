import React from 'react';
import {Component} from 'react';

class Input extends Component {
	render () {
		const {classes, type, name, value, placeholder, inputId} = this.props;
		return (
			<input className={classes} id={inputId} type={type} name={name} defaultValue={value} placeholder={placeholder} />
		);
	}
}

Input.propTypes = {
	/*
	 *	This is the type of input to be displayed such as text, radio, checkbox, email, date, button, etc
	 */
	type: React.PropTypes.string.isRequired,
	/*
	 *	This is the name of the input
	 */
	name: React.PropTypes.string,
	/*
	 *	This is the default value of the input for type text
	 */
	value: React.PropTypes.string,
	/*
	 *	This is placeholder of the input for type text
	 */
	placeholder: React.PropTypes.string,
	/*
	 *	These are the classes associated with the input
	 */
	classes: React.PropTypes.string,
	/*
	 *	The id associated with the input
	 */
	inputId: React.PropTypes.string,
};

Input.defaultProps = {
	type: 'text',
	name: '',
	value: '',
	placeholder: '',
	classes: '',
	inputId: '',
};

export default Input;