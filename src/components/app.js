import React, { Component } from 'react';
import Grid from './grid';
import Header from "./header";
// import Carousel from "./carousel"
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';


export default class App extends Component {
  render() {
    var style = {
      backgroundColor: "black",
    }
    return (
      <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
        <div style={style}>
          {/*<Carousel></Carousel>*/}
          <Grid></Grid>
        </div>
      </MuiThemeProvider>
    );
  }
}
