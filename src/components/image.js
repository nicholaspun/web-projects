import React, { Component } from "react";
import '../styles/image.css'

export default class Image extends Component {
  render() {
    const { name, image_url } = this.props.imgData;
    var style = {
      width: this.props.width
    };
    return (
      <div className="container">
        <div style={{backgroundColor: "black"}}>
          <img src={image_url} style={style} alt={name}
                className="image"/>
          <div className="middle">
            <div className="text">{name}</div>
          </div>
        </div>
      </div>
    );
  }
}
