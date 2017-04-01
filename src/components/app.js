// React/Redux Functions
import React, { Component } from 'react';
import { connect } from "react-redux";

// Components
import ImageGrid from './imagegrid';

// Material UI
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppBar from 'material-ui/AppBar';

// Actions
import fetchPhotos from "../actions/fetchphotos";

const URL = "https://api.500px.com/v1/photos?feature=user&username=nicholaspun99&sort=created_at&image_size=3&consumer_key=bNMoz1dmxXDMwwn2aoJxme1sLcUdVhj2ttDXcUyO";
const URL_2 = "https://api.500px.com/v1/photos?feature=user&username=nicholaspun99&sort=created_at&page=2&image_size=3&consumer_key=bNMoz1dmxXDMwwn2aoJxme1sLcUdVhj2ttDXcUyO";


const mapStateToProps = (state) => {
  return {...state}
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPhotos: (url) => dispatch(fetchPhotos(url)),
  }
}

class Main extends Component {
  state = {
    showPhotos: false,
  }

  shouldComponentUpdate(newProps, newState) {
    return this.props.fetching;  // Only rerender if fetching new images
  }

  // API call to fetch more photos (multiple pages)
  fetchPhotos() {
    if (this.props.onPage < this.props.maxPages) {
      this.props.fetchPhotos(URL_2);
    }
  }

  // Activiated when "Enter" button clicked
  photoInit() {
    this.setState({showPhotos: true})
    this.props.fetchPhotos(URL);
  }


  render() {
    const { fetching, photos } = this.props;
    var buttonStyle = {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)"
    }
    var wrap = {
      minHeight: "100vh",
    }
    var main = {
      overflow: "auto",
      paddingBottom: "130px"
    }
    var footer = {
      position: "relative",
      marginTop: "-70px",
      height: "130px",
      clear: "both",
      backgroundColor: "black"
    }
    return (
      <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
        <div>
          {/*<AppBar title="Title" iconClassNameLeft="null" style={{backgroundColor: "transparent", boxShadow: "none", textAlign: "center"}}/>*/}
          <div style={wrap}>
            <div style={main}>
              {/* Enter Button */}
              {!this.state.showPhotos &&
                <button onClick={this.photoInit.bind(this)}
                        style={buttonStyle}>
                        Enter!
                </button>}

              {/* Images */}
              {!fetching && this.state.showPhotos &&
                <ImageGrid photos={photos}
                           loadMore={this.fetchPhotos.bind(this)}>
                </ImageGrid>}
            </div>
          </div>
          {/* Footer */}
          {this.state.showPhotos && <div style={footer}></div>}
        </div>
      </MuiThemeProvider>
    );
  }
}

// Connects state and dispatch as props to our Main component
const App = connect(mapStateToProps, mapDispatchToProps)(Main);

export default App;
