import React from 'react';

import GamesView from '../games-view/games-view.jsx';

import { Switch, Route, Redirect } from 'react-router-dom';

import { Layout } from 'antd';
const { Header, Content } = Layout;

import './layout.scss';

class MainLayout extends React.Component {
  render() {
    return (
      <Layout className="layout">
        <Header className="layout__header"></Header>
        <Content className="layout__content">
          <Switch>
            <Route path="/games">
              <GamesView />
            </Route>
            <Route path="/">
              <Redirect to="/games/pending" />
            </Route>
          </Switch>
        </Content>
      </Layout>
    );
  }
}

export default MainLayout;
