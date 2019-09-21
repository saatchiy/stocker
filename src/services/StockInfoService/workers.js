import { call, put, select } from 'redux-saga/effects';

import {
  fetchStockPrice,
  fetchStockSocialMediaCount,
  getRecommendations,
} from './api';
import { stockInfoFetched } from './actions';
import { NAMESPACE } from './constants';

export function* watchFetchStockInfo() {
  const state = yield select();
  const stockInfoState = yield state[NAMESPACE];

  const prices = yield call(
    fetchStockPrice,
    stockInfoState.symbol,
    stockInfoState.fromDate,
    stockInfoState.toDate
  );

  const socialMediaCounts = yield call(
    fetchStockSocialMediaCount,
    stockInfoState.symbol,
    stockInfoState.socialMedias
  );

  const recommendations = yield call(
    getRecommendations,
    prices,
    socialMediaCounts
  );

  yield put(stockInfoFetched(prices, socialMediaCounts, recommendations));
}
