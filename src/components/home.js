import React, { Component } from 'react';
import backImg1 from "../photos/sushi_background.jpg";
import backImg2 from "../photos/sushi_background_2.jpg";
import backImg3 from "../photos/sushi_background_3.jpg";
import backImg4 from "../photos/sushi_background_4.jpg";
import backImg5 from "../photos/sushi_background_5.jpg";
var Slider = require('react-slick');

export default class Home extends Component {
  render() {
    var style = {
      width: '100vw',
      height: '100vh',
      opacity: 0.7,
      verticalAlign: 'top',
    }
    var settings = {
      dots: false,
      arrows: false,
      autoplay: true,
      autoplaySpeed: 5000,
      pauseOnHover: false,
      infinite: true,
    };
    var containerStyle = {
      position: 'relative',
      width: '100vw',
      display: 'inline-block',
      overflow: 'hidden',
      margin: 0,
      verticalAlign: 'top',
    }
    return (
      <div style={containerStyle}>
        <Slider {...settings}>
          <img src={backImg1} alt="blah" style={style}></img>
          <img src={backImg2} alt="blah" style={style}></img>
          <img src={backImg3} alt="blah" style={style}></img>
          <img src={backImg4} alt="blah" style={style}></img>
          <img src={backImg5} alt="blah" style={style}></img>
        </Slider>
      </div>
    )
  }
}
