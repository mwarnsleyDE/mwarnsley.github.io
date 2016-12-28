import React from 'react';
import {Component} from 'react';

class Input extends Component {
	render () {
		const {classes, type, name, value, placeholder} = this.props;
		return (
			<input className={classes} type={type} name={name} defaultValue={value} placeholder={placeholder} />
		);
	}
}

Input.propTypes = {
	type: React.PropTypes.string.isRequired,
	name: React.PropTypes.string,
	value: React.PropTypes.string,
	placeholder: React.PropTypes.string,
	classes: React.PropTypes.string,
};

Input.defaultProps = {
	type: 'text',
	name: '',
	value: '',
	placeholder: '',
	classes: '',
};

export default Input;