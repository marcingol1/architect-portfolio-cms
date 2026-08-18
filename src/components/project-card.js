import React from 'react';
import { Link } from 'gatsby';
import ProjectArt from './project-art';

function ProjectCard({ project, index }) {
  return (
    <Link to={`/realizacje/${project.slug}/`} className="project-card">
      <div className="project-card__media">
        <ProjectArt
          variant={project.variant}
          accent={project.accent}
          title={project.title}
          className="project-card__art"
        />
      </div>
      <div className="project-card__body">
        <div className="project-card__row">
          <span className="project-card__index">
            {String(index + 1).padStart(2, '0')}
          </span>
          <h3 className="project-card__title">{project.title}</h3>
          <span className="project-card__year">{project.year}</span>
        </div>
        <p className="project-card__meta">
          {project.categoryLabel} · {project.location}
        </p>
      </div>
    </Link>
  );
}

export default ProjectCard;
