import React, { Component } from 'react';
import Grid from './grid';
import Header from "./header";
// import Carousel from "./carousel"


export default class App extends Component {
  render() {
    var style = {
      backgroundColor: "black",
    }
    return (
      <div style={style}>
        {/*<Carousel></Carousel>*/}
        <Grid></Grid>
      </div>
    );
  }
}
