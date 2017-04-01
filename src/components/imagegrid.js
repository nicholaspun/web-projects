// React/Redux Components
import React, { Component } from "react";
import { connect } from "react-redux";
import StackGrid from "react-stack-grid";

// Material UI
import CircularProgress from 'material-ui/CircularProgress';

// Components
import Image from "./image";

const mapStateToProps = (state) => {
  return {
    fetching: state.fetching
  }
}

class Grid extends Component {
  constructor(props) {
    super(props);
    this.gridWidth = 250; // TODO: make this responsive?
    this.handleScroll = this.handleScroll.bind(this);
  }

  handleScroll() {
    const windowHeight = "innerHeight" in window ? window.innerHeight : document.documentElement.offsetHeight;
    const body = document.body;
    const html = document.documentElement;
    const docHeight = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight,  html.scrollHeight, html.offsetHeight) - 200; // Footer Height (TODO: pass as prop)
    const windowBottom = windowHeight + window.pageYOffset;
    if (windowBottom >= docHeight && !this.props.fetching) {
      this.props.loadMore()
    }
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  renderItems() {
    const { photos } = this.props;
    return photos.map((data, index) => {
      return (
          <Image key={data.image_url} imageKey={data.image_url}
                 width={this.gridWidth} imgData={data}/>
      )
    })
  }

  render() {
    var style = {
      width: "80%",
      margin: "0 auto",
      paddingTop: "100px"
    }
    var spinner = {
      marginTop: "10px",
      left: "50%",
      transform: "translate(-50%)"
    }
    return (
      <div style={style}>
        <StackGrid
          columnWidth={this.gridWidth}
          monitorImagesLoaded={true}
          gutterWidth={3}
          gutterHeight={3}>
          {this.renderItems()}
        </StackGrid>
        {this.props.fetching &&
          <CircularProgress size={60} thickness={7}
                            color="#FF9800"
                            style={spinner}/>}
      </div>
    );
  }
}

const ImageGrid = connect(mapStateToProps)(Grid);

export default ImageGrid;
