import React from 'react';

import SearchBar from '../search/search.jsx';
import NavBar from '../navbar/navbar.jsx';

import { Switch, Route, Redirect } from 'react-router-dom';

import './layout.scss';

class Layout extends React.Component {
  render() {
    return (
      <div className="grid-container">
        <div className="grid-container__sidebar"></div>
        <div className="grid-container__header">
          <SearchBar />
        </div>
        <div className="grid-container__navbar">
          <NavBar />
        </div>
        <div className="grid-container__body">
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
        </div>
      </div>
    );
  }
}

export default Layout;
