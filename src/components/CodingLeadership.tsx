import React from 'react';
import { personalInfo } from '../data/portfolio';
import { Code, ExternalLink, Users, CheckCircle2, Award, Zap } from 'lucide-react';
import { TiltCard } from './TiltCard';
import { AnimatedCounter } from './AnimatedCounter';

export const CodingLeadership: React.FC = () => {
  return (
    <section className="section" style={{ paddingTop: '1rem', paddingBottom: '4rem' }}>
      <div className="container">
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '2rem'
          }}
          className="coding-leadership-grid"
        >
          {/* Card 1: Problem Solving & LeetCode */}
          <TiltCard maxTilt={5} scale={1.015}>
            <div 
              className="glass-card" 
              style={{ 
                padding: '2.25rem 2rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                borderLeft: '4px solid var(--accent-highlight)',
                height: '100%'
              }}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem', gap: '0.5rem', flexWrap: 'wrap' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <div 
                      style={{
                        padding: '0.65rem',
                        borderRadius: 'var(--radius-md)',
                        background: 'rgba(245, 158, 11, 0.12)',
                        color: 'var(--accent-highlight)'
                      }}
                    >
                      <Code size={22} />
                    </div>
                    <div>
                      <span 
                        style={{ 
                          fontSize: '0.75rem', 
                          fontFamily: 'var(--font-mono)', 
                          color: 'var(--accent-highlight)', 
                          textTransform: 'uppercase', 
                          fontWeight: 600 
                        }}
                      >
                        Competitive Programming &amp; DSA
                      </span>
                      <h3 style={{ fontSize: '1.3rem', fontWeight: 700, color: 'var(--text-contrast)', marginTop: '0.15rem' }}>
                        Algorithmic Problem Solving
                      </h3>
                    </div>
                  </div>

                  {/* 500+ Milestone Badge */}
                  <span 
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.35rem',
                      fontSize: '0.8rem',
                      fontWeight: 800,
                      fontFamily: 'var(--font-mono)',
                      background: 'rgba(245, 158, 11, 0.15)',
                      color: '#f59e0b',
                      border: '1px solid rgba(245, 158, 11, 0.35)',
                      padding: '0.3rem 0.75rem',
                      borderRadius: 'var(--radius-full)'
                    }}
                  >
                    <Zap size={14} />
                    <span><AnimatedCounter target={500} suffix="+" /> Solved</span>
                  </span>
                </div>

                <p style={{ fontSize: '0.925rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '1.25rem' }}>
                  Solved <strong>500+ Data Structures and Algorithms</strong> problems on LeetCode using Java and C++. Rigorous daily practice focusing on solidifying core fundamentals including arrays, strings, two pointers, sliding window, binary search, trees, graphs, and recursion.
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.55rem', marginBottom: '1.5rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', color: 'var(--text-main)' }}>
                    <CheckCircle2 size={15} color="var(--accent-highlight)" />
                    <span>Time &amp; space complexity optimization across 500+ challenges</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', color: 'var(--text-main)' }}>
                    <CheckCircle2 size={15} color="var(--accent-highlight)" />
                    <span>Consistent practice of standard coding patterns &amp; interview topics</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', color: 'var(--text-main)' }}>
                    <Award size={15} color="var(--accent-highlight)" />
                    <span>Active profile: leetcode.com/u/Paramesh137/</span>
                  </div>
                </div>
              </div>

              <div style={{ paddingTop: '1.25rem', borderTop: '1px solid var(--border-subtle)' }}>
                <a 
                  href={personalInfo.socials.leetcode}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline btn-sm"
                >
                  <Code size={15} color="var(--accent-highlight)" />
                  <span>View LeetCode Profile (500+ Solved)</span>
                  <ExternalLink size={13} />
                </a>
              </div>
            </div>
          </TiltCard>

          {/* Card 2: Campus Leadership (SDE Club Treasurer) */}
          <TiltCard maxTilt={5} scale={1.015}>
            <div 
              className="glass-card" 
              style={{ 
                padding: '2.25rem 2rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                borderLeft: '4px solid var(--accent-primary)',
                height: '100%'
              }}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
                  <div 
                    style={{
                      padding: '0.65rem',
                      borderRadius: 'var(--radius-md)',
                      background: 'var(--badge-bg)',
                      color: 'var(--accent-light)'
                    }}
                  >
                    <Users size={22} />
                  </div>
                  <div>
                    <span 
                      style={{ 
                        fontSize: '0.75rem', 
                        fontFamily: 'var(--font-mono)', 
                        color: 'var(--accent-light)', 
                        textTransform: 'uppercase', 
                        fontWeight: 600 
                      }}
                    >
                      Student Leadership &amp; Community
                    </span>
                    <h3 style={{ fontSize: '1.3rem', fontWeight: 700, color: 'var(--text-contrast)', marginTop: '0.15rem' }}>
                      {personalInfo.leadership.title}
                    </h3>
                  </div>
                </div>

                <div 
                  style={{
                    fontSize: '0.9rem',
                    fontWeight: 600,
                    color: 'var(--accent-secondary-light)',
                    marginBottom: '0.75rem',
                    fontFamily: 'var(--font-mono)'
                  }}
                >
                  {personalInfo.leadership.organization}
                </div>

                <p style={{ fontSize: '0.925rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '1.25rem' }}>
                  {personalInfo.leadership.description}
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '1.5rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', color: 'var(--text-main)' }}>
                    <CheckCircle2 size={15} color="var(--accent-secondary-light)" />
                    <span>Technical workshops &amp; student peer coding sessions</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', color: 'var(--text-main)' }}>
                    <CheckCircle2 size={15} color="var(--accent-secondary-light)" />
                    <span>Collaboration with peers on software engineering projects</span>
                  </div>
                </div>
              </div>

              <div style={{ paddingTop: '1.25rem', borderTop: '1px solid var(--border-subtle)' }}>
                <span 
                  style={{
                    fontSize: '0.8rem',
                    color: 'var(--text-muted)',
                    fontFamily: 'var(--font-mono)'
                  }}
                >
                  Active College Leadership Role &bull; Class of 2027
                </span>
              </div>
            </div>
          </TiltCard>
        </div>
      </div>

      <style>{`
        @media (max-width: 820px) {
          .coding-leadership-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};
