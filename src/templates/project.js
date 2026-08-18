import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import Seo from '../components/seo';
import Reveal from '../components/reveal';
import ProjectArt from '../components/project-art';
import { projects } from '../data/projects';

export default function ProjectTemplate({ pageContext }) {
  const project = projects.find((p) => p.slug === pageContext.slug);
  const next = projects.find((p) => p.slug === pageContext.nextSlug);

  return (
    <Layout>
      <article className="project">
        <header className="page-head">
          <Reveal>
            <p className="kicker">
              <Link to="/realizacje/">Realizacje</Link> / {project.categoryLabel}
            </p>
            <h1 className="page-head__title">{project.title}</h1>
          </Reveal>
          <Reveal delay={0.08}>
            <ul className="project__strip">
              <li>
                <span>Lokalizacja</span>
                {project.location}
              </li>
              <li>
                <span>Rok</span>
                {project.year}
              </li>
              <li>
                <span>Skala</span>
                {project.area}
              </li>
              <li>
                <span>Status</span>
                {project.status}
              </li>
            </ul>
          </Reveal>
        </header>

        <Reveal className="project__hero">
          <ProjectArt
            variant={project.variant}
            accent={project.accent}
            title={project.title}
            className="project__hero-art"
          />
        </Reveal>

        <div className="project__layout">
          <Reveal as="aside" className="project__facts" delay={0.05}>
            <h2 className="project__facts-title">Dane projektu</h2>
            <dl>
              {project.facts.map(([label, value]) => (
                <div key={label} className="project__fact">
                  <dt>{label}</dt>
                  <dd>{value}</dd>
                </div>
              ))}
              <div className="project__fact">
                <dt>Program</dt>
                <dd>{project.program}</dd>
              </div>
            </dl>
          </Reveal>

          <div className="project__content">
            <Reveal>
              <p className="project__lead">{project.excerpt}</p>
            </Reveal>
            {project.description.map((paragraph) => (
              <Reveal key={paragraph.slice(0, 24)} as="p" className="project__para">
                {paragraph}
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal className="next-project">
          <p className="kicker">Następny projekt</p>
          <Link to={`/realizacje/${next.slug}/`} className="next-project__link">
            <span className="next-project__title">{next.title} →</span>
            <span className="next-project__media">
              <ProjectArt
                variant={next.variant}
                accent={next.accent}
                title={next.title}
                className="next-project__art"
              />
            </span>
          </Link>
        </Reveal>
      </article>
    </Layout>
  );
}

export const Head = ({ pageContext }) => {
  const project = projects.find((p) => p.slug === pageContext.slug);
  return (
    <Seo
      title={project.title}
      description={project.excerpt}
      pathname={`/realizacje/${project.slug}/`}
    />
  );
};
