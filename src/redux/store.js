import { createStore, applyMiddleware, combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import thunk from "redux-thunk";

// import routes
import blog from './modules/blog';

const reducer = combineReducers({
  routing: routerReducer,
  blog,
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
