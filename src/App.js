import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import BasicInfo from './pages/BasicInfo';
import Work from './pages/Work';
import Skills from './pages/Skills';
import Resources from './pages/Resources';
import DeveloperSetup from './pages/DeveloperSetup';
import './App.css';

function Navbar() {
  const location = useLocation();
  return (
    <nav className="navbar">
      <div className="nav-brand">Jasdeep Kaur</div>
      <ul className="nav-links">
        {[
          { path: '/', label: 'About' },
          { path: '/work', label: 'Work' },
          { path: '/skills', label: 'Skills' },
          { path: '/resources', label: 'Resources' },
          { path: '/setup', label: 'Dev Setup' },
        ].map(({ path, label }) => (
          <li key={path}>
            <Link to={path} className={location.pathname === path ? 'active' : ''}>{label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<BasicInfo />} />
            <Route path="/work" element={<Work />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/setup" element={<DeveloperSetup />} />
          </Routes>
        </main>
        <footer className="footer">
          <p>© 2026 Jasdeep Kaur · Red River College Polytechnic</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
