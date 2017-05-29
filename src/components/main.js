// React/Redux Functions
import React, { Component } from 'react';

// Components
import Body from './body';
import Footer from './footer';
import SingleImage from './singleImage'

// Material UI
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
// import AppBar from 'material-ui/AppBar';

const URL = "https://api.500px.com/v1/photos?feature=user&username=nicholaspun99&sort=created_at&image_size=4&consumer_key=bNMoz1dmxXDMwwn2aoJxme1sLcUdVhj2ttDXcUyO";
const URL_2 = "https://api.500px.com/v1/photos?feature=user&username=nicholaspun99&sort=created_at&page=2&image_size=4&consumer_key=bNMoz1dmxXDMwwn2aoJxme1sLcUdVhj2ttDXcUyO";
const URL_3 = "https://api.500px.com/v1/photos?feature=user&username=nicholaspun99&sort=created_at&page=3&image_size=4&consumer_key=bNMoz1dmxXDMwwn2aoJxme1sLcUdVhj2ttDXcUyO";


export default class Main extends Component {
  state = {
    showPhotos: false,
    showSingleImage: false,
    name: "",
    url: "",
    desc: "",
    likes: 0
  }

  renderSingleImage(name, url, desc, likes) {
    this.setState({showSingleImage: true, name: name, url: url, desc: desc, likes: likes})
  }

  renderImageGrid() {
    this.setState({showSingleImage: false, name: "", url: "", desc: "", likes: 0})
  }

  shouldComponentUpdate(newProps, newState) {
    return this.props.fetching || this.state.showSingleImage !== newState.showSingleImage;
  }

  // API call to fetch more photos (multiple pages)
  fetchPhotos() {
    if (this.props.onPage < this.props.maxPages) {
      if (this.props.onPage === 1) this.props.fetchPhotos(URL_2);
      if (this.props.onPage === 2) this.props.fetchPhotos(URL_3);
    }
  }

  // Activiated when "Enter" button clicked
  photoInit() {
    this.setState({showPhotos: true})
    this.props.fetchPhotos(URL);
  }

  renderBody() {
    if (this.state.showSingleImage) {
      return (
        <SingleImage name={this.state.name}
                     image_url={this.state.url}
                     description={this.state.desc}
                     likes={this.state.likes}
                     renderImageGrid={this.renderImageGrid.bind(this)}>
        </SingleImage>
      )
    }
    return (
      <Body {...this.props}
            shouldShowPhotos={this.state.showPhotos}
            photoInit={this.photoInit.bind(this)}
            loadMore={this.fetchPhotos.bind(this)}
            renderSingleImage={this.renderSingleImage.bind(this)}>
      </Body>
    )
  }


  render() {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
        <div>
          {/*<AppBar title="Title" iconClassNameLeft="null" style={{backgroundColor: "transparent", boxShadow: "none", textAlign: "center"}}/>*/}
          {this.renderBody()}
          <Footer></Footer>
        </div>
      </MuiThemeProvider>
    );
  }
}
