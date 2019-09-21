import { connect } from 'react-redux';

import StockInfo from './StockInfo';
import { NAMESPACE as stockInfoService } from '../../services/StockInfoService/constants';

const mapStateToProps = state => ({
  prices: state[stockInfoService].prices,
  recommendations: state[stockInfoService].recommendations,
  fromDate: state[stockInfoService].fromDate,
});

export default connect(mapStateToProps)(StockInfo);
