import React from 'react';
import {Component} from 'react';

class Select extends Component {
	render () {
		const {selectOptions, name, id, classes, optionClasses} = this.props;
		const options = selectOptions.map((option, index) => {
			return (
				<option className={optionClasses} key={index} value={option.value}>{option.text}</option>
			);
		});
		return (
			<select name={name} id={id} className={classes}>
				{options}
			</select>
		);
	}
}

Select.propTypes = {
	/*
	 * These are the options provided to the select which must be in a form of an Array of Objects with keys of value and text
	 */
	selectOptions: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
	/*
	 * The name supplied to the select
	 */
	name: React.PropTypes.string,
	/*
	 * The ID supplied to the select
	 */
	id: React.PropTypes.string,
	/*
	 * The classes supplied to the select
	 */
	class: React.PropTypes.string,
	/*
	 * The classes supplied to the options dropdown
	 */
	optionClasses: React.PropTypes.string,
};

Select.defaultProps = {

};

export default Select;