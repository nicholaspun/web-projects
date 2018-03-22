import { combineReducers } from "redux";

// Import reducers:
import currentUser from '../components/userLogin/userLogin.reducer';
import messages from '../components/messagingArea/messagingArea.reducer';
import users from '../components/userList/userList.reducer';

const rootReducer = combineReducers({
  currentUser,
  messages,
  users
})

export default rootReducer;
