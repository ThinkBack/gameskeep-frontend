import React from 'react';
import { withRouter } from 'react-router-dom';

import { Tabs } from 'antd';
const { TabPane } = Tabs;

import GamesList from '../games-list/games-list.jsx';

import './games-view.scss';

class GamesView extends React.Component {
  render() {
    const { location, history } = this.props;

    return (
      <Tabs activeKey={location.pathname} onChange={e => history.push(e)}>
        <TabPane key="/games/pending" tab="Pending">
          <GamesList list="pending" />
        </TabPane>
        <TabPane key="/games/playing" tab="Playing">
          <GamesList list="playing" />
        </TabPane>
        <TabPane key="/games/finished" tab="Finished">
          <GamesList list="finished" />
        </TabPane>
      </Tabs>
    );
  }
}

export default withRouter(GamesView);
