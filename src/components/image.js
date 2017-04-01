import React, { Component } from "react";
import '../styles/image.css'
import Dialog from 'material-ui/Dialog';

export default class Image extends Component {
  state = {
    open: false, // for Dialog Component
  };

  shouldComponentUpdate(newProps, newState) {
    return this.props.imageKey !== newProps.imageKey;  // Only rerender if fetching new images
  }

  // Dialog Controllers
  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
  };

  renderDialog() {
    const { name, image_url, description } = this.props.imgData;
    var dialogImageStyle = {
      padding: '3px',
      height: 300,
    }
    return (
      <Dialog modal={false}
              open={this.state.open}
              onRequestClose={this.handleClose}>
        <div style={{display: 'flex'}}>
          <img src={image_url} alt={name} style={dialogImageStyle}></img>
          <div style={{padding: '10px'}}>
            {description}
          </div>
        </div>
      </Dialog>
    );
  }

  // Image Controller
  renderImage() {
    const { name, image_url } = this.props.imgData;
    var style = {
      width: this.props.width
    };
    return (
      <div>
        <img src={image_url} style={style} alt={name}
             className="image" onClick={this.handleOpen.bind(this)}>
        </img>
        <div className="middle">
          <div className="text">{name}</div>
        </div>
      </div>
    );
  }

  render() {
    return (
      <div className="container">
        {this.renderImage()}
        {this.renderDialog()}
      </div>
    );
  }
}
