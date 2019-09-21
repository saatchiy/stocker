import React from 'react';
import PropTypes from 'prop-types';

import './SocialMediaInfo.scss';

const propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  socialMediaPostCounts: PropTypes.arrayOf(PropTypes.object).isRequired,
  stockSymbol: PropTypes.string.isRequired,
};

const SocialMediaInfo = props => {
  const { socialMediaPostCounts, stockSymbol } = props;

  const counts = socialMediaPostCounts.map(media => {
    return media.count;
  });

  const totalCount = counts.reduce(
    (total, currentCount) => total + currentCount
  );

  return (
    <div className="social-media-wrapper">
      <div className="social-media-info">
        <span className="stock-symbol">{stockSymbol}</span>
        {` symbol appeared in `}
        <span className="post-count">{totalCount}</span>
        {` social media posts in the selected dates`}
      </div>
      <div className="social-media-post-counts">
        {socialMediaPostCounts.map(media => (
          <div key={media.media}>
            {`${media.media.toUpperCase()}: ${media.count}`}
          </div>
        ))}
      </div>
    </div>
  );
};

SocialMediaInfo.propTypes = propTypes;

export default SocialMediaInfo;
