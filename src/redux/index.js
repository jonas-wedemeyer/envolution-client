import { applyMiddleware, createStore, compose } from 'redux';
import reducers from './reducers';
import apiMiddleware from './middlewares/api';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middlewares = [apiMiddleware];

const enhancer = composeEnhancers(applyMiddleware(...middlewares));

const createReduxStore = () => {
  const store = createStore(reducers, enhancer);
  return store;
};

export default createReduxStore;
