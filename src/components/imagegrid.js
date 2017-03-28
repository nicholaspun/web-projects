import React, { Component } from "react";
import StackGrid from "react-stack-grid";
import data from "../data/mockdata";
import Image from "./image"

export default class ImageGrid extends Component {
  constructor() {
    super();
    this.gridWidth = 250;
  }

  renderItems(num) {
    console.log(this.props);
    return this.props.photos.map((data, index) => {
      return (
        <Image key={index} width={this.gridWidth} imgData={data}/>
      )
    })
  }

  render() {
    return (
      <StackGrid
        columnWidth={this.gridWidth}
        monitorImagesLoaded={true}
        gutterWidth={3}
        gutterHeight={1}>
        {this.renderItems(100)}
      </StackGrid>
    );
  }
}
