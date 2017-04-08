import { combineReducers } from "redux";

// Import reducers:
import userInput from "../components/inputarea/inputarea.reducer";

const rootReducer = combineReducers({
  userInput,
})

export default rootReducer;
