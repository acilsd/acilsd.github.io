import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import rootReducer from './reducers';

import App from './components/App/';
import styles from './style/custom.scss';

let users = [];
for (let i=1; i<10; i++) {
  users.push({
    id: i,
    username: 'John ' + i,
    job: 'Employee ' + i,
  });
}
const initial_state = {
  users: {
    list: users,
  },
};

const logger = createLogger();
const store = createStore(rootReducer, initial_state, applyMiddleware(thunk, logger));
const container = document.getElementById('container');

render(
  <Provider store={store}>
    <App />
  </Provider>,
  container
);
