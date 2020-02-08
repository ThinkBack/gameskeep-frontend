import React from 'react';

import './layout.scss';


class Layout extends React.Component {
  render() {
    return (
      <div className="grid-container">
        <div className="grid-container__sidebar"></div>
        <div className="grid-container__header"></div>
        <div className="grid-container__navbar"></div>
        <div className="grid-container__body"></div>
      </div>
    )
  }
}

export default Layout;
