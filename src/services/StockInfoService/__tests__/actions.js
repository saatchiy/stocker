import configureStore from 'redux-mock-store';

import { initialState } from '../reducer';
import {
  CHANGE_STOCK_SYMBOL,
  CHANGE_FROM_DATE,
  CHANGE_TO_DATE,
  FETCH_STOCK_INFO,
  STOCK_INFO_FETCHED,
  CHANGE_SOCIAL_MEDIA,
} from '../types';
import {
  changeStockSymbol,
  changeFromDate,
  changeToDate,
  changeSocialMedia,
  fetchStockInfo,
  stockInfoFetched,
} from '../actions';

const mockStore = configureStore();
const store = mockStore(initialState);

beforeEach(() => {
  store.clearActions();
});

describe('StockInfoService - Actions', () => {
  it('should handle CHANGE_STOCK_SYMBOL', () => {
    const expectedReturn = {
      type: CHANGE_STOCK_SYMBOL,
      symbol: 'APPL',
    };

    store.dispatch(changeStockSymbol(expectedReturn.symbol));

    expect(store.getActions().length).toBe(1);
    expect(store.getActions()[0]).toEqual(expectedReturn);
  });

  it('should handle CHANGE_FROM_DATE', () => {
    const expectedReturn = {
      type: CHANGE_FROM_DATE,
      fromDate: '2019-11-01',
    };

    store.dispatch(changeFromDate(expectedReturn.fromDate));

    expect(store.getActions().length).toBe(1);
    expect(store.getActions()[0]).toEqual(expectedReturn);
  });

  it('should handle CHANGE_TO_DATE', () => {
    const expectedReturn = {
      type: CHANGE_TO_DATE,
      toDate: '2019-11-01',
    };

    store.dispatch(changeToDate(expectedReturn.toDate));

    expect(store.getActions().length).toBe(1);
    expect(store.getActions()[0]).toEqual(expectedReturn);
  });

  it('should handle CHANGE_SOCIAL_MEDIA', () => {
    const expectedReturn = {
      type: CHANGE_SOCIAL_MEDIA,
      id: 'facebook',
      checked: true,
    };

    store.dispatch(
      changeSocialMedia(expectedReturn.id, expectedReturn.checked)
    );

    expect(store.getActions().length).toBe(1);
    expect(store.getActions()[0]).toEqual(expectedReturn);
  });

  it('should handle FETCH_STOCK_INFO', () => {
    const expectedReturn = {
      type: FETCH_STOCK_INFO,
    };

    store.dispatch(fetchStockInfo());

    expect(store.getActions().length).toBe(1);
    expect(store.getActions()[0]).toEqual(expectedReturn);
  });

  it('should handle STOCK_INFO_FETCHED', () => {
    const expectedReturn = {
      type: STOCK_INFO_FETCHED,
      prices: ['200', '150'],
      socialMediaPostCounts: [
        {
          media: 'facebook',
          count: '20',
        },
      ],
      recommendations: ['buy', 'sell'],
    };

    store.dispatch(
      stockInfoFetched(
        expectedReturn.prices,
        expectedReturn.socialMediaPostCounts,
        expectedReturn.recommendations
      )
    );

    expect(store.getActions().length).toBe(1);
    expect(store.getActions()[0]).toEqual(expectedReturn);
  });
});
