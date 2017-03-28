import React, { Component } from 'react';
import { connect } from "react-redux";
// import ImageGrid from './imagegrid';
// import Header from "./header";
// import Carousel from "./carousel"
// import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
// import getMuiTheme from 'material-ui/styles/getMuiTheme';
import fetchPhotos from "../actions/fetchphotos"

const mapStateToProps = (state) => {
  return {
    fetching: state.fetching,
    fetched: state.fetched,
    photos: state.photos,
    error: state.error,
  }
}

// const mapDispatchToProps = (dispatch) => {
//   return {
//     fetchImages: () => dispatch(fetchPhotos())
//   };
// };

class Main extends Component {
 componentDidMount() {
   console.log(this.props);
   this.props.dispatch(fetchPhotos())
 }

  render() {
    const { fetching, fetched } = this.props
    // var style = {
    //   backgroundColor: "white",
    // }
    if (fetching) {
      return (
        <p>Fetching ... </p>
      )
    }
    else if (fetched) {
      return (
        <p>Fetched!</p>
      )
    }
    else {
      return (
        <p>We fucked up</p>
      )
    }
    // return (
    //   <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
    //     <div style={style}>
    //       {/*<Carousel></Carousel>*/}
    //       <ImageGrid photos={this.props.photos}></ImageGrid>
    //     </div>
    //   </MuiThemeProvider>
    // );
  }
}

// Connects state and dispatch as props to our Main component
const App = connect(mapStateToProps)(Main);

export default App;
