import { all } from 'redux-saga/effects';
import stockSymbolSearch from '../services/StockInfoService/saga';

function* rootSaga() {
  const sagas = [stockSymbolSearch()];

  yield all(sagas);
}

export default rootSaga;
