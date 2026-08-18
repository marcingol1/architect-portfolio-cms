import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

import '@fontsource/space-grotesk/400.css';
import '@fontsource/space-grotesk/500.css';
import '@fontsource/space-grotesk/700.css';
import '@fontsource/inter/400.css';
import '@fontsource/inter/500.css';

import '../styles/main.scss';
import HeaderLogo from '../assets/header_logo.svg';

const NAV_LINKS = [
  { to: '/realizacje/', label: 'Realizacje' },
  { to: '/pracownia/', label: 'Pracownia' },
  { to: '/kontakt/', label: 'Kontakt' },
];

function Layout({ children }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className={`site ${menuOpen ? 'site--menu-open' : ''}`}>
      <a className="skip-link" href="#tresc">
        Przejdź do treści
      </a>

      <header className="topbar">
        <Link
          to="/"
          className="topbar__brand"
          aria-label="Anna Gol — strona główna"
          onClick={() => setMenuOpen(false)}
        >
          <HeaderLogo className="topbar__logo" />
        </Link>

        <nav className="topbar__nav" aria-label="Nawigacja główna">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="topbar__link"
              activeClassName="is-active"
              partiallyActive
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <button
          className="topbar__burger"
          aria-expanded={menuOpen}
          aria-label={menuOpen ? 'Zamknij menu' : 'Otwórz menu'}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span />
          <span />
        </button>
      </header>

      <div className="mobile-menu" aria-hidden={!menuOpen}>
        <nav aria-label="Nawigacja mobilna">
          {NAV_LINKS.map((link, i) => (
            <Link
              key={link.to}
              to={link.to}
              className="mobile-menu__link"
              style={{ transitionDelay: `${0.05 + i * 0.06}s` }}
              onClick={() => setMenuOpen(false)}
              tabIndex={menuOpen ? 0 : -1}
            >
              <span className="mobile-menu__index">0{i + 1}</span>
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="mobile-menu__meta">
          <a href="mailto:pracownia@architektgol.pl" tabIndex={menuOpen ? 0 : -1}>
            pracownia@architektgol.pl
          </a>
        </div>
      </div>

      <main id="tresc" className="site__main">
        {children}
      </main>

      <footer className="footer">
        <div className="footer__inner">
          <div className="footer__brand">
            <p className="footer__wordmark">Anna Gol</p>
            <p className="footer__tagline">Pracownia Architektury</p>
          </div>

          <div className="footer__columns">
            <div className="footer__col">
              <h3 className="footer__heading">Pracownia</h3>
              <p>
                ul. Wspólna 12/4
                <br />
                00-680 Warszawa
              </p>
            </div>
            <div className="footer__col">
              <h3 className="footer__heading">Kontakt</h3>
              <p>
                <a href="mailto:pracownia@architektgol.pl">
                  pracownia@architektgol.pl
                </a>
                <br />
                <a href="tel:+48221234567">+48 22 123 45 67</a>
              </p>
            </div>
            <div className="footer__col">
              <h3 className="footer__heading">Obserwuj</h3>
              <p>
                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Instagram
                </a>
                <br />
                <a
                  href="https://www.linkedin.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="footer__bottom">
          <span>© {new Date().getFullYear()} Anna Gol. Wszelkie prawa zastrzeżone.</span>
          <span className="footer__coords">52°13′47″N 21°00′42″E</span>
        </div>
      </footer>
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node,
};

export default Layout;
