import React from 'react';

import { List, Card } from 'antd';

import './games-list.scss';

const games = [...Array(100).keys()].map(e => ({ title: `Game ${e}` }));

class GamesList extends React.Component {
  render() {
    return (
      <div className="games-list">
        <List
          className="games-list"
          grid={{
            gutter: 16,
            xs: 1,
            sm: 2,
            md: 4,
            lg: 4,
            xl: 6,
            xxl: 6,
          }}
          dataSource={games}
          renderItem={item => (
            <List.Item>
              <Card title={item.title}>Card content</Card>
            </List.Item>
          )}
        />
      </div>
    );
  }
}

export default GamesList;
