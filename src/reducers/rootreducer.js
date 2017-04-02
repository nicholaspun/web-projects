import { combineReducers } from "redux";
import { routerReducer } from 'react-router-redux'

// Import reducers:
import photos from "./photoreducer";
import fetching from "./fetchingreducer";
import fetched from "./fetchedreducer";
import error from "./errorreducer";
import onPage from "./onpagereducer";
import maxPages from "./maxpagesreducer";

const rootReducer = combineReducers({
  photos,
  fetching,
  fetched,
  error,
  onPage,
  maxPages,
  router: routerReducer
})

export default rootReducer;
