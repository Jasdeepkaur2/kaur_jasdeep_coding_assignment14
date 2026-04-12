import React from 'react';

function BasicInfo() {
  return (
    <div>
      <div className="hero">
        <div className="hero-avatar">JK</div>
        <div className="hero-text">
          <h1>Jasdeep Kaur</h1>
          <div className="role">Full Stack Web Development Student</div>
          <p>
            IT professional with expertise in Microsoft 365, enterprise system
            support, and client relationship management. Currently completing a
            Full Stack Web Development diploma at Red River College Polytechnic.
          </p>
          <div className="contact-chips">
            <span className="chip">📍 Winnipeg, MB</span>
            <span className="chip">📧 jasdeepk.1327@gmail.com</span>
            <span className="chip">📞 +1 (431) 293-1813</span>
            <span className="chip">🎓 Red River College Polytechnic</span>
          </div>
        </div>
      </div>

      <div className="card">
        <div className="page-header">
          <h1>Experience</h1>
          <div className="accent-line"></div>
        </div>
        {[
          {
            title: 'Product Demonstrator',
            company: 'CDS [Costco] · Winnipeg, MB',
            date: 'September 2025 – Present',
            points: [
              'Demonstrate products and explain features and benefits to customers.',
              'Recommend products based on customer needs and preferences.',
              'Monitor stock levels and maintain demo stations following safety standards.',
            ],
          },
          {
            title: 'Logistics Co-Ordinator',
            company: 'MoveMile Transport Ltd · Winnipeg, MB',
            date: 'Nov 2024 – Jan 2025',
            points: [
              'Resolved time-sensitive service incidents, upsurging profits by 22% — earning Employee of the Season.',
              'Analyzed system and load databases, improving utilization efficiency by 22%.',
              'Trained new hires on operational systems and compliance tools.',
            ],
          },
          {
            title: 'Dispatcher',
            company: 'INS Transport Ltd · Winnipeg, MB',
            date: 'August 2024 – September 2025',
            points: [
              'Used cloud-based logistics platforms to maintain 98%+ on-time service reliability.',
              'Collaborated with teams using Microsoft 365, Outlook, Teams, and SharePoint.',
              'Ensured 100% compliance with ACE & ACI e-Manifest systems.',
            ],
          },
          {
            title: 'Admissions Counselor',
            company: 'HIMT College · Winnipeg, MB',
            date: 'March 2024 – July 2024',
            points: [
              'Increased student applications by 32% in one semester through targeted recruitment strategies.',
              'Maintained structured applicant database, accelerating review cycles.',
            ],
          },
        ].map((job) => (
          <div
            key={job.title}
            style={{
              marginBottom: '1.5rem',
              paddingBottom: '1.5rem',
              borderBottom: '1px solid #f0f0f0',
            }}
          >
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                marginBottom: '0.3rem',
              }}
            >
              <h3 style={{ color: '#1a1a2e', fontSize: '1rem' }}>
                {job.title}
              </h3>
              <span style={{ color: '#e94560', fontSize: '0.85rem' }}>
                {job.date}
              </span>
            </div>
            <p
              style={{
                color: '#888',
                fontSize: '0.85rem',
                marginBottom: '0.5rem',
              }}
            >
              {job.company}
            </p>
            <ul style={{ paddingLeft: '1.2rem' }}>
              {job.points.map((p, i) => (
                <li
                  key={i}
                  style={{
                    color: '#555',
                    fontSize: '0.9rem',
                    lineHeight: '1.6',
                    marginBottom: '0.2rem',
                  }}
                >
                  {p}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="card">
        <div className="page-header">
          <h1>Education</h1>
          <div className="accent-line"></div>
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            marginBottom: '1rem',
          }}
        >
          <div>
            <h3 style={{ color: '#1a1a2e' }}>Full Stack Web Development</h3>
            <p style={{ color: '#888', fontSize: '0.9rem' }}>
              Red River College Polytechnic
            </p>
          </div>
          <span style={{ color: '#e94560', fontSize: '0.85rem' }}>
            Projected Graduation: Fall 2026
          </span>
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
          }}
        >
          <div>
            <h3 style={{ color: '#1a1a2e' }}>
              Diploma – Microsoft Office Automation & Computer Programming
            </h3>
            <p style={{ color: '#888', fontSize: '0.9rem' }}>
              A+ National Institute of Computer Education, India
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BasicInfo;
