import React, { useState } from 'react';

import Layout from '../components/layout';
import Seo from '../components/seo';
import Reveal from '../components/reveal';
import ProjectCard from '../components/project-card';
import { projects, categories } from '../data/projects';

const RealizacjePage = () => {
  const [filter, setFilter] = useState('wszystkie');
  const visible =
    filter === 'wszystkie'
      ? projects
      : projects.filter((p) => p.category === filter);

  return (
    <Layout>
      <header className="page-head">
        <Reveal>
          <p className="kicker">Realizacje</p>
          <h1 className="page-head__title">
            {projects.length} projektów, jeden sposób myślenia.
          </h1>
        </Reveal>
        <Reveal delay={0.08}>
          <div
            className="filters"
            role="group"
            aria-label="Filtruj projekty według kategorii"
          >
            {categories.map((cat) => {
              const count =
                cat.key === 'wszystkie'
                  ? projects.length
                  : projects.filter((p) => p.category === cat.key).length;
              return (
                <button
                  key={cat.key}
                  className={`filters__button ${
                    filter === cat.key ? 'is-active' : ''
                  }`}
                  onClick={() => setFilter(cat.key)}
                  aria-pressed={filter === cat.key}
                >
                  {cat.label}
                  <sup className="filters__count">{count}</sup>
                </button>
              );
            })}
          </div>
        </Reveal>
      </header>

      <section className="works-grid" aria-live="polite">
        {visible.map((project, i) => (
          <Reveal key={project.slug} delay={(i % 2) * 0.06}>
            <ProjectCard project={project} index={projects.indexOf(project)} />
          </Reveal>
        ))}
      </section>
    </Layout>
  );
};

export default RealizacjePage;

export const Head = () => (
  <Seo
    title="Realizacje"
    description="Domy jednorodzinne, zespoły mieszkaniowe i obiekty użyteczności publicznej — wybrane realizacje pracowni."
    pathname="/realizacje/"
  />
);
