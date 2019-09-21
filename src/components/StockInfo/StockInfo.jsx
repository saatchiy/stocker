import React from 'react';
import PropTypes from 'prop-types';
import addDays from 'date-fns/addDays';
import parseISO from 'date-fns/parseISO';
import format from 'date-fns/format';

import { DATE_FORMAT } from '../../services/StockInfoService/constants';
import './StockInfo.scss';

const propTypes = {
  prices: PropTypes.arrayOf(PropTypes.string).isRequired,
  recommendations: PropTypes.arrayOf(PropTypes.string).isRequired,
  fromDate: PropTypes.string.isRequired,
};

const StockInfo = props => {
  const { prices, fromDate, recommendations } = props;

  return (
    <div className="stock-info-wrapper">
      <table>
        <tbody>
          <tr>
            <th>Date</th>
            <th>Price</th>
            <th>Recommendation</th>
          </tr>
          {prices.map((price, index) => {
            const priceDate = addDays(parseISO(fromDate), index);
            const formattedDate = format(priceDate, DATE_FORMAT);
            return (
              <tr key={formattedDate}>
                <td>{formattedDate}</td>
                <td>{price}</td>
                <td>{recommendations[index].toUpperCase()}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

StockInfo.propTypes = propTypes;

export default StockInfo;
