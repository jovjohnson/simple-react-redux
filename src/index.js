import React from 'react';
import { render } from 'react-dom';
import configStore from './store/configStore'
import { Provider } from 'react-redux'
import { Router, browserHistory } from 'react-router'
import routes from './routes';
import { loadCourses } from './actions/courseActions'
import HomePage from './components/home/HomePage'

const store = configStore();

store.dispatch(loadCourses());


render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>,
  document.getElementById('root')
);
