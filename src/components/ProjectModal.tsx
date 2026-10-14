import React, { useEffect } from 'react';
import type { ProjectItem } from '../types/portfolio';
import { X, ExternalLink, CheckCircle2, ShieldCheck, AlertCircle } from 'lucide-react';
import { GithubIcon } from './Icons';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div 
      className="modal-overlay" 
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
    >
      <div 
        className="modal-content" 
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close Project Details"
          style={{
            position: 'absolute',
            top: '1.25rem',
            right: '1.25rem',
            background: 'rgba(255, 255, 255, 0.08)',
            border: '1px solid var(--border-subtle)',
            borderRadius: 'var(--radius-sm)',
            color: 'var(--text-main)',
            padding: '0.45rem',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'background var(--transition-fast)'
          }}
        >
          <X size={18} />
        </button>

        {/* Modal Header */}
        <div style={{ marginBottom: '1.5rem', paddingRight: '2rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '0.5rem' }}>
            <span className="badge">{project.category}</span>
            <span 
              style={{
                fontSize: '0.75rem',
                fontFamily: 'var(--font-mono)',
                color: 'var(--accent-secondary-light)',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.3rem'
              }}
            >
              <ShieldCheck size={14} />
              <span>{project.verifiedStatus}</span>
            </span>
          </div>

          <h3 
            id="modal-project-title" 
            style={{ fontSize: '1.65rem', fontWeight: 800, color: 'var(--text-contrast)', letterSpacing: '-0.02em' }}
          >
            {project.title}
          </h3>
        </div>

        {/* Problem Statement Box */}
        <div 
          style={{
            background: 'var(--badge-bg)',
            border: '1px solid var(--badge-border)',
            borderRadius: 'var(--radius-md)',
            padding: '1.15rem 1.25rem',
            marginBottom: '1.5rem'
          }}
        >
          <div 
            style={{
              fontSize: '0.8rem',
              fontFamily: 'var(--font-mono)',
              color: 'var(--accent-light)',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              marginBottom: '0.4rem'
            }}
          >
            The Problem Addressed:
          </div>
          <p style={{ fontSize: '0.925rem', color: 'var(--text-main)', lineHeight: 1.6 }}>
            {project.problemStatement}
          </p>
        </div>

        {/* Full Overview */}
        <div style={{ marginBottom: '1.75rem' }}>
          <h4 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--text-contrast)', marginBottom: '0.65rem' }}>
            Architecture &amp; Implementation Overview
          </h4>
          <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: 1.7 }}>
            {project.fullDescription}
          </p>
        </div>

        {/* Implemented Features List */}
        <div style={{ marginBottom: '1.75rem' }}>
          <h4 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--text-contrast)', marginBottom: '0.75rem' }}>
            Confirmed Key Features
          </h4>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
            {project.keyFeatures.map((feat, i) => (
              <li 
                key={i} 
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '0.65rem',
                  fontSize: '0.9rem',
                  color: 'var(--text-secondary)',
                  lineHeight: 1.5
                }}
              >
                <CheckCircle2 size={16} color="var(--accent-light)" style={{ flexShrink: 0, marginTop: '0.2rem' }} />
                <span>{feat}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Tech Stack Badges */}
        <div style={{ marginBottom: '2rem' }}>
          <h4 style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.6rem' }}>
            Verified Technologies:
          </h4>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
            {project.technologies.map((t) => (
              <span key={t} className="badge" style={{ fontSize: '0.825rem', padding: '0.3rem 0.8rem' }}>
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Action Buttons & Links */}
        <div 
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '1rem',
            paddingTop: '1.25rem',
            borderTop: '1px solid var(--border-subtle)',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}
        >
          <div style={{ display: 'flex', gap: '0.85rem' }}>
            {project.githubUrl ? (
              <a 
                href={project.githubUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-primary btn-sm"
              >
                <GithubIcon size={16} />
                <span>View Repository</span>
                <ExternalLink size={13} />
              </a>
            ) : (
              <span 
                style={{
                  fontSize: '0.8rem',
                  color: 'var(--text-muted)',
                  fontFamily: 'var(--font-mono)',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.4rem'
                }}
              >
                <AlertCircle size={14} />
                <span>Source Code / Architecture Documentation on Request</span>
              </span>
            )}

            {project.liveUrl && (
              <a 
                href={project.liveUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-outline btn-sm"
              >
                <ExternalLink size={16} />
                <span>Live Demo</span>
              </a>
            )}
          </div>

          <button onClick={onClose} className="btn btn-secondary btn-sm">
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
