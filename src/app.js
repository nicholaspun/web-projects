import React, { Component } from 'react';
import { connect } from 'react-redux';

// Components
import UserLogin from './components/userLogin/userLogin.component';
import MessagingArea from './components/messagingArea/messagingArea.component';
import UserList from './components/userList/userList.component';

const mapStateToProps = (state) => {
  return {
    currentUser: state.currentUser,
  }
}

class App extends Component {
  render () {
    return (
      <div>
      { !this.props.currentUser ?
        <UserLogin></UserLogin> :
        <div style={{'display': 'flex'}}>
          <div style={{'width': '50%'}}>
            <UserList></UserList>
          </div>
          <div style={{'width': '50%'}}>
            <MessagingArea></MessagingArea>
          </div>
        </div>
      }
      </div>
    )
  }
}

export default connect(mapStateToProps)(App);
