import React from 'react';
import { personalInfo } from '../data/portfolio';
import { Code, Mail, ArrowUp } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer 
      style={{
        borderTop: '1px solid var(--border-subtle)',
        background: '#04060A',
        padding: '4rem 0 2rem 0',
        position: 'relative'
      }}
    >
      <div className="container">
        {/* Main Footer Row */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: '1.2fr 0.8fr 0.8fr',
            gap: '3rem',
            marginBottom: '3rem'
          }}
          className="footer-grid"
        >
          {/* Col 1: Identity & Bio */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
              <div
                style={{
                  width: '34px',
                  height: '34px',
                  borderRadius: 'var(--radius-sm)',
                  background: 'var(--accent-primary)',
                  border: '1px solid rgba(255, 255, 255, 0.15)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 800,
                  fontSize: '0.9rem',
                  color: '#ffffff'
                }}
              >
                PR
              </div>
              <span style={{ fontSize: '1.15rem', fontWeight: 700, color: '#ffffff' }}>
                {personalInfo.name}
              </span>
            </div>

            <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.6, maxWidth: '380px' }}>
              Computer Science &amp; Engineering student at Karpagam College of Engineering. Aspiring software engineer dedicated to building accessible, reliable applications.
            </p>
          </div>

          {/* Col 2: Navigation Links */}
          <div>
            <h4 style={{ fontSize: '0.9rem', fontWeight: 700, color: '#ffffff', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '0.05em', fontFamily: 'var(--font-mono)' }}>
              Quick Links
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
              <a href="#about" style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }} className="footer-link">About Me</a>
              <a href="#skills" style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }} className="footer-link">Skills</a>
              <a href="#experience" style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }} className="footer-link">Experience</a>
              <a href="#projects" style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }} className="footer-link">Projects</a>
              <a href="#certifications" style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }} className="footer-link">Certifications</a>
              <a href="#contact" style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }} className="footer-link">Contact</a>
            </div>
          </div>

          {/* Col 3: Social Profiles */}
          <div>
            <h4 style={{ fontSize: '0.9rem', fontWeight: 700, color: '#ffffff', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '0.05em', fontFamily: 'var(--font-mono)' }}>
              Connect &amp; Profiles
            </h4>
            <div style={{ display: 'flex', gap: '0.85rem', marginBottom: '1.25rem' }}>
              <a 
                href={personalInfo.socials.github} 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: 'var(--radius-sm)',
                  background: 'rgba(255, 255, 255, 0.05)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--text-secondary)'
                }}
                className="footer-social-btn"
              >
                <GithubIcon size={18} />
              </a>

              <a 
                href={personalInfo.socials.linkedin} 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: 'var(--radius-sm)',
                  background: 'rgba(255, 255, 255, 0.05)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--text-secondary)'
                }}
                className="footer-social-btn"
              >
                <LinkedinIcon size={18} />
              </a>

              <a 
                href={personalInfo.socials.leetcode} 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="LeetCode Profile"
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: 'var(--radius-sm)',
                  background: 'rgba(255, 255, 255, 0.05)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--text-secondary)'
                }}
                className="footer-social-btn"
              >
                <Code size={18} />
              </a>

              <a 
                href={`mailto:${personalInfo.socials.email}`}
                aria-label="Send Email"
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: 'var(--radius-sm)',
                  background: 'rgba(255, 255, 255, 0.05)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--text-secondary)'
                }}
                className="footer-social-btn"
              >
                <Mail size={18} />
              </a>
            </div>

            <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
              paramesh.ravi11@gmail.com
            </p>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div 
          style={{
            borderTop: '1px solid var(--border-subtle)',
            paddingTop: '2rem',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1rem'
          }}
        >
          <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
            &copy; 2026 Parameshwari R. All verified information presented truthfully.
          </div>

          <button
            onClick={scrollToTop}
            className="btn btn-secondary btn-sm"
            style={{ padding: '0.45rem 0.85rem', fontSize: '0.8rem' }}
            aria-label="Back to top of page"
          >
            <span>Back to Top</span>
            <ArrowUp size={14} />
          </button>
        </div>
      </div>

      <style>{`
        @media (max-width: 820px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
        }
        .footer-link:hover {
          color: var(--accent-light) !important;
        }
        .footer-social-btn:hover {
          background: var(--badge-bg) !important;
          color: var(--accent-light) !important;
          border-color: var(--accent-primary) !important;
          transform: translateY(-2px);
        }
      `}</style>
    </footer>
  );
};
