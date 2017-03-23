import React, { Component } from "react";
import StackGrid from "react-stack-grid";
import Image from "./image"

export default class Grid extends Component {
  constructor() {
    super();
    this.gridWidth = 250;
  }

  renderItems(num) {
    return [...Array(num)].map((x, i) => <Image key={i} imageKey={i} width={this.gridWidth}/>)
  }

  render() {
    return (
      <StackGrid
        columnWidth={this.gridWidth}
        monitorImagesLoaded={true}
        gutterWidth={3}
        gutterHeight={3}>
        {this.renderItems(20)}
      </StackGrid>
    );
  }
}
