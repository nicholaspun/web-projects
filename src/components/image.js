import React, { Component } from "react";
import '../styles/image.css'
import Dialog from 'material-ui/Dialog';

var desc = `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Etiam ipsum nunc, faucibus sit amet imperdiet ullamcorper, c
              onsequat eget felis. Aliquam mauris
              sagittis quis, commodo eget nunc. Vivamus bibendum massa
              eu ullamcorper malesuada. Curabitur placerat nunc
              ultrices mauris volutpat, id egestas ipsum vulputate.
              Phasellus ultricies efficitur quam, a lobortis erat
              Sed ac commodo turpis. Pellentesque molestie lobor
              tis magna sit amet dignissim `

export default class Image extends Component {
  state = {
    open: false,
  };

  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
  };

  renderDialog() {
    const { url } = this.props.imgData;
    var dialogImageStyle = {
      padding: '3px',
      height: 300,
    }
    return (
      <Dialog modal={false}
              open={this.state.open}
              onRequestClose={this.handleClose}>
        <div style={{display: 'flex'}}>
          <img src={url} alt="" style={dialogImageStyle}></img>
          <div style={{padding: '10px'}}>
            {desc}
          </div>
        </div>
      </Dialog>
    );
  }

  renderImage() {
    const { title, url } = this.props.imgData;
    var style = {
      width: this.props.width
    };
    return (
      <div>
        <img src={url}
             style={style}
             alt=""
             className="image"
             onClick={this.handleOpen.bind(this)}>
        </img>
        <div className="middle">
          <div className="text">{title}</div>
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
