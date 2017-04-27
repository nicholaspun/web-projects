import { applyMiddleware, createStore } from "redux";

// Middleware:
import logger from "redux-logger";

// Reducers:
import rootReducer from "./reducers/index";

const initialState = {
  currentUser: '',
  messages: [],
  users: []
};

const middleware = applyMiddleware(logger);
const store = createStore(rootReducer, initialState, middleware);

if (module.hot) {
  module.hot.accept('./reducers', () => {
    const nextRootReducer = require('./reducers/index').default;
    store.replaceReducer(nextRootReducer);
  })
}

export default store;
