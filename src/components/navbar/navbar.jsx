import React from 'react';
import { withRouter } from 'react-router-dom';

import { Menu } from 'antd';

import './navbar.scss';

class NavBar extends React.Component {
  render() {
    const { location, history } = this.props;

    return (
      <Menu
        onClick={e => history.push(e.key)}
        selectedKeys={[location.pathname]}
        mode="horizontal"
        theme="dark"
        className="navbar"
      >
        <Menu.Item key="/pending" className="navbar__item">
          <span className="navbar__item__title">Pending</span>
        </Menu.Item>
        <Menu.Item key="/playing" className="navbar__item">
          <span className="navbar__item__title">Playing</span>
        </Menu.Item>
        <Menu.Item key="/finished" className="navbar__item">
          <span className="navbar__item__title">Finished</span>
        </Menu.Item>
      </Menu>
    );
  }
}

export default withRouter(NavBar);
