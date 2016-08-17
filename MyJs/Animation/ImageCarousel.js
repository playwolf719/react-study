import React from 'react';
import $ from "jquery";

// var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;
var ReactCSSTransitionGroup = require('react-addons-css-transition-group');

var ImageCarousel = React.createClass({
  propTypes: {
    imageSrc: React.PropTypes.string.isRequired
  },
  handleClick:function(){
    if($(this.refs.theImg).attr('src').indexOf("big1")>-1){
      this.props.passHehe("http://localhost/my/react-study/img/fun.png");
    }else{
      this.props.passHehe("http://localhost/my/react-study/img/big1.jpg");
    }
  },
  render: function() {
    return (
      <div>
        <ReactCSSTransitionGroup transitionName="carousel" transitionLeave={false}>
          <img ref="theImg" src={this.props.imageSrc} key={this.props.imageSrc} onClick={this.handleClick}/>
        </ReactCSSTransitionGroup>
      </div>
    );
  }
});
export default ImageCarousel;