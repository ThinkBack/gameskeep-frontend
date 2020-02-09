import React from 'react';
import { NavLink } from 'react-router-dom';

import './navbar.scss';

class NavBar extends React.Component {
  render() {
    return (
      <nav className="navbar">
        <ul className="navbar__ul">
          <li className="navbar__li">
            <NavLink
              to="/pending"
              className="navbar__link"
              activeClassName="navbar__link--enabled"
            >
              Pending
            </NavLink>
          </li>
          <li className="navbar__li">
            <NavLink
              to="/playing"
              className="navbar__link"
              activeClassName="navbar__link--enabled"
            >
              Playing
            </NavLink>
          </li>
          <li className="navbar__li">
            <NavLink
              to="/finished"
              className="navbar__link"
              activeClassName="navbar__link--enabled"
            >
              Finished
            </NavLink>
          </li>
        </ul>
      </nav>
    );
  }
}

export default NavBar;
