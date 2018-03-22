import React, { Component } from 'react';

export default class Location extends Component {
  constructor(props) {
    super(props);
    this.marginWidth = this.props.width;
  }

  render() {
    var style = {
      top: '50px',
      marginLeft: this.marginWidth + 50,
      position: 'relative',
    }
    return (
      <div style={style}>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2604.424150257043!2d-122.8679558850311!3d49.24940608104992!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5486786846381f99%3A0x2699e367ba0d6f53!2sSushi+Karis!5e0!3m2!1sen!2sca!4v1490460982382"
                width="400"
                height="300"
                frameBorder="0"
                style={{border:0}}
                allowFullScreen>
        </iframe>
      </div>
    )
  }
}
