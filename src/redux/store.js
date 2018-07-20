import { createStore, applyMiddleware, combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import thunk from 'redux-thunk';

// import routes
import blog from './modules/blog';
import admin from './modules/admin';
import modal from './modules/modal';

const reducer = combineReducers({
  routing: routerReducer,
  blog,
  admin,
  modal,
});

export default function configureStore() {
  const store = createStore(
    reducer,
    applyMiddleware(thunk)
  );

  if (module.hot) {
    module.hot.accept('./modules/index', () => {
      const nextRootReducer = require('./modules/index');
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
}
