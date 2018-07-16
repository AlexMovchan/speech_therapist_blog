import { createStore, applyMiddleware } from 'redux';
import rootReducer from './modules/index';

export default function configureStore(initialState) {
  const store = createStore(rootReducer, initialState);

  if (module.hot) {
    module.hot.accept('./modules/index', () => {
      const nextRootReducer = require('./modules/index');
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
}
