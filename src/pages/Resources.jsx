import React from 'react';

const resources = [
  { title: 'MDN Web Docs', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/MDN_Web_Docs.svg/240px-MDN_Web_Docs.svg.png', summary: 'The go-to reference for HTML, CSS, and JavaScript. Essential for any web developer.', link: 'https://developer.mozilla.org' },
  { title: 'React Documentation', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/240px-React-icon.svg.png', summary: 'Official React docs covering components, hooks, and best practices for building modern UIs.', link: 'https://react.dev' },
  { title: 'Docker Documentation', image: 'https://www.docker.com/wp-content/uploads/2022/03/Moby-logo.png', summary: 'Official Docker docs for containerization, Dockerfiles, and deployment pipelines.', link: 'https://docs.docker.com' },
  { title: 'GitHub Docs', image: 'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png', summary: 'Learn Git workflows, GitHub Actions CI/CD, pull requests, and version control best practices.', link: 'https://docs.github.com' },
  { title: 'Storybook', image: 'https://avatars.githubusercontent.com/u/22632046?s=200&v=4', summary: 'Tool for building and documenting UI components in isolation. Great for component-driven development.', link: 'https://storybook.js.org' },
  { title: 'CSS-Tricks', image: 'https://css-tricks.com/apple-touch-icon.png', summary: 'Articles, guides, and tips for CSS, flexbox, grid, and modern front-end techniques.', link: 'https://css-tricks.com' },
];

function Resources() {
  return (
    <div>
      <div className="page-header">
        <h1>Resources</h1>
        <div className="accent-line"></div>
        <p>My favourite learning resources, documentation, and tools I use regularly.</p>
      </div>
      <div className="resources-grid">
        {resources.map((resource) => (
          <div className="resource-card" key={resource.title}>
            <img src={resource.image} alt={resource.title} onError={(e) => { e.target.style.display = 'none'; }} />
            <h3>{resource.title}</h3>
            <p>{resource.summary}</p>
            <a href={resource.link} target="_blank" rel="noopener noreferrer">Visit →</a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Resources;
