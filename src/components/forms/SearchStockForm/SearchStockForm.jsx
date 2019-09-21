import React from 'react';
import PropTypes from 'prop-types';

import TextInput from '../../inputs/TextInput';
import DateInput from '../../inputs/DateInput';
import { SOCIAL_MEDIA_TYPES } from '../../../services/StockInfoService/constants';
import Checkbox from '../../inputs/Checkbox';
import './SearchStockForm.scss';

const propTypes = {
  symbol: PropTypes.string.isRequired,
  fromDate: PropTypes.string.isRequired,
  toDate: PropTypes.string.isRequired,
  changeStockSymbol: PropTypes.func.isRequired,
  changeFromDate: PropTypes.func.isRequired,
  changeToDate: PropTypes.func.isRequired,
  changeSocialMedia: PropTypes.func.isRequired,
  fetchStockInfo: PropTypes.func.isRequired,
};

const SearchStockForm = props => {
  const {
    symbol,
    fromDate,
    toDate,
    changeStockSymbol,
    changeFromDate,
    changeToDate,
    changeSocialMedia,
    fetchStockInfo,
  } = props;

  const handleSubmit = event => {
    event.preventDefault();
    fetchStockInfo();
  };

  const handleSymbolChange = value => {
    changeStockSymbol(value);
  };

  const handleFromDateChange = value => {
    changeFromDate(value);
  };

  const handleToDateChange = value => {
    changeToDate(value);
  };

  const handleSocialMediaChange = (id, checked) => {
    changeSocialMedia(id, checked);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="search-content-wrapper">
        <div className="search-row">
          <TextInput
            label="Stock Symbol"
            value={symbol}
            onChange={handleSymbolChange}
            placeholder="APPL"
          />
          <DateInput
            label="From"
            value={fromDate}
            onChange={handleFromDateChange}
          />
          <DateInput label="To" value={toDate} onChange={handleToDateChange} />
        </div>
        <div className="search-row">
          <Checkbox
            items={SOCIAL_MEDIA_TYPES}
            label="Select Social Media"
            onChange={handleSocialMediaChange}
          />
          <div className="fetch-stock-button">
            <button type="submit" onSubmit={handleSubmit}>
              Show Stock Info
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

SearchStockForm.propTypes = propTypes;

export default SearchStockForm;
