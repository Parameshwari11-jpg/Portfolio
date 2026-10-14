import React from 'react';
import { experienceData } from '../data/portfolio';
import { Briefcase, Building2, ChevronRight, Cloud } from 'lucide-react';
import { TiltCard } from './TiltCard';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <Briefcase size={14} />
            <span>Practical Experience</span>
          </div>
          <h2 className="section-title">Internships &amp; Technical Training</h2>
          <p className="section-subtitle">
            Real-world industry internships, practical document processing workflows, and hands-on cloud engineering labs.
          </p>
        </div>

        {/* Experience Timeline / Cards */}
        <div 
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '2.25rem',
            maxWidth: '920px',
            margin: '0 auto',
            position: 'relative'
          }}
          className="experience-timeline-container"
        >
          {experienceData.map((exp, index) => {
            const isInternship = exp.type === 'Internship';
            const icon = isInternship ? (
              <Building2 size={22} color="var(--accent-light)" />
            ) : (
              <Cloud size={22} color="var(--accent-secondary-light)" />
            );

            return (
              <TiltCard key={exp.id} maxTilt={4} scale={1.015}>
                <div 
                  className="glass-card"
                  style={{
                    padding: '2.25rem 2rem',
                    position: 'relative',
                    borderLeft: `4px solid ${isInternship ? 'var(--accent-primary)' : 'var(--accent-secondary)'}`,
                    boxShadow: 'var(--shadow-md)'
                  }}
                >
                  {/* Step index badge */}
                  <div
                    style={{
                      position: 'absolute',
                      top: '1.25rem',
                      right: '1.5rem',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.75rem',
                      color: 'var(--text-muted)',
                      background: 'rgba(255, 255, 255, 0.04)',
                      padding: '0.2rem 0.55rem',
                      borderRadius: 'var(--radius-sm)',
                      border: '1px solid var(--border-subtle)'
                    }}
                  >
                    0{index + 1}
                  </div>

                  {/* Header row: Role, Org, Tag */}
                  <div 
                    style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      justifyContent: 'space-between',
                      alignItems: 'flex-start',
                      gap: '1rem',
                      marginBottom: '1rem',
                      paddingRight: '3rem'
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.85rem' }}>
                      <div 
                        style={{
                          padding: '0.65rem',
                          borderRadius: 'var(--radius-md)',
                          background: 'var(--bg-input)',
                          border: '1px solid var(--border-card)',
                          marginTop: '0.2rem'
                        }}
                      >
                        {icon}
                      </div>
                      <div>
                        <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--text-contrast)' }}>
                          {exp.role}
                        </h3>
                        <div 
                          style={{
                            fontSize: '1rem',
                            fontWeight: 600,
                            color: 'var(--accent-light)',
                            marginTop: '0.2rem'
                          }}
                        >
                          {exp.organization}
                        </div>
                      </div>
                    </div>

                    {/* Type Badge & Period */}
                    <div style={{ textAlign: 'right' }}>
                      <span 
                        className="badge"
                        style={{ marginBottom: '0.35rem' }}
                      >
                        {exp.type}
                      </span>
                      <div 
                        style={{
                          fontSize: '0.8rem',
                          fontFamily: 'var(--font-mono)',
                          color: 'var(--text-muted)'
                        }}
                      >
                        {exp.period}
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p 
                    style={{
                      fontSize: '0.925rem',
                      color: 'var(--text-secondary)',
                      lineHeight: 1.65,
                      marginBottom: '1.25rem'
                    }}
                  >
                    {exp.description}
                  </p>

                  {/* Responsibilities list */}
                  <div style={{ marginBottom: '1.5rem' }}>
                    <h4 
                      style={{
                        fontSize: '0.825rem',
                        fontWeight: 700,
                        textTransform: 'uppercase',
                        letterSpacing: '0.05em',
                        color: 'var(--text-contrast)',
                        marginBottom: '0.75rem',
                        fontFamily: 'var(--font-mono)'
                      }}
                    >
                      Key Contributions &amp; Scope:
                    </h4>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.55rem' }}>
                      {exp.keyPoints.map((resp, i) => (
                        <div 
                          key={i}
                          style={{
                            display: 'flex',
                            alignItems: 'flex-start',
                            gap: '0.6rem',
                            fontSize: '0.875rem',
                            color: 'var(--text-main)',
                            lineHeight: 1.55
                          }}
                        >
                          <ChevronRight 
                            size={16} 
                            color={isInternship ? 'var(--accent-light)' : 'var(--accent-secondary-light)'} 
                            style={{ flexShrink: 0, marginTop: '0.15rem' }} 
                          />
                          <span>{resp}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tech stack tags */}
                  <div 
                    style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      alignItems: 'center',
                      gap: '0.45rem',
                      paddingTop: '1.15rem',
                      borderTop: '1px solid var(--border-subtle)'
                    }}
                  >
                    <span 
                      style={{
                        fontSize: '0.775rem',
                        color: 'var(--text-muted)',
                        fontFamily: 'var(--font-mono)',
                        marginRight: '0.25rem'
                      }}
                    >
                      Tech &amp; Concepts:
                    </span>
                    {exp.technologies.map((tech) => (
                      <span 
                        key={tech} 
                        className="badge" 
                        style={{ fontSize: '0.775rem', padding: '0.2rem 0.65rem' }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </TiltCard>
            );
          })}
        </div>
      </div>
    </section>
  );
};
