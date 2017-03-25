import React, { Component } from 'react';
import '../styles/sushitile.css'

export default class SushiTile extends Component {
  render() {
    const { name, src, desc, price, width } = this.props.data;
    var imgStyle = {
      width: '100%',
      maxHeight: '120px',
      margin: 'auto',
      display: 'block'
    }
    var style = {
      width: width,
      padding: '10px',
      background: '#D48D46',
      height: '200px'
    }
    var headerStyle = {
      textAlign: 'center',
    }
    return (
      <div style={style} className="container">
        <img src={src}
             alt={name}
             style={imgStyle}
             className="image">
        </img>
        <h3 style={headerStyle}>{name}</h3>
        <div className="middle">
          <div className="text">
            <p>{desc}</p>
            <p>{price}</p>
          </div>
        </div>
      </div>
    );
  }
}
