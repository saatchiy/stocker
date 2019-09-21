import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import stockSymbolSearch from '../services/StockInfoService/reducer';

import { NAMESPACE as stockSymbolSearchReducer } from '../services/StockInfoService/constants';

const reducers = history =>
  combineReducers({
    router: connectRouter(history),
    [stockSymbolSearchReducer]: stockSymbolSearch,
  });

export default reducers;
