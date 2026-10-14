import React from 'react';
import { personalInfo } from '../data/portfolio';
import { FileText, ExternalLink, Download, CheckCircle, Sparkles, Info } from 'lucide-react';

export const ResumeSection: React.FC = () => {
  return (
    <section id="resume" className="section" style={{ background: 'rgba(11, 15, 25, 0.4)' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <FileText size={14} />
            <span>Curriculum Vitae</span>
          </div>
          <h2 className="section-title">Resume &amp; Qualifications</h2>
          <p className="section-subtitle">
            A comprehensive overview of academic coursework, project achievements, technical competencies, and professional background.
          </p>
        </div>

        {/* Resume Spotlight Card */}
        <div 
          className="glass-card"
          style={{
            maxWidth: '850px',
            margin: '0 auto',
            padding: '3rem 2.5rem',
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          <div 
            style={{
              display: 'grid',
              gridTemplateColumns: '1.2fr 0.8fr',
              gap: '2.5rem',
              alignItems: 'center'
            }}
            className="resume-card-grid"
          >
            <div>
              <div 
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.45rem',
                  fontSize: '0.8rem',
                  color: '#34d399',
                  fontFamily: 'var(--font-mono)',
                  marginBottom: '0.75rem',
                  textTransform: 'uppercase',
                  fontWeight: 600
                }}
              >
                <Sparkles size={14} />
                <span>Verified Candidate Profile</span>
              </div>

              <h3 style={{ fontSize: '1.6rem', fontWeight: 800, color: '#ffffff', marginBottom: '0.85rem' }}>
                Parameshwari R &bull; Resume
              </h3>

              <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                Access my verified resume directly hosted on Google Drive. It includes detailed academic credentials from Karpagam College of Engineering (B.E. CSE, 2027), practical internship records from Hudsmer Business Solutions and InternPe, and full-stack software development projects.
              </p>

              {/* Action Buttons */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.5rem' }}>
                <a
                  href={personalInfo.socials.resume}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                  id="btn-view-resume"
                  aria-label="View Resume on Google Drive"
                >
                  <FileText size={17} />
                  <span>View Official Resume</span>
                  <ExternalLink size={15} />
                </a>

                <a
                  href={personalInfo.socials.resume}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary"
                  aria-label="Open in Google Drive"
                >
                  <Download size={16} />
                  <span>Drive Preview</span>
                </a>
              </div>

              {/* Verified note */}
              <div 
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '0.5rem',
                  fontSize: '0.8rem',
                  color: 'var(--text-muted)',
                  fontFamily: 'var(--font-mono)'
                }}
              >
                <Info size={14} style={{ flexShrink: 0, marginTop: '0.15rem' }} />
                <span>
                  Hosted via verified Google Drive link. Opens in a secure new tab for full-screen reading and download.
                </span>
              </div>
            </div>

            {/* Right: Quick Checklist / Summary */}
            <div 
              style={{
                background: 'rgba(255, 255, 255, 0.03)',
                border: '1px solid var(--border-subtle)',
                borderRadius: 'var(--radius-lg)',
                padding: '1.75rem 1.5rem'
              }}
            >
              <h4 style={{ fontSize: '0.95rem', fontWeight: 700, color: '#ffffff', marginBottom: '1rem' }}>
                Resume Highlights
              </h4>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                  <CheckCircle size={15} color="#34d399" />
                  <span>B.E. Computer Science (2023 - 2027)</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                  <CheckCircle size={15} color="#34d399" />
                  <span>Document Accessibility Internship (HBS)</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                  <CheckCircle size={15} color="#34d399" />
                  <span>Java Programming Internship (InternPe)</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                  <CheckCircle size={15} color="#34d399" />
                  <span>MERN Stack, Java, C, C++ &amp; Databases</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                  <CheckCircle size={15} color="#34d399" />
                  <span>AWS Cloud Hands-on Labs &amp; Essentials</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 820px) {
          .resume-card-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};
