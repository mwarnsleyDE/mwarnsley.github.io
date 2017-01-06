import React from 'react';
import {Component} from 'react';

class Rating extends Component {
	constructor(props) {
		super(props);

		const stars = this.props.stars;

		this.state = {
			value: stars,
			dynamicValue: stars,
		};
	}
	starClick(newValue) {
		this.setState({
      		value: newValue,
      		dynamicValue: newValue
    	});

    	if (this.props.onRated) {
    		this.props.onRated(newValue);
    	}	
	}
	handleMouseEnter(newValue) {
    	this.setState({ 
    		dynamicValue: newValue 
    	});
  	}
  	handleMouseLeave(newValue) {
    	this.setState({ 
    		dynamicValue: this.state.value 
    	});
  	}
	render() {
		const starSpans = [];

		for (let v = 1; v <= 5; v++) {
		  if (v <= this.state.dynamicValue) {
		    starSpans.push(
		      <span
		          key={v}
		          className="star"
		          onMouseEnter={this.handleMouseEnter.bind(this, v)}
		          onMouseLeave={this.handleMouseLeave.bind(this, v)}
		          onClick={this.starClick.bind(this, v)}
		          >
		        ★
		      </span>
		    );
		  } else {
		    starSpans.push(
		      <span
		          key={v}
		          className="star"
		          onMouseEnter={this.handleMouseEnter.bind(this, v)}
		          onMouseLeave={this.handleMouseLeave.bind(this, v)}
		          onClick={this.starClick.bind(this, v)}
		          >
		        ☆
		      </span>
		    );
		  }
		}
		return (
			<div>
				{starSpans}
			</div>
		);
	}
}

export default Rating;