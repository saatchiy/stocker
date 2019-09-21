import React from 'react';

import './Spinner.scss';

const Spinner = () => (
  <div className="spinner-wrapper">
    {/* eslint-disable-next-line react/self-closing-comp */}
    <i className="fa fa-circle-o-notch fa-spin fa-2x fa-fw loading-spinner"></i>
  </div>
);

export default Spinner;
