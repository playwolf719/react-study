import React from 'react';
import ReactDOM from 'react-dom';
import TextInput from './TextInput.js';
import InputShow from './InputShow.js';

export default class ProsAndState extends React.Component {
  	constructor(props) {
	    super(props);
	    this.state = {text: ""};
	    this.hehe = this.hehe.bind(this);
  	}
  	hehe(filterText) {
        this.setState({text: filterText});
  	}
	render() {
	   	return <div><TextInput text={this.state.text} handleUserInput={this.hehe} /><InputShow text={this.state.text}/></div>
	}
}