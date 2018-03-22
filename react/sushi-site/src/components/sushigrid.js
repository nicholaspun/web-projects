import React, { Component } from 'react';
import data from '../data/data';
import SushiTile from './sushitile';
import StackGrid from "react-stack-grid";
import map from 'lodash/map'

export default class SushiGrid extends Component {
  constructor(props) {
    super(props);
    this.gridWidth = 200;
    this.marginWidth = this.props.width;
  }

  renderItems() {
    return map(data, (val, i) => <SushiTile width={this.gridWidth} data={val} key={i}></SushiTile>);
  }

  render() {
    var style = {
      top: '50px',
      marginLeft: this.marginWidth,
    }
    return (
      <StackGrid
        columnWidth={this.gridWidth}
        monitorImagesLoaded={true}
        gutterWidth={5}
        gutterHeight={5}
        style={style}>
        {this.renderItems()}
      </StackGrid>
    )
  }
}
