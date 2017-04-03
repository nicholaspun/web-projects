import React, { Component } from "react";
import ImageGrid from './imagegrid';
import "../styles/body.css";

export default class Body extends Component {
  render() {
    const { photoInit, shouldShowPhotos } = this.props;
    var buttonStyle = {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      backgroundColor: "transparent",
      borderTop: "none",
      borderLeft: "3px solid white",
      borderRight: "3px solid white",
      borderBottom: "3px solid white",
      fontSize: "2rem",
      color: "white",
      cursor: "pointer",
    }
    var wrap = {
      minHeight: "100vh",
    }
    var main = {
      overflow: "auto",
      paddingBottom: "130px"
    }
    return (
      <div style={wrap}>
        <div style={main}>
          {/* Enter Button */}
          {!shouldShowPhotos &&
            <button onClick={photoInit.bind(this)} style={buttonStyle}>
              Enter
            </button>}

          {/* Images */}
          {shouldShowPhotos && <ImageGrid {...this.props}></ImageGrid>}
        </div>
      </div>
    );
  }
}
