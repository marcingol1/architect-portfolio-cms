import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';

function Footer({ allDatoCmsSocialProfile, datoCmsHome, datoCmsAboutPage }) {
  return (
    <footer className="container__footer">
      <p className="footer__social">
        {allDatoCmsSocialProfile.edges.map(({ node: profile }) => (
          <a
            key={profile.profileType}
            href={profile.url}
            target="blank"
            className={`social social--${profile.profileType.toLowerCase()}`}
          >
            {' '}
          </a>
        ))}
      </p>
      <div className="footer__info">
        <div className="footer__logo">
          {datoCmsAboutPage.logoGallery.map((photo) => {
            return <Img fluid={photo.fluid} key={photo.fluid.src} />;
          })}
        </div>
        <div>{datoCmsAboutPage.logoText}</div>
      </div>
      <div className="footer__copyright">{datoCmsHome.copyright}</div>
    </footer>
  );
}

Footer.propTypes = {
  datoCmsHome: PropTypes.object,
  allDatoCmsSocialProfile: PropTypes.object,
};

export default Footer;
