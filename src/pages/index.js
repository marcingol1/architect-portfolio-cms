import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import Seo from '../components/seo';
import Reveal from '../components/reveal';
import ProjectArt from '../components/project-art';
import Marquee from '../components/marquee';
import { projects } from '../data/projects';

const SERVICES = [
  {
    title: 'Koncepcja',
    text: 'Analiza miejsca, program, pierwsze szkice. Etap, na którym zapada dziewięćdziesiąt procent decyzji o tym, jaki będzie dom.',
  },
  {
    title: 'Projekt budowlany i wykonawczy',
    text: 'Kompletna dokumentacja z pozwoleniem na budowę, skoordynowana ze wszystkimi branżami — bez niespodzianek na budowie.',
  },
  {
    title: 'Wnętrza',
    text: 'Projektujemy wnętrza razem z bryłą, nie po niej. Ten sam język materiałów od elewacji po klamkę.',
  },
  {
    title: 'Nadzór autorski',
    text: 'Jesteśmy na budowie do końca. Projekt kończy się odbiorem kluczy, nie oddaniem rysunków.',
  },
];

const IndexPage = () => {
  const featured = projects.filter((p) => p.featured);
  const hero = featured[0];

  return (
    <Layout>
      <section className="hero">
        <div className="hero__inner">
          <Reveal>
            <p className="kicker">Pracownia architektury — Warszawa</p>
            <h1 className="hero__title">
              Architektura zaczyna się <em>od miejsca</em>, nie od formy.
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="hero__meta">
              <p className="hero__lead">
                Projektujemy domy, zespoły mieszkaniowe i&nbsp;obiekty publiczne,
                które porządkują przestrzeń zamiast z&nbsp;nią konkurować — od
                pierwszego szkicu po nadzór na budowie.
              </p>
              <dl className="hero__stats">
                <div>
                  <dt>Lat praktyki</dt>
                  <dd>14</dd>
                </div>
                <div>
                  <dt>Zrealizowanych projektów</dt>
                  <dd>40+</dd>
                </div>
                <div>
                  <dt>Nagród i wyróżnień</dt>
                  <dd>6</dd>
                </div>
              </dl>
            </div>
          </Reveal>
        </div>
        <Reveal className="hero__media" delay={0.15}>
          <Link to={`/realizacje/${hero.slug}/`} className="hero__media-link">
            <ProjectArt
              variant={hero.variant}
              accent={hero.accent}
              title={hero.title}
              className="hero__art"
            />
            <span className="hero__media-caption">
              <span>{hero.title}</span>
              <span>
                {hero.location}, {hero.year} →
              </span>
            </span>
          </Link>
        </Reveal>
      </section>

      <section className="section">
        <Reveal className="section__head">
          <h2 className="section__title">Wybrane realizacje</h2>
          <Link to="/realizacje/" className="arrow-link">
            Wszystkie projekty
          </Link>
        </Reveal>
        <div className="feature-list">
          {featured.map((project, i) => (
            <Reveal key={project.slug} className="feature" delay={0.05}>
              <Link
                to={`/realizacje/${project.slug}/`}
                className={`feature__inner ${
                  i % 2 ? 'feature__inner--flip' : ''
                }`}
              >
                <div className="feature__media">
                  <ProjectArt
                    variant={project.variant}
                    accent={project.accent}
                    title={project.title}
                    className="feature__art"
                  />
                </div>
                <div className="feature__body">
                  <span className="feature__index">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h3 className="feature__title">{project.title}</h3>
                  <p className="feature__meta">
                    {project.categoryLabel} · {project.location} · {project.year}
                  </p>
                  <p className="feature__excerpt">{project.excerpt}</p>
                  <span className="arrow-link">Zobacz projekt</span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <Marquee
        items={[
          'Domy jednorodzinne',
          'Zespoły mieszkaniowe',
          'Użyteczność publiczna',
          'Konkursy',
          'Wnętrza',
          'Nadzór autorski',
        ]}
      />

      <section className="manifest" id="pracownia">
        <Reveal>
          <p className="kicker kicker--light">Manifest</p>
          <blockquote className="manifest__quote">
            Dobry budynek nie krzyczy. Stoi we właściwym miejscu, jest zbudowany
            z&nbsp;trzech materiałów zamiast trzynastu i&nbsp;za pięćdziesiąt lat
            będzie wyglądał lepiej niż w&nbsp;dniu odbioru.
          </blockquote>
          <Link to="/pracownia/" className="arrow-link arrow-link--light">
            Poznaj pracownię
          </Link>
        </Reveal>
      </section>

      <section className="section">
        <Reveal className="section__head">
          <h2 className="section__title">Zakres pracy</h2>
        </Reveal>
        <div className="services">
          {SERVICES.map((service, i) => (
            <Reveal key={service.title} className="service" delay={i * 0.05}>
              <span className="service__index">
                {String(i + 1).padStart(2, '0')}
              </span>
              <h3 className="service__title">{service.title}</h3>
              <p className="service__text">{service.text}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="cta-band">
        <Reveal>
          <h2 className="cta-band__title">
            Masz działkę i&nbsp;pomysł?
            <br />
            <em>Porozmawiajmy.</em>
          </h2>
          <Link to="/kontakt/" className="button">
            Umów rozmowę
          </Link>
        </Reveal>
      </section>
    </Layout>
  );
};

export default IndexPage;

export const Head = () => <Seo pathname="/" />;
