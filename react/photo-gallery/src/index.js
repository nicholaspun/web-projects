// React Components
import React from 'react';
import { render } from 'react-dom';

// Redux Components
import { Provider } from "react-redux";
import store from "./store";


// Components
import App from './components/app'

// CSS (For Body tag)
import './index.css';

// Material UI
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

const provider = (
  <Provider store={store}>
    <App></App>
  </Provider>
)

render(provider, document.getElementById('root'));
