import { connect } from 'react-redux';

import { NAMESPACE as stockInfoService } from '../../services/StockInfoService/constants';
import Home from './Home';

const mapStateToProps = state => ({
  fetched: state[stockInfoService].fetched,
  isFetching: state[stockInfoService].isFetching,
});

export default connect(mapStateToProps)(Home);
