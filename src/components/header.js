import React, { Component } from 'react';
import Carousel from "./carousel"

export default class Grid extends Component {
  render() {
    var style = {
      margin: 0,
      display: 'inline',
      alignItems: 'center',
      overflow: 'hidden'
    }
    return (
      <div style={style}>
        <Carousel></Carousel>
      </div>
    );
  }
}
