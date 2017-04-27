import React, { Component } from 'react';

export default class App extends Component {
  constructor () {
    super();
    this.state = {
      currentUser: null,
      users: [],
      messages: [],
    }
  }

  componentDidMount () {
    socket.on('new message', this._addMessage)
    socket.on('update users', this._updateUsers)
  }

  _addMessage = (data) => {
    this.setState({ messages: this.state.messages.concat([data])})
  }

  _updateUsers = (data) => {
    this.setState({ users: data.users });
  }

  sendUsername = (event) => {
    event.preventDefault();
    this.setState({ currentUser: event.target.username.value })
    socket.emit('add user', event.target.username.value);
  }

  sendMessage = (event) => {
    event.preventDefault();
    socket.emit('send message', this.state.currentUser, event.target.messageInput.value);
    event.target.messageInput.value = '';
  }

  renderUsers = () => {
    return this.state.users.map((u, i) => <p key={i}>{u}</p>)
  }

  renderMessages = () => {
    return this.state.messages.map((m, i) => <p key={i}>{m.user}: {m.msg}</p>)
  }

  render () {
    return (
      <div>
        { !this.state.currentUser ?
          <div>
            <form onSubmit={this.sendUsername}>
              <input type="text" name="username"></input>
              <input type="submit" style={{'display': 'none'}}></input>
            </form>
          </div> :
          <div style={{'display': 'flex'}}>
            <div style={{'width': '50%'}}>{this.renderUsers()}</div>
            <div style={{'width': '50%'}}>
              <div>{this.renderMessages()}</div>
              <form onSubmit={this.sendMessage}>
                <input type="text" name="messageInput"></input>
                <input type="submit" style={{'display': 'none'}}></input>
              </form>
            </div>
          </div>
        }
      </div>
    )
  }
}
