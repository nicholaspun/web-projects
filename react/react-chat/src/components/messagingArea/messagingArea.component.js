import React, { Component } from 'react';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    currentUser: state.currentUser,
    messages: state.messages
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addMessage: (data) => dispatch({type: "ADD_MESSAGE", payload: data}),
  }
}

class MessagingArea extends Component {
  componentDidMount () {
    socket.on('new message', this._addMessage)
  }

  _addMessage = (data) => {
    this.props.addMessage(data)
  }

  sendMessage = (event) => {
    event.preventDefault();
    socket.emit('send message', this.props.currentUser, event.target.messageInput.value);
    event.target.messageInput.value = '';
  }

  renderMessages = () => {
    return this.props.messages.map((m, i) => <p key={i}>{m.user}: {m.msg}</p>)
  }

  render () {
    return (
      <div>
        <div>{this.renderMessages()}</div>
        <form onSubmit={this.sendMessage}>
          <input type="text" name="messageInput"></input>
          <input type="submit" style={{'display': 'none'}}></input>
        </form>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MessagingArea);
