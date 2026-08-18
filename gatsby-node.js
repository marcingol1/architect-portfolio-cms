const path = require(`path`);
const { projects } = require(`./src/data/projects`);

exports.createPages = ({ actions }) => {
  const { createPage } = actions;

  projects.forEach((project, index) => {
    const next = projects[(index + 1) % projects.length];
    createPage({
      path: `/realizacje/${project.slug}/`,
      component: path.resolve(`./src/templates/project.js`),
      context: {
        slug: project.slug,
        nextSlug: next.slug,
      },
    });
  });
};
