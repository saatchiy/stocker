import reducer, { initialState } from '../reducer';
import {
  changeStockSymbol,
  changeFromDate,
  changeToDate,
  changeSocialMedia,
  fetchStockInfo,
  stockInfoFetched,
} from '../actions';
import { jsxEmptyExpression } from '@babel/types';

describe('StockInfoService - reducer', () => {
  it('should have correct state after changeStockSymbol', () => {
    const prevState = initialState();
    const expectedState = {
      fromDate: prevState.fromDate,
      toDate: prevState.toDate,
      symbol: 'APPL',
      socialMedias: {},
      prices: [],
      recommendations: [],
      socialMediaPostCounts: {},
      fetched: false,
      isFetching: false,
    };
    const nextState = reducer(prevState, changeStockSymbol('APPL'));
    expect(nextState).toEqual(expectedState);
  });

  it('should have correct state after changeFromDate', () => {
    const prevState = initialState();
    const expectedState = {
      fromDate: '2019-11-01',
      toDate: prevState.toDate,
      symbol: '',
      socialMedias: {},
      prices: [],
      recommendations: [],
      socialMediaPostCounts: {},
      fetched: false,
      isFetching: false,
    };
    const nextState = reducer(prevState, changeFromDate('2019-11-01'));
    expect(nextState).toEqual(expectedState);
  });

  it('should have correct state after changeToDate', () => {
    const prevState = initialState();
    const expectedState = {
      fromDate: prevState.fromDate,
      toDate: '2019-11-01',
      symbol: '',
      socialMedias: {},
      prices: [],
      recommendations: [],
      socialMediaPostCounts: {},
      fetched: false,
      isFetching: false,
    };
    const nextState = reducer(prevState, changeToDate('2019-11-01'));
    expect(nextState).toEqual(expectedState);
  });

  it('should have correct state after changeSocialMedia', () => {
    const prevState = initialState();
    const expectedState = {
      fromDate: prevState.fromDate,
      toDate: prevState.toDate,
      symbol: '',
      socialMedias: {
        facebook: true,
      },
      prices: [],
      recommendations: [],
      socialMediaPostCounts: {},
      fetched: false,
      isFetching: false,
    };
    const nextState = reducer(prevState, changeSocialMedia('facebook', true));
    expect(nextState).toEqual(expectedState);
  });

  it('should have correct state after fetchStockInfo', () => {
    const prevState = {
      fromDate: '2019-11-01',
      toDate: '2019-11-02',
      symbol: 'APPL',
      socialMedias: {
        facebook: true,
      },
      prices: [],
      recommendations: [],
      socialMediaPostCounts: {},
      fetched: false,
      isFetching: false,
    };

    const expectedState = {
      fromDate: prevState.fromDate,
      toDate: prevState.toDate,
      symbol: prevState.symbol,
      socialMedias: prevState.socialMedias,
      prices: [],
      recommendations: [],
      socialMediaPostCounts: {},
      fetched: false,
      isFetching: true,
    };
    const nextState = reducer(prevState, fetchStockInfo());
    expect(nextState).toEqual(expectedState);
  });

  it('should have correct state after stockInfoFetched', () => {
    const prevState = {
      fromDate: '2019-11-01',
      toDate: '2019-11-02',
      symbol: 'APPL',
      socialMedias: {
        facebook: true,
      },
      prices: [],
      recommendations: [],
      socialMediaPostCounts: {},
      fetched: false,
      isFetching: true,
    };

    const mockedPrices = ['200'];
    const mockedCounts = [{ media: 'facebook', count: '20' }];
    const mockedRecomms = ['buy'];

    jest.mock('../workers', () => ({
      stockPriceGenerator: jest.fn(() => mockedPrices),
      socialMediaCountGenerator: jest.fn(() => mockedCounts),
      recommendationAlgorithm: jest.fn(() => mockedRecomms),
    }));

    const expectedState = {
      fromDate: prevState.fromDate,
      toDate: prevState.toDate,
      symbol: prevState.symbol,
      socialMedias: prevState.socialMedias,
      prices: ['200'],
      recommendations: ['buy'],
      socialMediaPostCounts: [{ media: 'facebook', count: '20' }],
      fetched: true,
      isFetching: false,
    };
    const nextState = reducer(
      prevState,
      stockInfoFetched(mockedPrices, mockedCounts, mockedRecomms)
    );
    expect(nextState).toEqual(expectedState);
  });
});
