import {
  stockPriceGenerator,
  socialMediaCountGenerator,
  recommendationAlgorithm,
} from './utils';

export const fetchStockPrice = (symbol, from, to) => {
  return stockPriceGenerator(from, to);
};

export const fetchStockSocialMediaCount = (symbol, socialMedias) => {
  return socialMediaCountGenerator(socialMedias);
};

export const getRecommendations = (prices, socialMediaCounts) => {
  return recommendationAlgorithm(prices, socialMediaCounts);
};
