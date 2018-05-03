import { applyMiddleware, createStore } from "redux";

// Middleware:
import logger from "redux-logger";
import thunkMiddleware from 'redux-thunk';

// Reducers:
import rootReducer from "./reducers/rootreducer";

const initialState = {
  fetching: false,
  fetched: false,
  photos: [],
  error: null,
  onPage: 0,
  maxPages: 0
};

const middleware = applyMiddleware(thunkMiddleware, logger);
const store = createStore(rootReducer, initialState, middleware);

export default store;
