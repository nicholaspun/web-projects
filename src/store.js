import { applyMiddleware, createStore } from "redux";

// Routing
import createHistory from 'history/createBrowserHistory'
import { routerMiddleware } from 'react-router-redux'

// Middleware:
import logger from "redux-logger";
import thunkMiddleware from 'redux-thunk';

// Reducers:
import rootReducer from "./reducers/rootreducer";

export const history = createHistory();

const routerHistory = routerMiddleware(history);

const initialState = {
  fetching: false,
  fetched: false,
  photos: [],
  error: null,
  onPage: 0,
  maxPages: 0
};

const middleware = applyMiddleware(thunkMiddleware, logger, routerHistory);
const store = createStore(rootReducer, initialState, middleware);

export default store;
