import {
  CHANGE_STOCK_SYMBOL,
  CHANGE_FROM_DATE,
  CHANGE_TO_DATE,
  FETCH_STOCK_INFO,
  STOCK_INFO_FETCHED,
  CHANGE_SOCIAL_MEDIA,
} from './types';

export function changeStockSymbol(symbol) {
  return {
    type: CHANGE_STOCK_SYMBOL,
    symbol,
  };
}

export function changeFromDate(fromDate) {
  return {
    type: CHANGE_FROM_DATE,
    fromDate,
  };
}

export function changeToDate(toDate) {
  return {
    type: CHANGE_TO_DATE,
    toDate,
  };
}

export function changeSocialMedia(id, checked) {
  return {
    type: CHANGE_SOCIAL_MEDIA,
    id,
    checked,
  };
}

export function fetchStockInfo() {
  return {
    type: FETCH_STOCK_INFO,
  };
}

export function stockInfoFetched(
  prices,
  socialMediaPostCounts,
  recommendations
) {
  return {
    type: STOCK_INFO_FETCHED,
    prices,
    socialMediaPostCounts,
    recommendations,
  };
}
