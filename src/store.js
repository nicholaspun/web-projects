import { applyMiddleware, createStore } from "redux";

// Middleware:
import logger from "redux-logger";
import thunkMiddleware from 'redux-thunk';

// Reducers:
import rootReducer from "./reducers/rootreducer"

// const initialState = {
//   fetching: false,
//   fetched: false,
//   photos: [],
//   error: null,
// };

const middleware = applyMiddleware(thunkMiddleware, logger);
const store = createStore(rootReducer, middleware);

export default store;
