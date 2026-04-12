import React from 'react';

function DeveloperSetup() {
  return (
    <div>
      <div className="page-header">
        <h1>Developer Setup</h1>
        <div className="accent-line"></div>
        <p>My personal development environment and preferred tools.</p>
      </div>

      <div className="card setup-section">
        <h2>VS Code Setup</h2>
        {[
          {
            icon: '🎨',
            title: 'Theme',
            desc: 'One Dark Pro — easy on the eyes during long coding sessions',
          },
          {
            icon: '📦',
            title: 'Extensions',
            desc: 'ESLint, Prettier, GitLens, Docker, Bracket Pair Colorizer, Auto Rename Tag',
          },
          {
            icon: '⚙️',
            title: 'Settings',
            desc: 'Format on save enabled, Prettier as default formatter',
          },
          {
            icon: '🔍',
            title: 'IntelliSense',
            desc: 'Full JavaScript and React IntelliSense with path auto-complete',
          },
        ].map((item) => (
          <div className="setup-item" key={item.title}>
            <span className="setup-icon">{item.icon}</span>
            <div>
              <h4>{item.title}</h4>
              <p>{item.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="card setup-section">
        <h2>Terminal Setup</h2>
        {[
          {
            icon: '💻',
            title: 'Terminal',
            desc: 'iTerm2 on macOS — faster and more customizable than the default terminal',
          },
          {
            icon: '🐚',
            title: 'Shell',
            desc: 'Zsh with Oh My Zsh for plugins and themes',
          },
          {
            icon: '🌿',
            title: 'Git Aliases',
            desc: 'Shortcuts like gs for git status, gc for git commit, gp for git push',
          },
          {
            icon: '📁',
            title: 'Node Version Manager',
            desc: 'nvm for managing multiple Node.js versions across projects',
          },
        ].map((item) => (
          <div className="setup-item" key={item.title}>
            <span className="setup-icon">{item.icon}</span>
            <div>
              <h4>{item.title}</h4>
              <p>{item.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="card setup-section">
        <h2>Preferred Editor Font</h2>
        {[
          {
            icon: '✍️',
            title: 'Fira Code',
            desc: 'Monospace font with ligatures — makes arrow functions look clean',
          },
          {
            icon: '📏',
            title: 'Font Size',
            desc: '14px in editor, 13px in terminal',
          },
          {
            icon: '↔️',
            title: 'Line Height',
            desc: '1.6 — comfortable breathing room between lines',
          },
          {
            icon: '📐',
            title: 'Tab Size',
            desc: '2 spaces — standard for JavaScript and React projects',
          },
        ].map((item) => (
          <div className="setup-item" key={item.title}>
            <span className="setup-icon">{item.icon}</span>
            <div>
              <h4>{item.title}</h4>
              <p>{item.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="card setup-section">
        <h2>Development Stack</h2>
        {[
          {
            icon: '⚛️',
            title: 'React',
            desc: 'Frontend framework for building component-based UIs',
          },
          {
            icon: '🐳',
            title: 'Docker',
            desc: 'Containerization for consistent environments and easy deployment',
          },
          {
            icon: '🔁',
            title: 'GitHub Actions',
            desc: 'CI/CD pipeline for automated testing, linting, and deployment',
          },
          {
            icon: '🧹',
            title: 'ESLint + Prettier + Husky',
            desc: 'Code quality tools with pre-commit hooks to keep code clean',
          },
        ].map((item) => (
          <div className="setup-item" key={item.title}>
            <span className="setup-icon">{item.icon}</span>
            <div>
              <h4>{item.title}</h4>
              <p>{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DeveloperSetup;
