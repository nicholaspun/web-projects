import React, { Component } from 'react';
import { connect } from "react-redux";

const mapDispatchToProps = (dispatch) => {
  return {
    addUser: (username) => dispatch({type: "ADD_USER", payload: username}),
  }
}

class UserLogin extends Component {
  sendUsername = (event) => {
    event.preventDefault();
    this.props.addUser(event.target.username.value)
    socket.emit('add user', event.target.username.value);
  }

  render () {
    return (
      <div>
        <form onSubmit={this.sendUsername}>
          <input type="text" name="username"></input>
          <input type="submit" style={{'display': 'none'}}></input>
        </form>
      </div>
    )
  }
}

export default connect(null, mapDispatchToProps)(UserLogin);
