import React from 'react';
import PropTypes from 'prop-types';

import SearchStockForm from '../../components/forms/SearchStockForm';
import SocialMediaInfo from '../../components/SocialMediaInfo';
import Separator from '../../components/Separator';
import StockInfo from '../../components/StockInfo';
import Spinner from '../../components/Spinner';
import './Home.scss';

const propTypes = {
  fetched: PropTypes.bool.isRequired,
  isFetching: PropTypes.bool.isRequired,
};

const Home = props => {
  const { fetched, isFetching } = props;

  return (
    <div className="home-content-wrapper">
      <div className="home-content">
        <SearchStockForm />
        {(fetched || isFetching) && <Separator />}
        {isFetching && <Spinner />}
        {fetched && !isFetching && <SocialMediaInfo />}
        {(fetched || isFetching) && <Separator />}
        {isFetching && <Spinner />}
        {fetched && !isFetching && <StockInfo />}
      </div>
    </div>
  );
};

Home.propTypes = propTypes;

export default Home;
