import React, { Component } from "react";
import StackGrid from "react-stack-grid";
import Image from "./image"

export default class ImageGrid extends Component {
  constructor() {
    super();
    this.gridWidth = 250;
  }

  renderItems(num) {
    const { photos } = this.props;
    return photos.map((data, index) => {
      return (
        <Image key={index} width={this.gridWidth} imgData={data}/>
      )
    })
  }

  render() {
    var style = {
      width: "80%",
      margin: "0 auto",
      paddingTop: "300px"
    }
    return (
      <div style={style}>
        <StackGrid
          columnWidth={this.gridWidth}
          monitorImagesLoaded={true}
          gutterWidth={3}
          gutterHeight={3}>
          {this.renderItems(100)}
        </StackGrid>
      </div>
    );
  }
}
