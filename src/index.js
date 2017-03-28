import React from 'react';
import { render } from 'react-dom';
import { Provider } from "react-redux";
import App from './components/app';
import './index.css';
import store from "./store";
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

const Main = (
  <Provider store={store}>
    <App></App>
  </Provider>
)

render(Main, document.getElementById('root'));
