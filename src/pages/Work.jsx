import React from 'react';

const projects = [
  { title: 'Artscope – Content Management System', description: 'A full-stack CMS with backend functionality, relational database integration, and dynamic content management. Features user authentication, file uploading, and role-based access control.', image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&q=80', link: 'https://github.com/jasdeepkaur2', tech: ['Node.js', 'SQL', 'Express', 'HTML', 'CSS', 'JavaScript'] },
  { title: 'Portfolio Website', description: 'A multi-page React portfolio site dockerized and served via nginx. Built with Create React App, ESLint, Prettier, Husky, and deployed using a CI/CD pipeline with GitHub Actions.', image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?w=600&q=80', link: 'https://github.com/jasdeepkaur2/kaur_jasdeep_coding_assignment14', tech: ['React', 'Docker', 'Nginx', 'GitHub Actions', 'ESLint', 'Prettier'] },
  { title: 'Component Library', description: 'A reusable React component library built with Storybook. Includes documented UI components with stories, unit tests, and automated linting integrated into the development workflow.', image: 'https://images.unsplash.com/photo-1593720219276-0b1eacd0aef4?w=600&q=80', link: 'https://github.com/jasdeepkaur2', tech: ['React', 'Storybook', 'Jest', 'Husky', 'ESLint'] },
  { title: 'Database-Driven Web Application', description: 'A web application with relational database integration, demonstrating SQL query design, schema architecture, and full-stack data flow from frontend to backend.', image: 'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=600&q=80', link: 'https://github.com/jasdeepkaur2', tech: ['SQL', 'JavaScript', 'Node.js', 'HTML', 'CSS'] },
];

function Work() {
  return (
    <div>
      <div className="page-header">
        <h1>My Work</h1>
        <div className="accent-line"></div>
        <p>Projects built throughout my Full Stack Web Development program at Red River College Polytechnic.</p>
      </div>
      <div className="work-grid">
        {projects.map((project) => (
          <div className="work-card" key={project.title}>
            <img src={project.image} alt={project.title} />
            <div className="work-card-body">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="tech-list">
                {project.tech.map((t) => (<span className="tag blue" key={t}>{t}</span>))}
              </div>
              <a href={project.link} target="_blank" rel="noopener noreferrer">View on GitHub →</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Work;
