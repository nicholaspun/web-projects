import React, { Component } from 'react';
import img1 from "../data/photo-2.jpg";
import img2 from "../data/photo-3.jpg";
import img3 from "../data/photo-7.jpg";
import img4 from "../data/photo-5.jpg";
import img5 from "../data/photo-6.jpg";
import '../styles/carousel.css'
var Slider = require('react-slick');

export default class Carousel extends Component {
  constructor() {
    super();
    this.images = [img1, img2, img3, img4, img5];
  }

  render() {
    var settings = {
      dots: false,
      arrows: false,
      autoplay: true,
      autoplaySpeed: 1000,
      infinite: true,
    };

    return (
      <div className="container">
        <Slider {...settings}>
          <img src={this.images[0]} alt="blah"></img>
          <img src={this.images[1]} alt="blah"></img>
          <img src={this.images[2]} alt="blah"></img>
          <img src={this.images[3]} alt="blah"></img>
          <img src={this.images[4]} alt="blah"></img>
        </Slider>
      </div>
    )
  }
}
