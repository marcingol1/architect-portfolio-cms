import React from 'react';
import { Link } from 'gatsby';

import HeaderLogo from '../../assets/header_logo.svg';

function MainNavigation() {
  return (
    <div className="container__sidebar">
      <div className="sidebar">
        <Link to="/">
          <div className="sidebar__intro">
            <HeaderLogo width="150" />
          </div>
        </Link>
        <ul className="sidebar__menu">
          <li>
            <Link to="/">Strona główna</Link>
          </li>
          <li>
            <Link to="/works">Realizacje</Link>
          </li>
          <li>
            <Link to="/contact">O mnie</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default MainNavigation;
