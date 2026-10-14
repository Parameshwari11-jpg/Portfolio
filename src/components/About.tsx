import React from 'react';
import { personalInfo } from '../data/portfolio';
import { GraduationCap, Layers, Cpu, Users, BookOpen, CheckCircle2, Code, Briefcase, FolderGit2 } from 'lucide-react';
import { AnimatedCounter } from './AnimatedCounter';
import { TiltCard } from './TiltCard';

export const About: React.FC = () => {
  const pillars = [
    {
      icon: <Layers size={22} color="var(--accent-light)" />,
      title: 'Full-Stack Web Development',
      description: 'Building end-to-end applications using the MERN stack (MongoDB, Express, React, Node.js) with clean component architecture and RESTful APIs.'
    },
    {
      icon: <Cpu size={22} color="var(--accent-secondary-light)" />,
      title: 'Core Software & Java',
      description: 'Solid foundation in Object-Oriented Programming (OOP) in Java, C, and C++, with a strong emphasis on clean code, modular structure, and maintainability.'
    },
    {
      icon: <CheckCircle2 size={22} color="var(--accent-secondary)" />,
      title: 'Document Accessibility & Workflows',
      description: 'Practical industry exposure to digital document remediation, PDF/Word accessibility standards (WCAG), reading order verification, and OCR extraction.'
    },
    {
      icon: <Users size={22} color="var(--accent-highlight)" />,
      title: 'Leadership & Community',
      description: 'Serving as SDE Treasurer at Karpagam College of Engineering, helping organize coding sessions, tech workshops, and student peer learning activities.'
    }
  ];

  const stats = [
    {
      icon: <Code size={20} color="var(--accent-light)" />,
      target: 500,
      suffix: '+',
      label: 'LeetCode Problems Solved',
      desc: 'Consistent algorithmic practice'
    },
    {
      icon: <Briefcase size={20} color="var(--accent-secondary-light)" />,
      target: 2,
      suffix: '',
      label: 'Industry Internships',
      desc: 'Hudsmer &amp; InternPe'
    },
    {
      icon: <FolderGit2 size={20} color="var(--accent-highlight)" />,
      target: 5,
      suffix: '+',
      label: 'Core Projects Built',
      desc: 'Full-Stack &amp; Systems'
    },
    {
      icon: <GraduationCap size={20} color="#10b981" />,
      target: 2027,
      suffix: '',
      label: 'Graduation Year',
      desc: 'B.E. CSE @ KCE'
    }
  ];

  return (
    <section id="about" className="section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <BookOpen size={14} />
            <span>Background &amp; Journey</span>
          </div>
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">
            An engineering student dedicated to software engineering, practical development, and continuous technical growth.
          </p>
        </div>

        {/* Animated Key Metrics Banner with 3D Tilt */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '1.25rem',
            marginBottom: '2.5rem'
          }}
        >
          {stats.map((stat, idx) => (
            <TiltCard key={idx} maxTilt={5} scale={1.02}>
              <div 
                className="glass-card"
                style={{
                  padding: '1.4rem 1.25rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  border: '1px solid var(--border-card)',
                  height: '100%'
                }}
              >
                <div 
                  style={{
                    padding: '0.75rem',
                    borderRadius: 'var(--radius-md)',
                    background: 'var(--bg-input)',
                    border: '1px solid var(--border-subtle)',
                    display: 'flex'
                  }}
                >
                  {stat.icon}
                </div>
                <div>
                  <div 
                    style={{
                      fontSize: '1.75rem',
                      fontWeight: 800,
                      color: 'var(--text-contrast)',
                      lineHeight: 1.1,
                      letterSpacing: '-0.02em'
                    }}
                  >
                    <AnimatedCounter target={stat.target} suffix={stat.suffix} />
                  </div>
                  <div style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-main)', marginTop: '0.2rem' }}>
                    {stat.label}
                  </div>
                  <div 
                    style={{ fontSize: '0.725rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}
                    dangerouslySetInnerHTML={{ __html: stat.desc }}
                  />
                </div>
              </div>
            </TiltCard>
          ))}
        </div>

        {/* Content Layout */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: '1.1fr 0.9fr',
            gap: '2.5rem',
            alignItems: 'start',
            marginBottom: '3rem'
          }}
          className="about-grid"
        >
          {/* Left Column: Narrative paragraphs */}
          <TiltCard maxTilt={3} scale={1.01}>
            <div className="glass-card" style={{ padding: '2.5rem 2rem', height: '100%' }}>
              <h3 style={{ fontSize: '1.4rem', fontWeight: 700, color: 'var(--text-contrast)', marginBottom: '1.25rem' }}>
                Building Solutions with Purpose &amp; Precision
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.15rem' }}>
                {personalInfo.bioFull.map((paragraph, index) => (
                  <p 
                    key={index} 
                    style={{ 
                      fontSize: '0.98rem', 
                      color: 'var(--text-secondary)', 
                      lineHeight: 1.7 
                    }}
                  >
                    {paragraph}
                  </p>
                ))}
              </div>

              <div 
                style={{
                  marginTop: '2rem',
                  paddingTop: '1.5rem',
                  borderTop: '1px solid var(--border-subtle)',
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '0.75rem'
                }}
              >
                <span className="badge">Problem Solver</span>
                <span className="badge">Full-Stack Dev</span>
                <span className="badge">WCAG Accessibility</span>
                <span className="badge">Team Collaborator</span>
              </div>
            </div>
          </TiltCard>

          {/* Right Column: Education & Pillars */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {/* Education Card */}
            <TiltCard maxTilt={4} scale={1.015}>
              <div 
                className="glass-card" 
                style={{ 
                  padding: '1.85rem 1.65rem',
                  borderLeft: '4px solid var(--accent-primary)'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                  <div 
                    style={{
                      padding: '0.75rem',
                      borderRadius: 'var(--radius-md)',
                      background: 'var(--badge-bg)',
                      color: 'var(--accent-light)'
                    }}
                  >
                    <GraduationCap size={26} />
                  </div>
                  <div>
                    <span className="badge" style={{ fontSize: '0.75rem', marginBottom: '0.5rem' }}>
                      Higher Education
                    </span>
                    <h4 style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--text-contrast)', marginTop: '0.25rem' }}>
                      {personalInfo.degree}
                    </h4>
                    <p style={{ fontSize: '0.95rem', color: 'var(--text-main)', marginTop: '0.2rem', fontWeight: 500 }}>
                      {personalInfo.college}
                    </p>
                    <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '0.25rem', fontFamily: 'var(--font-mono)' }}>
                      Expected Graduation: {personalInfo.graduationYear} &bull; Tamil Nadu, India
                    </p>
                  </div>
                </div>
              </div>
            </TiltCard>

            {/* Core Pillars Bento Grid */}
            <div 
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                gap: '1rem'
              }}
            >
              {pillars.map((pillar, i) => (
                <TiltCard key={i} maxTilt={4} scale={1.02}>
                  <div 
                    className="glass-card" 
                    style={{ 
                      padding: '1.35rem', 
                      display: 'flex', 
                      flexDirection: 'column', 
                      gap: '0.6rem',
                      height: '100%'
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                      {pillar.icon}
                      <h5 style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--text-contrast)' }}>
                        {pillar.title}
                      </h5>
                    </div>
                    <p style={{ fontSize: '0.825rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                      {pillar.description}
                    </p>
                  </div>
                </TiltCard>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 960px) {
          .about-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};
