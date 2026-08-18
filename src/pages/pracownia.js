import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import Seo from '../components/seo';
import Reveal from '../components/reveal';

const PROCESS = [
  {
    title: 'Rozmowa i miejsce',
    text: 'Zaczynamy od wizyty na działce i długiej rozmowy — o tym, jak mieszkacie, a nie o tym, ile pokoi ma mieć dom. Z tego etapu wychodzi program, budżet i harmonogram.',
  },
  {
    title: 'Koncepcja',
    text: 'Dwie–trzy drogi projektowe pokazane na makietach i szkicach, nie na renderach. Wybieramy jedną i doprowadzamy ją do decyzji o pozwoleniu.',
  },
  {
    title: 'Dokumentacja',
    text: 'Projekt budowlany i wykonawczy skoordynowany ze wszystkimi branżami. Każdy detal, który zobaczycie w domu, jest wcześniej narysowany.',
  },
  {
    title: 'Budowa',
    text: 'Nadzór autorski od wbicia łopaty po odbiór. Jesteśmy na budowie co tydzień — projekt kończy się kluczami w Waszej ręce.',
  },
];

const AWARDS = [
  ['2023', 'Nagroda Roku SARP — nominacja, Muzeum Rzemiosła'],
  ['2022', 'Property Design Awards — najlepszy budynek mieszkalny, Tarasy Nadodrze'],
  ['2020', 'Architektura-murator — Dom Roku, wyróżnienie, Stodoła Mazury'],
  ['2019', 'I nagroda w konkursie SARP na zespół mieszkaniowy Nadodrze'],
  ['2018', 'I nagroda w konkursie na Muzeum Rzemiosła w Krakowie'],
];

const PracowniaPage = () => (
  <Layout>
    <header className="page-head">
      <Reveal>
        <p className="kicker">Pracownia</p>
        <h1 className="page-head__title">
          Mała pracownia, <em>duża uwaga</em> do każdego projektu.
        </h1>
      </Reveal>
    </header>

    <section className="about">
      <Reveal className="about__intro">
        <p>
          Pracownię prowadzi architektka Anna Gol — od 2011 roku, najpierw
          w&nbsp;pojedynkę, dziś w&nbsp;pięcioosobowym zespole. Prowadzimy
          równolegle najwyżej sześć projektów, bo tylko wtedy każdy z&nbsp;nich
          dostaje tyle uwagi, ile wymaga.
        </p>
        <p>
          Nie mamy stylu, który powielamy — mamy metodę. Każdy projekt zaczyna
          się od miejsca: nasłonecznienia, sąsiedztwa, tego, co na działce już
          rośnie. Forma jest odpowiedzią, nigdy punktem wyjścia. Stąd w&nbsp;naszym
          portfolio czarna stodoła nad jeziorem stoi obok betonowego muzeum
          — i&nbsp;oba budynki są nasze.
        </p>
      </Reveal>

      <Reveal className="about__values" delay={0.08}>
        <ul>
          <li>
            <strong>Trzy materiały, nie trzynaście.</strong> Ograniczenie palety
            to najtańszy sposób na spokój i trwałość architektury.
          </li>
          <li>
            <strong>Detal rysujemy, nie obiecujemy.</strong> Jeśli czegoś nie ma
            na rysunku wykonawczym, na budowie tego nie będzie.
          </li>
          <li>
            <strong>Budynek ma się starzeć z godnością.</strong> Projektujemy
            na dekady — z materiałów, które pięknieją, a nie niszczeją.
          </li>
        </ul>
      </Reveal>
    </section>

    <section className="section">
      <Reveal className="section__head">
        <h2 className="section__title">Jak pracujemy</h2>
      </Reveal>
      <div className="services">
        {PROCESS.map((step, i) => (
          <Reveal key={step.title} className="service" delay={i * 0.05}>
            <span className="service__index">{String(i + 1).padStart(2, '0')}</span>
            <h3 className="service__title">{step.title}</h3>
            <p className="service__text">{step.text}</p>
          </Reveal>
        ))}
      </div>
    </section>

    <section className="section">
      <Reveal className="section__head">
        <h2 className="section__title">Nagrody i wyróżnienia</h2>
      </Reveal>
      <Reveal>
        <ul className="awards">
          {AWARDS.map(([year, text]) => (
            <li key={text} className="awards__item">
              <span className="awards__year">{year}</span>
              <span>{text}</span>
            </li>
          ))}
        </ul>
      </Reveal>
    </section>

    <section className="cta-band">
      <Reveal>
        <h2 className="cta-band__title">
          Zobacz, jak ta metoda
          <br />
          wygląda <em>w praktyce</em>.
        </h2>
        <Link to="/realizacje/" className="button">
          Przejdź do realizacji
        </Link>
      </Reveal>
    </section>
  </Layout>
);

export default PracowniaPage;

export const Head = () => (
  <Seo
    title="Pracownia"
    description="Autorska pracownia architektoniczna Anny Gol — metoda pracy, zespół, nagrody."
    pathname="/pracownia/"
  />
);
