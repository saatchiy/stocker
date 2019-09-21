import React from 'react';

import Logo from '../../resources/binoculars.svg';
import './Header.scss';

const Header = () => (
  <div className="header-wrapper">
    <div className="header-content">
      <img className="header-logo" src={Logo} alt="logo" />
      <div className="app-name">Stocker</div>
      <div className="header__app-desc">
        A stock market tracking and recommendation tool
      </div>
    </div>
  </div>
);

export default Header;
