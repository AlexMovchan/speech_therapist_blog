import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import Home from './containers/Home/Home';
import configureStore from './redux/store';

const store = configureStore();

render(
  <Provider store={store}>
    <Home />
  </Provider>,
  document.getElementById('root')
);
