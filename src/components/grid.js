import React, { Component } from "react";
import StackGrid from "react-stack-grid";
import Image from "./image"

export default class Grid extends Component {
  constructor() {
    super();
    this.gridWidth = 250;
  }

  renderItems(num) {
    return [...Array(num)].map((x, i) => <Image key={i} imageKey={(i % 10) + 1} width={this.gridWidth}/>)
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
