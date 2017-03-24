import React, { Component } from "react";
import data from '../data/data.js'
import '../styles/image.css'
import Dialog from 'material-ui/Dialog';

export default class Grid extends Component {
  state = {
    open: false,
  };

  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
  };

  renderDialog(str) {
    var dialogImageStyle = {
      padding: '3px',
      height: 300,
    }
    return (
      <Dialog modal={false}
              open={this.state.open}
              onRequestClose={this.handleClose}>
        <div style={{display: 'flex'}}>
          <img src={data[str].src} style={dialogImageStyle}></img>
          <div style={{padding: '10px'}}>
            {data[str].desc}
          </div>
        </div>
      </Dialog>
    );
  }

  renderImage(str) {
    var style = {
      width: this.props.width
    };
    return (
      <div>
        <img src={data[str].src}
             style={style}
             alt="img"
             className="image"
             onClick={this.handleOpen.bind(this)}>
        </img>
        <div className="middle">
          <div className="text">{data[str].title}</div>
        </div>
      </div>
    );
  }

  render() {
    var srcString = 'img' + this.props.imageKey;
    return (
      <div className="container">
        {this.renderImage(srcString)}
        {this.renderDialog(srcString)}
      </div>
    );
  }
}
