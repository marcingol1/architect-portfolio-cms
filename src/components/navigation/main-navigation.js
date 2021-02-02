import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';

function MainNavigation({ datoCmsSite, datoCmsHome, allDatoCmsSocialProfile }) {
  return (
    <div className="container__sidebar">
      <div className="sidebar">
        <h6 className="sidebar__title">
          <Link to="/">{datoCmsSite.globalSeo.siteName}</Link>
        </h6>
        <div
          className="sidebar__intro"
          dangerouslySetInnerHTML={{
            __html: datoCmsHome.introTextNode.childMarkdownRemark.html,
          }}
        />
        <ul className="sidebar__menu">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

MainNavigation.propTypes = {
  datoCmsSite: PropTypes.object,
  allDatoCmsSocialProfile: PropTypes.object,
  datoCmsHome: PropTypes.object,
};

export default MainNavigation;
