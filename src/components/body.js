import React, { Component } from "react";
import ImageGrid from './imagegrid';
import "../styles/body.css";

export default class Body extends Component {
  render() {
    const { photoInit, shouldShowPhotos } = this.props;
    return (
      <div className="wrap">
          {/* Enter Button */}
          {!shouldShowPhotos &&
            <button onClick={photoInit.bind(this)}>
              Enter
            </button>}

          {/* Images */}
          {shouldShowPhotos && <ImageGrid {...this.props}></ImageGrid>}
      </div>
    );
  }
}
