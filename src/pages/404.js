import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import Seo from '../components/seo';

const NotFoundPage = () => (
  <Layout>
    <section className="not-found">
      <p className="kicker">Błąd 404</p>
      <h1 className="not-found__title">
        Ta strona nie została <em>zaprojektowana</em>.
      </h1>
      <p className="not-found__text">
        Adres nie istnieje albo został przeniesiony podczas przebudowy.
      </p>
      <div className="not-found__actions">
        <Link to="/" className="button">
          Strona główna
        </Link>
        <Link to="/realizacje/" className="not-found__link">
          Zobacz realizacje →
        </Link>
      </div>
    </section>
  </Layout>
);

export default NotFoundPage;

export const Head = () => <Seo title="404 — nie znaleziono strony" />;
