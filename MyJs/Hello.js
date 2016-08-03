import React from 'react';
import ReactDOM from 'react-dom';
import 

export default class Hello extends React.Component {
  	getInitialState() {
	    return {
	      	text: '',
	    };
  	}
	render() {
	   	return <h1>Hello!!!</h1><TextInput text={this.state.text} /><InputShow text={this.state.text}/>
	}
}