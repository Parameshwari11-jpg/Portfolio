import React from 'react';
import { certificationsData } from '../data/portfolio';
import { Award, Cloud, ShieldCheck } from 'lucide-react';
import { TiltCard } from './TiltCard';

export const Certifications: React.FC = () => {
  return (
    <section id="certifications" className="section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <Award size={14} />
            <span>Learning &amp; Credentials</span>
          </div>
          <h2 className="section-title">Certifications &amp; Courses</h2>
          <p className="section-subtitle">
            Formal technical certifications, university online courses, and verified architectural hands-on labs.
          </p>
        </div>

        {/* Certifications Grid */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1.75rem'
          }}
        >
          {certificationsData.map((cert) => {
            const isLab = cert.type === 'Hands-on Lab';
            const icon = isLab ? (
              <Cloud size={20} color="var(--accent-secondary-light)" />
            ) : (
              <Award size={20} color="var(--accent-light)" />
            );

            return (
              <TiltCard key={cert.id} maxTilt={5} scale={1.02}>
                <div 
                  className="glass-card"
                  style={{
                    padding: '1.85rem 1.6rem',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    borderTop: `3px solid ${isLab ? 'var(--accent-secondary)' : 'var(--accent-primary)'}`,
                    height: '100%'
                  }}
                >
                  <div>
                    {/* Top Badge: Type & Issuer */}
                    <div 
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        marginBottom: '1rem',
                        gap: '0.5rem'
                      }}
                    >
                      <span className="badge" style={{ fontSize: '0.75rem' }}>
                        {cert.type}
                      </span>
                      <span 
                        style={{
                          fontSize: '0.75rem',
                          fontFamily: 'var(--font-mono)',
                          color: 'var(--text-muted)'
                        }}
                      >
                        Verified
                      </span>
                    </div>

                    {/* Title & Icon */}
                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', marginBottom: '0.85rem' }}>
                      <div 
                        style={{
                          padding: '0.5rem',
                          borderRadius: 'var(--radius-sm)',
                          background: 'var(--bg-input)',
                          border: '1px solid var(--border-card)',
                          marginTop: '0.15rem'
                        }}
                      >
                        {icon}
                      </div>
                      <div>
                        <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--text-contrast)', lineHeight: 1.35 }}>
                          {cert.title}
                        </h3>
                        <p style={{ fontSize: '0.85rem', color: 'var(--accent-light)', marginTop: '0.25rem', fontWeight: 600 }}>
                          {cert.issuer}
                        </p>
                      </div>
                    </div>

                    {/* Description */}
                    <p 
                      style={{
                        fontSize: '0.875rem',
                        color: 'var(--text-secondary)',
                        lineHeight: 1.6,
                        marginTop: '0.75rem'
                      }}
                    >
                      {cert.description}
                    </p>
                  </div>

                  {/* Footer validation check */}
                  <div 
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.45rem',
                      paddingTop: '1.15rem',
                      marginTop: '1.25rem',
                      borderTop: '1px solid var(--border-subtle)',
                      fontSize: '0.775rem',
                      color: 'var(--text-muted)',
                      fontFamily: 'var(--font-mono)'
                    }}
                  >
                    <ShieldCheck size={14} color="#10b981" />
                    <span>Curriculum &amp; Training Completed</span>
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
