import { createStore, applyMiddleware, compose } from 'redux';
import { createBrowserHistory } from 'history';
import createSagaMiddleware from 'redux-saga';

import createRootReducer from './reducers';
import sagas from './sagas';

export const history = createBrowserHistory();

history.entries = [];

const sagaMiddleware = createSagaMiddleware();

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancer = composeEnhancer(applyMiddleware(sagaMiddleware));

const reducers = createRootReducer(history);
const store = createStore(reducers, enhancer);

if (module.hot) {
  module.hot.accept(() => {
    store.replaceReducer(reducers);
  });
}

sagaMiddleware.run(sagas);

export default store;
