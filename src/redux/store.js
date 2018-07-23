import { createStore, applyMiddleware, combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import thunk from 'redux-thunk';

// import routes
import blog from './modules/blog';
import admin from './modules/admin';
import modal from './modules/modal';
import activePost from './modules/activePost';

const reducer = combineReducers({
  routing: routerReducer,
  blog,
  admin,
  modal,
  activePost
});

export default function configureStore() {
  const store = createStore(
    reducer,
    applyMiddleware(thunk)
  );

  if (module.hot) {
    module.hot.accept('./modules', () => {
      const nextRootReducer = require('./modules');
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
}
