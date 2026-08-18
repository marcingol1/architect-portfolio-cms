import React from 'react';

import Layout from '../components/layout';
import Seo from '../components/seo';
import Reveal from '../components/reveal';

const KontaktPage = () => (
  <Layout>
    <header className="page-head">
      <Reveal>
        <p className="kicker">Kontakt</p>
        <h1 className="page-head__title">
          Najlepsze projekty zaczynały się <em>od jednego maila</em>.
        </h1>
      </Reveal>
    </header>

    <section className="contact">
      <Reveal className="contact__details">
        <div className="contact__block">
          <h2 className="contact__heading">Napisz lub zadzwoń</h2>
          <p className="contact__big">
            <a href="mailto:pracownia@architektgol.pl">
              pracownia@architektgol.pl
            </a>
          </p>
          <p className="contact__big">
            <a href="tel:+48221234567">+48 22 123 45 67</a>
          </p>
        </div>
        <div className="contact__block">
          <h2 className="contact__heading">Pracownia</h2>
          <p>
            ul. Wspólna 12/4
            <br />
            00-680 Warszawa
            <br />
            pn–pt, 9:00–17:00 — po umówieniu
          </p>
        </div>
        <div className="contact__block">
          <h2 className="contact__heading">Zanim napiszesz</h2>
          <p>
            Najbardziej pomaga nam kilka zdań o&nbsp;działce (lokalizacja,
            wielkość), o&nbsp;tym, co ma powstać, oraz orientacyjny budżet.
            Odpowiadamy w&nbsp;ciągu dwóch dni roboczych.
          </p>
        </div>
      </Reveal>

      <Reveal className="contact__form-wrap" delay={0.08}>
        <form
          className="contact-form"
          name="kontakt"
          method="POST"
          data-netlify="true"
          netlify-honeypot="bot-field"
        >
          <input type="hidden" name="form-name" value="kontakt" />
          <p className="visually-hidden">
            <label>
              Nie wypełniaj tego pola: <input name="bot-field" />
            </label>
          </p>
          <div className="contact-form__field">
            <label htmlFor="cf-name">Imię i nazwisko</label>
            <input id="cf-name" name="name" type="text" required />
          </div>
          <div className="contact-form__field">
            <label htmlFor="cf-email">Adres e-mail</label>
            <input id="cf-email" name="email" type="email" required />
          </div>
          <div className="contact-form__field">
            <label htmlFor="cf-message">Kilka słów o projekcie</label>
            <textarea id="cf-message" name="message" rows="6" required />
          </div>
          <button type="submit" className="button">
            Wyślij wiadomość
          </button>
        </form>
      </Reveal>
    </section>
  </Layout>
);

export default KontaktPage;

export const Head = () => (
  <Seo
    title="Kontakt"
    description="Skontaktuj się z pracownią — pierwsza rozmowa o projekcie jest zawsze niezobowiązująca."
    pathname="/kontakt/"
  />
);
