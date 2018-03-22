import React, { Component } from 'react';
import { connect } from "react-redux";
import { modifyUserInput } from "./inputarea.action"; // Actions
import './inputarea.css'

const mapStateToProps = (state) => {
  return {
    userInput: state.userInput,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    modifyUserInput: (newUserInput) => dispatch(modifyUserInput(newUserInput)),
  }
}

class InputArea extends Component {
  handleChange (event) {
    this.props.modifyUserInput(event.target.value);
  }

  render () {
    const { userInput, modifyUserInput } = this.props
    return (
      <textarea value={userInput} onChange={this.handleChange.bind(this)} />
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(InputArea);
