import { connect } from 'react-redux';

import SearchStockForm from './SearchStockForm';
import { NAMESPACE as stockInfoService } from '../../../services/StockInfoService/constants';
import {
  changeStockSymbol,
  changeFromDate,
  changeToDate,
  fetchStockInfo,
  changeSocialMedia,
} from '../../../services/StockInfoService/actions';

const mapStateToProps = state => ({
  symbol: state[stockInfoService].symbol,
  fromDate: state[stockInfoService].fromDate,
  toDate: state[stockInfoService].toDate,
});

const mapDispatchToProps = dispatch => ({
  changeStockSymbol: symbol => dispatch(changeStockSymbol(symbol)),
  changeFromDate: fromDate => dispatch(changeFromDate(fromDate)),
  changeToDate: toDate => dispatch(changeToDate(toDate)),
  fetchStockInfo: () => dispatch(fetchStockInfo()),
  changeSocialMedia: (id, checked) => dispatch(changeSocialMedia(id, checked)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchStockForm);
