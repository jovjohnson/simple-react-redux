import React from 'react';
import { render } from 'react-dom';
import configStore from './store/configStore'
import { Provider } from 'react-redux'
import { Router, browserHistory } from 'react-router';
import routes from './routes';

import HomePage from './components/home/HomePage'

const store = configStore();


render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>,
  document.getElementById('root')
);
