import { connect } from 'react-redux';

import SocialMediaInfo from './SocialMediaInfo';
import { NAMESPACE as stockInfoService } from '../../services/StockInfoService/constants';

const mapStateToProps = state => {
  return {
    socialMediaPostCounts: state[stockInfoService].socialMediaPostCounts,
    stockSymbol: state[stockInfoService].symbol,
  };
};

export default connect(mapStateToProps)(SocialMediaInfo);
