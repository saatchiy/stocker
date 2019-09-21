import React from 'react';

import Logo from '../../resources/binoculars.svg';
import './Header.scss';
import { history } from '../../redux/store';

const Header = () => {
  const handleAlgorithms = event => {
    event.preventDefault();
    history.push('/algorithms');
  };

  const handleSettings = event => {
    event.preventDefault();
    history.push('/settings');
  };

  return (
    <div className="header-wrapper">
      <div className="header-content">
        <img className="header-logo" src={Logo} alt="logo" />
        <div className="app-name">Stocker</div>
        <div className="header__app-desc">
          A stock market tracking and recommendation tool
        </div>
        <button type="submit" onClick={handleAlgorithms} className="routes">Algorithms</button>
        <button type="submit" onClick={handleSettings} className="routes">Settings</button>
      </div>
    </div>
  );
};

export default Header;
