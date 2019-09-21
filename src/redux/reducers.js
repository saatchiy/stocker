import { combineReducers } from 'redux';

import stockSymbolSearch from '../services/StockInfoService/reducer';

import { NAMESPACE as stockSymbolSearchReducer } from '../services/StockInfoService/constants';

const reducers = combineReducers({
  [stockSymbolSearchReducer]: stockSymbolSearch,
});

export default reducers;
