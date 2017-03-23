import React, { Component } from 'react';
import Grid from './grid';
import Header from "./header"


export default class App extends Component {
  render() {
    var style = {
      backgroundColor: "black",
    }
    return (
      <div style={style}>
        <Header></Header>
        <Grid></Grid>
      </div>
    );
  }
}
