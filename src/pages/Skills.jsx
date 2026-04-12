import React from 'react';

const skillSections = [
  {
    category: 'Languages & Frameworks',
    skills: [
      'JavaScript',
      'React',
      'HTML5',
      'CSS3',
      'Node.js',
      'Express.js',
      'SQL',
    ],
  },
  {
    category: 'Tools & DevOps',
    skills: [
      'Docker',
      'Git',
      'GitHub',
      'GitHub Actions',
      'ESLint',
      'Prettier',
      'Husky',
      'Storybook',
      'Nginx',
      'VS Code',
    ],
  },
  {
    category: 'Microsoft Ecosystem',
    skills: [
      'Microsoft 365',
      'SharePoint',
      'Teams',
      'Outlook',
      'Office Automation',
    ],
  },
  {
    category: 'Database',
    skills: [
      'SQL',
      'Relational Database Design',
      'Database Management',
      'Schema Architecture',
    ],
  },
  {
    category: 'Professional Skills',
    skills: [
      'Account Management',
      'Client Relationship Management',
      'Cross-functional Coordination',
      'Technical Documentation',
    ],
  },
  {
    category: 'Strengths',
    skills: [
      'Attention to Detail',
      'Fast Turnaround Under Pressure',
      'Analytical Thinking',
      'Strong Communication',
    ],
  },
];

function Skills() {
  return (
    <div>
      <div className="page-header">
        <h1>Skills</h1>
        <div className="accent-line"></div>
        <p>
          Technologies, tools, and competencies developed through my program and
          professional experience.
        </p>
      </div>
      <div className="skills-grid">
        {skillSections.map((section) => (
          <div className="card skill-category" key={section.category}>
            <h3>{section.category}</h3>
            <div className="skill-tags">
              {section.skills.map((skill) => (
                <span className="tag" key={skill}>
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
