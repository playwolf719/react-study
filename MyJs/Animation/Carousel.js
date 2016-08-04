import React from 'react';
import ImageCarousel from './ImageCarousel.js';


var Carousel = React.createClass({
  getInitialState: function() {
    return {items:'http://localhost/my/react-study/img/fun.png'};
  },
  hehe:function(imageSrc) {
      this.setState({items: imageSrc});
  },
  render: function() {
    return (
      <div>
        <ImageCarousel  {...this.props} imageSrc={this.state.items} passHehe={this.hehe}    />
      </div>
    );
  }
});
export default Carousel;