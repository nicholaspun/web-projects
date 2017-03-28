import { combineReducers } from "redux";

// Import reducers here:
import photos from "./photoreducer";
import fetching from "./fetchingreducer";
import fetched from "./fetchedreducer";
import error from "./errorreducer";

const rootReducer = combineReducers({
  photos,
  fetching,
  fetched,
  error
})

export default rootReducer;
