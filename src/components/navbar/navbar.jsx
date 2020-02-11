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
      >
        <Menu.Item key="/pending">Pending</Menu.Item>
        <Menu.Item key="/playing">Playing</Menu.Item>
        <Menu.Item key="/finished">Finished</Menu.Item>
      </Menu>
    );
  }
}

export default withRouter(NavBar);
