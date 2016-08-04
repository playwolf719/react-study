import React from 'react';
import ReactDOM from 'react-dom';

export default class TextInput extends React.Component {
  	constructor(props) {
	    super(props);
	    this.handleChange = this.handleChange.bind(this);
  	}
  	handleChange(e) {
		this.props.handleUserInput(e.target.value);
  	}
	render() {
	   	return <input type="text" value={this.props.text} onChange={this.handleChange}/>
	}
}