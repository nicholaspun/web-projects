import React, { Component } from "react";
import img from "../data/GitHub-Mark-Light-64px.png";

export default class Footer extends Component {
  render() {
    var footer = {
      position: "relative",
      marginTop: "-70px",
      height: "130px",
      clear: "both",
      backgroundColor: "transparent"
    }
    var imgStyle = {
      position: "absolute",
      margin: "20px 20px",
      right: 0,
      bottom: 0
    }
    return (
      <div style={footer}>
        <a href="https://github.com/nicholaspun">
          <img src={img} style={imgStyle} />
        </a>
      </div>
    );
  }
}
