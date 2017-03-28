import React, { Component } from 'react';
import { connect } from "react-redux";
import ImageGrid from './imagegrid';
// import Header from "./header";
// import Carousel from "./carousel"
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import fetchPhotos from "../actions/fetchphotos"

const URL = "https://api.500px.com/v1/photos?feature=user&username=nicholaspun99&sort=created_at&image_size=3&consumer_key=bNMoz1dmxXDMwwn2aoJxme1sLcUdVhj2ttDXcUyO"

const mapStateToProps = (state) => {
  return {
    fetching: state.fetching,
    fetched: state.fetched,
    photos: state.photos,
    error: state.error,
  }
}

class Main extends Component {
 componentDidMount() {
   this.props.dispatch(fetchPhotos(URL))
 }

  render() {
    const { fetching, photos } = this.props
    var style = {
      backgroundColor: "black",
    }
    if (fetching) {
      return (
        <p>Fetching ... </p>
      )
    }
    return (
      <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
        <div style={style}>
          {/*<Carousel></Carousel>*/}
          <ImageGrid photos={photos}></ImageGrid>
        </div>
      </MuiThemeProvider>
    );
  }
}

// Connects state and dispatch as props to our Main component
const App = connect(mapStateToProps)(Main);

export default App;
