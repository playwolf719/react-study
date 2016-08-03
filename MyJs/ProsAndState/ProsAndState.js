import React from 'react';
import ReactDOM from 'react-dom';
import TextInput from './TextInput.js';
import InputShow from './InputShow.js';

export default class ProsAndState extends React.Component {
  	constructor(props) {
	    super(props);
	    this.state = {text: ""};
	    this.handleUserInput = this.handleUserInput.bind(this);
  	}
  	handleUserInput(filterText) {
        this.setState({text: filterText});
  	}
	render() {
	   	return <div><TextInput text={this.state.text} handleUserInput={this.handleUserInput} /><InputShow text={this.state.text}/></div>
	}
}