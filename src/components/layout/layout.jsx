import React from 'react';

import NavBar from '../navbar/navbar.jsx';

import { Switch, Route, Redirect } from 'react-router-dom';

import { Layout } from 'antd';
const { Header, Content } = Layout;

import './layout.scss';

class MainLayout extends React.Component {
  render() {
    return (
      <Layout className="layout">
        <Header className="layout__header"></Header>
        <NavBar />
        <Content className="layout__content">
          <Switch>
            <Route path="/pending">
              <h1>PENDING</h1>
            </Route>
            <Route path="/playing">
              <h1>PLAYING</h1>
            </Route>
            <Route path="/finished">
              <h1>FINISHED</h1>
            </Route>
            <Route path="/">
              <Redirect to="/pending" />
            </Route>
          </Switch>
        </Content>
      </Layout>
    );
  }
}

export default MainLayout;
