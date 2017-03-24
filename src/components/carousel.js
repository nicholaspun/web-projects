import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import img1 from "../data/photo-2.jpg";
import img2 from "../data/photo-3.jpg";
import img3 from "../data/photo-4.jpg";
import img4 from "../data/photo-5.jpg";
import img5 from "../data/photo-6.jpg";
import "../styles/carousel.scss"

export default class Carousel extends Component {
  constructor() {
    super();
    this.state = {
      images: [img1, img2, img3, img4, img5],
      atImage: 0
    }
    setInterval(this.switchImage.bind(this), 2000);
  }

  switchImage() {
    console.log(this.state.atImage);
    this.setState({ atImage: (this.state.atImage + 1)%(this.state.images.length) });
  }


  renderImages() {
    return (
      <img src={this.state.images[this.state.atImage]}
           alt="alt"
           key={this.state.atImage} />
    );
  }

  render() {
    var styles = {
        position: "absolute",
        top: 0,
        left: IMG_WIDTH * (this.props.idx - this.props.activeIdx),
        zIndex: 100,
        transition: 'left 1s',
        width: '100%'
    };
    return (
      <ReactCSSTransitionGroup
          transitionName="example"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}>
          {this.renderImages()}
      </ReactCSSTransitionGroup>
    );
  }
}
