import { takeEvery } from 'redux-saga/effects';

import { FETCH_STOCK_INFO } from './types';
import { watchFetchStockInfo } from './workers';

function* rootSaga() {
  yield takeEvery(FETCH_STOCK_INFO, watchFetchStockInfo);
}

export default rootSaga;
