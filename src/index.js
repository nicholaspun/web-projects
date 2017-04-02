// React Components
import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// Redux Components
import { Provider } from "react-redux";
import store, { history } from "./store";
// import { ConnectedRouter } from 'react-router-redux'

// Components
import App from './components/app';
import ImageGrid from './components/imagegrid';

// CSS (For Body tag)
import './index.css';

// Material UI
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

const Main = (
  <Provider store={store}>
    <Router history={history}>
      <Route exact path="/" component={App} />
    </Router>
  </Provider>
)

render(Main, document.getElementById('root'));
