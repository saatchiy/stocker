import { subDays, format } from 'date-fns';

import {
  CHANGE_STOCK_SYMBOL,
  CHANGE_FROM_DATE,
  CHANGE_TO_DATE,
  FETCH_STOCK_INFO,
  STOCK_INFO_FETCHED,
  CHANGE_SOCIAL_MEDIA,
} from './types';
import { DATE_FORMAT } from './constants';

export const initialState = () => {
  const currentDate = new Date();

  const startDate = format(subDays(currentDate, 9), DATE_FORMAT);
  const endDate = format(currentDate, DATE_FORMAT);

  return {
    fromDate: startDate,
    toDate: endDate,
    symbol: '',
    socialMedias: {},
    prices: [],
    recommendations: [],
    socialMediaPostCounts: {},
    fetched: false,
    isFetching: false,
  };
};

export default (state = initialState(), action) => {
  switch (action.type) {
    case CHANGE_STOCK_SYMBOL:
      return {
        ...state,
        symbol: action.symbol,
      };
    case CHANGE_FROM_DATE:
      return {
        ...state,
        fromDate: action.fromDate,
      };
    case CHANGE_TO_DATE:
      return {
        ...state,
        toDate: action.toDate,
      };
    case CHANGE_SOCIAL_MEDIA:
      return {
        ...state,
        socialMedias: {
          ...state.socialMedias,
          [action.id]: action.checked,
        },
      };
    case FETCH_STOCK_INFO:
      return {
        ...state,
        isFetching: true,
      };
    case STOCK_INFO_FETCHED:
      return {
        ...state,
        fetched: true,
        isFetching: false,
        prices: action.prices,
        socialMediaPostCounts: action.socialMediaPostCounts,
        recommendations: action.recommendations,
      };
    default:
      return state;
  }
};
