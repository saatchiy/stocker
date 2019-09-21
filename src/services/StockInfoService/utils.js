import differenceInCalendarDays from 'date-fns/differenceInCalendarDays';
import parseISO from 'date-fns/parseISO';

import { SOCIAL_MEDIA_TYPES, RECOMMENDATIONS } from './constants';

const getRandom = max => Math.random() * Math.floor(max);
const getRandomInt = max => Math.floor(getRandom(max));

const delay = delayTime => {
  return new Promise(resolve => {
    setTimeout(() => resolve(), delayTime);
  });
};

export async function stockPriceGenerator(from, to) {
  await delay(1000);

  const fromDate = parseISO(from);
  const toDate = parseISO(to);

  const numberOfDays = differenceInCalendarDays(toDate, fromDate);

  let currentPrice = getRandom(1000);

  const prices = new Array(numberOfDays + 1).fill(null).map(() => {
    const changePercentage = getRandom(10);
    const isIncreased = getRandomInt(2);

    if (isIncreased) {
      currentPrice *= 1 + changePercentage / 100;

      return currentPrice.toFixed(2);
    }
    currentPrice *= 1 - changePercentage / 100;

    return currentPrice.toFixed(2);
  });

  return prices;
}

export async function socialMediaCountGenerator(socialMedias) {
  await delay(1500);

  const posts = Object.keys(socialMedias).map(socialMediaType => {
    if (socialMedias[socialMediaType]) {
      switch (socialMediaType) {
        case SOCIAL_MEDIA_TYPES.FACEBOOK.key:
          return {
            media: SOCIAL_MEDIA_TYPES.FACEBOOK.key,
            count: getRandomInt(100),
          };
        case SOCIAL_MEDIA_TYPES.TWITTER.key:
          return {
            media: SOCIAL_MEDIA_TYPES.TWITTER.key,
            count: getRandomInt(70),
          };
        case SOCIAL_MEDIA_TYPES.REDDIT.key:
          return {
            media: SOCIAL_MEDIA_TYPES.REDDIT.key,
            count: getRandomInt(40),
          };
        default:
          return null;
      }
    }

    return null;
  });

  return posts;
}

// eslint-disable-next-line no-unused-vars
export async function recommendationAlgorithm(prices, socialMediaCounts) {
  await delay(500);

  return prices.map(() => {
    const recommendation = getRandomInt(3);

    switch (recommendation) {
      case 0:
        return RECOMMENDATIONS.HOLD;
      case 1:
        return RECOMMENDATIONS.BUY;
      case 2:
        return RECOMMENDATIONS.SELL;
      default:
        return RECOMMENDATIONS.HOLD;
    }
  });
}
