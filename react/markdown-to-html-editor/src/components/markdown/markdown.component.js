import React, { Component } from 'react';
import { connect } from "react-redux";
import '../inputarea/inputarea.css';
var marked = require('marked');

const mapStateToProps = (state) => {
  return {
    userInput: state.userInput,
  }
}

class MarkdownArea extends Component {
  render () {
    return (
      <textarea readOnly value={marked(this.props.userInput)} />
    )
  }
}

export default connect(mapStateToProps)(MarkdownArea);
