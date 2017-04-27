// React Components
import React from 'react';
import ReactDOM from 'react-dom';

// Redux Components
import { Provider } from "react-redux";
import store from "./store";

// Components
import App from './app';

const render = (Component) => {
  ReactDOM.render(
    <Provider store={store}>
      <Component></Component>
    </Provider>,
    document.getElementById('root')
  )
}

render(App);

if (module.hot) {
  module.hot.accept('./app', () => {
    render(App)
  });
}
