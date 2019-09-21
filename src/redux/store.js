import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';

import reducers from './reducers';
import sagas from './sagas';

const sagaMiddleware = createSagaMiddleware();

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancer = composeEnhancer(applyMiddleware(sagaMiddleware));

const store = createStore(reducers, enhancer);

if (module.hot) {
  module.hot.accept(() => {
    store.replaceReducer(reducers);
  });
}

sagaMiddleware.run(sagas);

export default store;
