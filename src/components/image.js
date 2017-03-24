import React, { Component } from "react";
import img from '../data/photo-1.jpg';
import '../styles/image.css'

export default class Grid extends Component {
  showNavBox() {
    console.log("click");
  }

  render() {
    var style = {
      width: this.props.width
    }
    return (
      <div className="container">
        <img src={img}
             style={style}
             alt="img"
             className="image"
             onClick={this.showNavBox}>
        </img>
        <div className="middle">
          <div className="text">A Prickly Plant</div>
        </div>
      </div>
    );
  }
}
