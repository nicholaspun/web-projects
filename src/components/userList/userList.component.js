import React, { Component } from 'react';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    users: state.users
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateUsers: (data) => dispatch({type: "UPDATE_USERS", payload: data}),
  }
}

class UserList extends Component {
  componentDidMount () {
    socket.on('update users', this._updateUsers)
  }

  _updateUsers = (data) => {
    this.props.updateUsers(data)
  }

  renderUsers = () => {
    return this.props.users.map((u, i) => <p key={i}>{u}</p>)
  }

  render () {
    return <div style={{'width': '50%'}}>{this.renderUsers()}</div>
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserList);
