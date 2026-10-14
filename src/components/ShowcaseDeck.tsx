import React, { useState, useEffect } from 'react';
import { personalInfo, projectsData } from '../data/portfolio';
import type { ProjectItem } from '../types/portfolio';
import { ThreePlexusBackground } from './ThreePlexusBackground';
import { ProjectModal } from './ProjectModal';
import { 
  ArrowRight, 
  ArrowLeft, 
  ExternalLink, 
  Mail, 
  FileText, 
  Code, 
  Terminal, 
  Award, 
  Briefcase, 
  GraduationCap, 
  MapPin, 
  CheckCircle2, 
  Layers, 
  ChevronRight,
  Maximize2
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

interface ShowcaseDeckProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
  onSwitchToFullView?: () => void;
}

export const ShowcaseDeck: React.FC<ShowcaseDeckProps> = ({ 
  activeSection, 
  onNavigate,
  onSwitchToFullView 
}) => {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [bioModalOpen, setBioModalOpen] = useState(false);
  const [allProjectsModalOpen, setAllProjectsModalOpen] = useState(false);

  const sections = React.useMemo(() => ['home', 'about', 'skills', 'projects', 'experience', 'contact'], []);
  const currentIndex = Math.max(0, sections.indexOf(activeSection));

  const goToNext = React.useCallback(() => {
    const nextIdx = (currentIndex + 1) % sections.length;
    onNavigate(sections[nextIdx]);
  }, [currentIndex, sections, onNavigate]);

  const goToPrev = React.useCallback(() => {
    const prevIdx = (currentIndex - 1 + sections.length) % sections.length;
    onNavigate(sections[prevIdx]);
  }, [currentIndex, sections, onNavigate]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedProject || bioModalOpen || allProjectsModalOpen) return;
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
        goToNext();
      } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        goToPrev();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [goToNext, goToPrev, selectedProject, bioModalOpen, allProjectsModalOpen]);

  return (
    <div 
      className="showcase-deck-container"
      style={{
        position: 'relative',
        width: '100%',
        minHeight: '100vh',
        background: 'transparent',
        color: 'var(--text-main)',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        paddingTop: '5rem',
        paddingBottom: '4.5rem'
      }}
    >
      {/* Interactive 3D Plexus Mesh */}
      <ThreePlexusBackground />

      {/* Subtle radial ambient spotlight overlay */}
      <div 
        style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(circle at 50% 45%, rgba(0, 0, 0, 0.15) 0%, rgba(4, 7, 12, 0.75) 80%, rgba(4, 7, 12, 0.95) 100%)',
          pointerEvents: 'none',
          zIndex: 1
        }}
        aria-hidden="true"
      />

      {/* Main Slide Content Area */}
      <div 
        className="container"
        style={{
          position: 'relative',
          zIndex: 2,
          maxWidth: '1240px',
          width: '100%',
          margin: '0 auto',
          padding: '0 1.5rem',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center'
        }}
      >
        {/* ===================================================================
            SLIDE 0: HOME / 3D HERO
            =================================================================== */}
        {activeSection === 'home' && (
          <div 
            className="deck-slide deck-slide-home"
            style={{
              animation: 'deckFadeIn 0.55s cubic-bezier(0.16, 1, 0.3, 1) forwards',
              maxWidth: '920px',
              width: '100%'
            }}
          >
            {/* Status Beacon Badge */}
            <div 
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.65rem',
                background: 'rgba(255, 255, 255, 0.05)',
                backdropFilter: 'blur(12px)',
                WebkitBackdropFilter: 'blur(12px)',
                border: '1px solid rgba(255, 255, 255, 0.12)',
                padding: '0.45rem 1.15rem',
                borderRadius: '9999px',
                marginBottom: '1.75rem',
                fontSize: '0.825rem',
                fontWeight: 600,
                letterSpacing: '0.04em',
                color: 'var(--accent-light)',
                boxShadow: '0 0 20px rgba(0,0,0,0.5)'
              }}
            >
              <span 
                style={{
                  position: 'relative',
                  display: 'flex',
                  width: '8px',
                  height: '8px'
                }}
              >
                <span 
                  style={{
                    position: 'absolute',
                    inset: -2,
                    borderRadius: '50%',
                    background: 'var(--accent-light)',
                    opacity: 0.7,
                    animation: 'ping 2s cubic-bezier(0, 0, 0.2, 1) infinite'
                  }} 
                />
                <span 
                  style={{
                    position: 'relative',
                    width: '8px',
                    height: '8px',
                    borderRadius: '50%',
                    background: 'var(--accent-primary)'
                  }} 
                />
              </span>
              <span>B.E. CSE 2027 • Available for Software Developer Roles</span>
            </div>

            {/* Main Brand Title */}
            <h1
              style={{
                fontSize: 'clamp(3rem, 7vw, 5.5rem)',
                fontWeight: 800,
                letterSpacing: '-0.035em',
                lineHeight: 1.08,
                marginBottom: '1.25rem',
                color: '#ffffff',
                textShadow: '0 0 45px rgba(255, 255, 255, 0.25)'
              }}
            >
              {personalInfo.name}
            </h1>

            {/* Subtitle / Tagline */}
            <p
              style={{
                fontSize: 'clamp(1.15rem, 2.5vw, 1.45rem)',
                fontWeight: 500,
                color: 'var(--text-main)',
                maxWidth: '750px',
                margin: '0 auto 1.5rem',
                lineHeight: 1.5
              }}
            >
              Full-Stack Developer • Computer Science & Engineering
            </p>

            <p
              style={{
                fontSize: '1rem',
                color: 'var(--text-secondary)',
                maxWidth: '680px',
                margin: '0 auto 2.5rem',
                lineHeight: 1.7
              }}
            >
              Crafting resilient web applications, modular full-stack architectures, and accessible software solutions with clean code fundamentals.
            </p>

            {/* Action Buttons */}
            <div 
              style={{
                display: 'flex',
                gap: '1.25rem',
                justifyContent: 'center',
                flexWrap: 'wrap'
              }}
            >
              <button
                onClick={() => onNavigate('about')}
                style={{
                  background: 'var(--accent-primary)',
                  color: '#ffffff',
                  border: 'none',
                  padding: '0.85rem 2rem',
                  borderRadius: '9999px',
                  fontWeight: 600,
                  fontSize: '0.95rem',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.65rem',
                  cursor: 'pointer',
                  boxShadow: '0 4px 20px var(--accent-glow)',
                  transition: 'all 0.2s ease'
                }}
                className="btn-interactive"
              >
                <span>Explore Showcase</span>
                <ArrowRight size={18} />
              </button>

              <button
                onClick={() => onNavigate('projects')}
                style={{
                  background: 'rgba(255, 255, 255, 0.06)',
                  color: '#ffffff',
                  border: '1px solid rgba(255, 255, 255, 0.16)',
                  backdropFilter: 'blur(10px)',
                  padding: '0.85rem 2rem',
                  borderRadius: '9999px',
                  fontWeight: 600,
                  fontSize: '0.95rem',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.65rem',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}
                className="btn-interactive"
              >
                <Code size={18} />
                <span>Featured Projects</span>
              </button>

              <a
                href={personalInfo.socials.resume}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  background: 'transparent',
                  color: 'var(--text-secondary)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  padding: '0.85rem 1.6rem',
                  borderRadius: '9999px',
                  fontWeight: 500,
                  fontSize: '0.95rem',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  textDecoration: 'none',
                  transition: 'all 0.2s ease'
                }}
                className="btn-interactive"
              >
                <FileText size={17} />
                <span>Resume PDF</span>
              </a>
            </div>
          </div>
        )}

        {/* ===================================================================
            SLIDE 1: ABOUT ME (OUR HERITAGE & DNA)
            =================================================================== */}
        {activeSection === 'about' && (
          <div 
            className="deck-slide"
            style={{
              animation: 'deckFadeIn 0.55s cubic-bezier(0.16, 1, 0.3, 1) forwards',
              width: '100%',
              maxWidth: '1100px'
            }}
          >
            {/* Upper Kicker */}
            <div 
              style={{
                textTransform: 'uppercase',
                fontSize: '0.825rem',
                fontWeight: 700,
                letterSpacing: '0.18em',
                color: 'var(--accent-light)',
                marginBottom: '0.75rem'
              }}
            >
              Our Heritage &amp; Foundation
            </div>

            {/* Main Title */}
            <h2
              style={{
                fontSize: 'clamp(2.6rem, 5vw, 4.2rem)',
                fontWeight: 800,
                letterSpacing: '-0.03em',
                lineHeight: 1.1,
                marginBottom: '1.25rem',
                color: '#ffffff'
              }}
            >
              About Me
            </h2>

            {/* Narrative Paragraph */}
            <p
              style={{
                fontSize: 'clamp(1rem, 2vw, 1.15rem)',
                color: 'var(--text-secondary)',
                maxWidth: '780px',
                margin: '0 auto 3rem',
                lineHeight: 1.75
              }}
            >
              Computer Science &amp; Engineering student at Karpagam College of Engineering (Class of 2027). Dedicated to building clean, accessible web platforms, algorithmic problem-solving, and practical automation in document processing workflows.
            </p>

            {/* 3 Iconic Numbered Cards */}
            <div 
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: '1.75rem',
                width: '100%',
                marginBottom: '2.5rem'
              }}
              className="deck-cards-grid"
            >
              {/* Card 1 */}
              <div 
                className="deck-numbered-card"
                style={{
                  background: 'rgba(14, 27, 42, 0.65)',
                  backdropFilter: 'blur(16px)',
                  WebkitBackdropFilter: 'blur(16px)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: '1.25rem',
                  padding: '2.25rem 2rem',
                  textAlign: 'left',
                  position: 'relative',
                  overflow: 'hidden',
                  transition: 'transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease'
                }}
              >
                <div 
                  style={{
                    fontSize: '2.5rem',
                    fontWeight: 800,
                    color: 'var(--accent-light)',
                    marginBottom: '1rem',
                    fontFamily: 'monospace',
                    letterSpacing: '-0.05em'
                  }}
                >
                  1
                </div>
                <h3 
                  style={{
                    fontSize: '1.25rem',
                    fontWeight: 700,
                    color: '#ffffff',
                    marginBottom: '0.65rem'
                  }}
                >
                  Computer Science &amp; Engg.
                </h3>
                <p 
                  style={{
                    fontSize: '0.925rem',
                    color: 'var(--text-secondary)',
                    lineHeight: 1.65,
                    marginBottom: '1rem'
                  }}
                >
                  B.E. candidate at Karpagam College of Engineering (2023–2027). Strong foundation in OOP, Data Structures, Algorithms, and Software Engineering.
                </p>
                <div 
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    fontSize: '0.8rem',
                    color: 'var(--accent-light)',
                    fontWeight: 600
                  }}
                >
                  <GraduationCap size={15} />
                  <span>Class of 2027 • Coimbatore</span>
                </div>
              </div>

              {/* Card 2 */}
              <div 
                className="deck-numbered-card"
                style={{
                  background: 'rgba(14, 27, 42, 0.65)',
                  backdropFilter: 'blur(16px)',
                  WebkitBackdropFilter: 'blur(16px)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: '1.25rem',
                  padding: '2.25rem 2rem',
                  textAlign: 'left',
                  position: 'relative',
                  overflow: 'hidden',
                  transition: 'transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease'
                }}
              >
                <div 
                  style={{
                    fontSize: '2.5rem',
                    fontWeight: 800,
                    color: 'var(--accent-light)',
                    marginBottom: '1rem',
                    fontFamily: 'monospace',
                    letterSpacing: '-0.05em'
                  }}
                >
                  2
                </div>
                <h3 
                  style={{
                    fontSize: '1.25rem',
                    fontWeight: 700,
                    color: '#ffffff',
                    marginBottom: '0.65rem'
                  }}
                >
                  Industry Internships
                </h3>
                <p 
                  style={{
                    fontSize: '0.925rem',
                    color: 'var(--text-secondary)',
                    lineHeight: 1.65,
                    marginBottom: '1rem'
                  }}
                >
                  Document accessibility &amp; PDF structure analysis at Hudsmer Business Solutions; Java application development &amp; OOP game logic at InternPe.
                </p>
                <div 
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    fontSize: '0.8rem',
                    color: 'var(--accent-light)',
                    fontWeight: 600
                  }}
                >
                  <Briefcase size={15} />
                  <span>Hands-on Practical Training</span>
                </div>
              </div>

              {/* Card 3 */}
              <div 
                className="deck-numbered-card"
                style={{
                  background: 'rgba(14, 27, 42, 0.65)',
                  backdropFilter: 'blur(16px)',
                  WebkitBackdropFilter: 'blur(16px)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: '1.25rem',
                  padding: '2.25rem 2rem',
                  textAlign: 'left',
                  position: 'relative',
                  overflow: 'hidden',
                  transition: 'transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease'
                }}
              >
                <div 
                  style={{
                    fontSize: '2.5rem',
                    fontWeight: 800,
                    color: 'var(--accent-light)',
                    marginBottom: '1rem',
                    fontFamily: 'monospace',
                    letterSpacing: '-0.05em'
                  }}
                >
                  3
                </div>
                <h3 
                  style={{
                    fontSize: '1.25rem',
                    fontWeight: 700,
                    color: '#ffffff',
                    marginBottom: '0.65rem'
                  }}
                >
                  SDE Club Treasurer
                </h3>
                <p 
                  style={{
                    fontSize: '0.925rem',
                    color: 'var(--text-secondary)',
                    lineHeight: 1.65,
                    marginBottom: '1rem'
                  }}
                >
                  Leading student initiatives in the Software Development Engineer club. Coordinating technical workshops, hackathons, and collaborative peer learning.
                </p>
                <div 
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    fontSize: '0.8rem',
                    color: 'var(--accent-light)',
                    fontWeight: 600
                  }}
                >
                  <Award size={15} />
                  <span>Department Leadership</span>
                </div>
              </div>
            </div>

            {/* Read Deep Bio Trigger */}
            <div>
              <button
                onClick={() => setBioModalOpen(true)}
                style={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.15)',
                  color: 'var(--text-main)',
                  padding: '0.75rem 1.75rem',
                  borderRadius: '9999px',
                  fontWeight: 600,
                  fontSize: '0.9rem',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}
                className="btn-interactive"
              >
                <span>Read Full Background &amp; Philosophy</span>
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
        )}

        {/* ===================================================================
            SLIDE 2: SKILLS / TECHNICAL ARSENAL
            =================================================================== */}
        {activeSection === 'skills' && (
          <div 
            className="deck-slide"
            style={{
              animation: 'deckFadeIn 0.55s cubic-bezier(0.16, 1, 0.3, 1) forwards',
              width: '100%',
              maxWidth: '1100px'
            }}
          >
            {/* Upper Kicker */}
            <div 
              style={{
                textTransform: 'uppercase',
                fontSize: '0.825rem',
                fontWeight: 700,
                letterSpacing: '0.18em',
                color: 'var(--accent-light)',
                marginBottom: '0.75rem'
              }}
            >
              Technical Arsenal
            </div>

            {/* Main Title */}
            <h2
              style={{
                fontSize: 'clamp(2.6rem, 5vw, 4.2rem)',
                fontWeight: 800,
                letterSpacing: '-0.03em',
                lineHeight: 1.1,
                marginBottom: '1.25rem',
                color: '#ffffff'
              }}
            >
              Core Capabilities
            </h2>

            {/* Narrative Paragraph */}
            <p
              style={{
                fontSize: 'clamp(1rem, 2vw, 1.15rem)',
                color: 'var(--text-secondary)',
                maxWidth: '780px',
                margin: '0 auto 3rem',
                lineHeight: 1.75
              }}
            >
              A solid engineering foundation spanning modern full-stack web architectures, enterprise programming languages, database systems, and cloud fundamentals.
            </p>

            {/* 3 Numbered Cards for Skills */}
            <div 
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: '1.75rem',
                width: '100%',
                marginBottom: '2.5rem'
              }}
              className="deck-cards-grid"
            >
              {/* Skill Card 1: Web & Full-Stack */}
              <div 
                className="deck-numbered-card"
                style={{
                  background: 'rgba(14, 27, 42, 0.65)',
                  backdropFilter: 'blur(16px)',
                  WebkitBackdropFilter: 'blur(16px)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: '1.25rem',
                  padding: '2.25rem 2rem',
                  textAlign: 'left',
                  position: 'relative'
                }}
              >
                <div 
                  style={{
                    fontSize: '2.5rem',
                    fontWeight: 800,
                    color: 'var(--accent-light)',
                    marginBottom: '1rem',
                    fontFamily: 'monospace',
                    letterSpacing: '-0.05em'
                  }}
                >
                  1
                </div>
                <h3 
                  style={{
                    fontSize: '1.25rem',
                    fontWeight: 700,
                    color: '#ffffff',
                    marginBottom: '0.65rem'
                  }}
                >
                  Full-Stack Web Engineering
                </h3>
                <p 
                  style={{
                    fontSize: '0.925rem',
                    color: 'var(--text-secondary)',
                    lineHeight: 1.65,
                    marginBottom: '1.25rem'
                  }}
                >
                  Building reactive interfaces and API endpoints with the MERN ecosystem.
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.45rem' }}>
                  {['React', 'Node.js', 'Express.js', 'MERN Stack', 'REST APIs', 'HTML5 & CSS3'].map(skill => (
                    <span 
                      key={skill}
                      style={{
                        background: 'rgba(255, 255, 255, 0.06)',
                        border: '1px solid rgba(255, 255, 255, 0.12)',
                        padding: '0.3rem 0.65rem',
                        borderRadius: '0.5rem',
                        fontSize: '0.78rem',
                        fontWeight: 600,
                        color: 'var(--text-main)'
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Skill Card 2: Languages & DSA */}
              <div 
                className="deck-numbered-card"
                style={{
                  background: 'rgba(14, 27, 42, 0.65)',
                  backdropFilter: 'blur(16px)',
                  WebkitBackdropFilter: 'blur(16px)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: '1.25rem',
                  padding: '2.25rem 2rem',
                  textAlign: 'left',
                  position: 'relative'
                }}
              >
                <div 
                  style={{
                    fontSize: '2.5rem',
                    fontWeight: 800,
                    color: 'var(--accent-light)',
                    marginBottom: '1rem',
                    fontFamily: 'monospace',
                    letterSpacing: '-0.05em'
                  }}
                >
                  2
                </div>
                <h3 
                  style={{
                    fontSize: '1.25rem',
                    fontWeight: 700,
                    color: '#ffffff',
                    marginBottom: '0.65rem'
                  }}
                >
                  Core Languages &amp; DSA
                </h3>
                <p 
                  style={{
                    fontSize: '0.925rem',
                    color: 'var(--text-secondary)',
                    lineHeight: 1.65,
                    marginBottom: '1.25rem'
                  }}
                >
                  Strong foundation in OOP, memory management, and algorithmic analysis.
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.45rem' }}>
                  {['Java (Core & OOP)', 'JavaScript (ES6+)', 'C / C++', 'DSA Problem Solving', 'LeetCode Practice'].map(skill => (
                    <span 
                      key={skill}
                      style={{
                        background: 'rgba(255, 255, 255, 0.06)',
                        border: '1px solid rgba(255, 255, 255, 0.12)',
                        padding: '0.3rem 0.65rem',
                        borderRadius: '0.5rem',
                        fontSize: '0.78rem',
                        fontWeight: 600,
                        color: 'var(--text-main)'
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Skill Card 3: Databases & Cloud */}
              <div 
                className="deck-numbered-card"
                style={{
                  background: 'rgba(14, 27, 42, 0.65)',
                  backdropFilter: 'blur(16px)',
                  WebkitBackdropFilter: 'blur(16px)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: '1.25rem',
                  padding: '2.25rem 2rem',
                  textAlign: 'left',
                  position: 'relative'
                }}
              >
                <div 
                  style={{
                    fontSize: '2.5rem',
                    fontWeight: 800,
                    color: 'var(--accent-light)',
                    marginBottom: '1rem',
                    fontFamily: 'monospace',
                    letterSpacing: '-0.05em'
                  }}
                >
                  3
                </div>
                <h3 
                  style={{
                    fontSize: '1.25rem',
                    fontWeight: 700,
                    color: '#ffffff',
                    marginBottom: '0.65rem'
                  }}
                >
                  Databases &amp; Cloud Tools
                </h3>
                <p 
                  style={{
                    fontSize: '0.925rem',
                    color: 'var(--text-secondary)',
                    lineHeight: 1.65,
                    marginBottom: '1.25rem'
                  }}
                >
                  Persistent data modeling, version control, and cloud infrastructure concepts.
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.45rem' }}>
                  {['MongoDB', 'Oracle Database', 'SQL', 'AWS Cloud Essentials', 'Git & GitHub', 'WCAG Accessibility'].map(skill => (
                    <span 
                      key={skill}
                      style={{
                        background: 'rgba(255, 255, 255, 0.06)',
                        border: '1px solid rgba(255, 255, 255, 0.12)',
                        padding: '0.3rem 0.65rem',
                        borderRadius: '0.5rem',
                        fontSize: '0.78rem',
                        fontWeight: 600,
                        color: 'var(--text-main)'
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* LeetCode & Code Profiles Trigger */}
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
              <a
                href={personalInfo.socials.leetcode}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.15)',
                  color: 'var(--text-main)',
                  padding: '0.75rem 1.6rem',
                  borderRadius: '9999px',
                  fontWeight: 600,
                  fontSize: '0.9rem',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  textDecoration: 'none',
                  transition: 'all 0.2s ease'
                }}
                className="btn-interactive"
              >
                <Terminal size={16} />
                <span>LeetCode Profile (@Paramesh137)</span>
                <ExternalLink size={14} />
              </a>
            </div>
          </div>
        )}

        {/* ===================================================================
            SLIDE 3: PROJECTS / SELECTED WORKS
            =================================================================== */}
        {activeSection === 'projects' && (
          <div 
            className="deck-slide"
            style={{
              animation: 'deckFadeIn 0.55s cubic-bezier(0.16, 1, 0.3, 1) forwards',
              width: '100%',
              maxWidth: '1100px'
            }}
          >
            {/* Upper Kicker */}
            <div 
              style={{
                textTransform: 'uppercase',
                fontSize: '0.825rem',
                fontWeight: 700,
                letterSpacing: '0.18em',
                color: 'var(--accent-light)',
                marginBottom: '0.75rem'
              }}
            >
              Precision Engineering &amp; Software
            </div>

            {/* Main Title */}
            <h2
              style={{
                fontSize: 'clamp(2.6rem, 5vw, 4.2rem)',
                fontWeight: 800,
                letterSpacing: '-0.03em',
                lineHeight: 1.1,
                marginBottom: '1.25rem',
                color: '#ffffff'
              }}
            >
              Selected Projects
            </h2>

            {/* Narrative Paragraph */}
            <p
              style={{
                fontSize: 'clamp(1rem, 2vw, 1.15rem)',
                color: 'var(--text-secondary)',
                maxWidth: '780px',
                margin: '0 auto 3rem',
                lineHeight: 1.75
              }}
            >
              Real-world systems spanning full-stack web applications, document accessibility tools, and developer productivity extensions. Click any card to view architecture specs.
            </p>

            {/* 3 Numbered Cards for Projects */}
            <div 
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: '1.75rem',
                width: '100%',
                marginBottom: '2.5rem'
              }}
              className="deck-cards-grid"
            >
              {projectsData.slice(0, 3).map((proj, idx) => (
                <div 
                  key={proj.id}
                  onClick={() => setSelectedProject(proj)}
                  className="deck-numbered-card"
                  style={{
                    background: 'rgba(14, 27, 42, 0.65)',
                    backdropFilter: 'blur(16px)',
                    WebkitBackdropFilter: 'blur(16px)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    borderRadius: '1.25rem',
                    padding: '2.25rem 2rem',
                    textAlign: 'left',
                    position: 'relative',
                    cursor: 'pointer',
                    transition: 'transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease'
                  }}
                >
                  <div 
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'baseline',
                      marginBottom: '1rem'
                    }}
                  >
                    <div 
                      style={{
                        fontSize: '2.5rem',
                        fontWeight: 800,
                        color: 'var(--accent-light)',
                        fontFamily: 'monospace',
                        letterSpacing: '-0.05em'
                      }}
                    >
                      {idx + 1}
                    </div>
                    <span 
                      style={{
                        fontSize: '0.75rem',
                        fontWeight: 600,
                        padding: '0.25rem 0.65rem',
                        borderRadius: '9999px',
                        background: 'rgba(255, 255, 255, 0.08)',
                        color: 'var(--text-secondary)'
                      }}
                    >
                      {proj.category}
                    </span>
                  </div>

                  <h3 
                    style={{
                      fontSize: '1.25rem',
                      fontWeight: 700,
                      color: '#ffffff',
                      marginBottom: '0.65rem'
                    }}
                  >
                    {proj.title}
                  </h3>

                  <p 
                    style={{
                      fontSize: '0.925rem',
                      color: 'var(--text-secondary)',
                      lineHeight: 1.65,
                      marginBottom: '1.25rem'
                    }}
                  >
                    {proj.shortDescription}
                  </p>

                  <div 
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      marginTop: 'auto'
                    }}
                  >
                    <div style={{ display: 'flex', gap: '0.35rem', flexWrap: 'wrap' }}>
                      {proj.technologies.slice(0, 3).map(tech => (
                        <span 
                          key={tech}
                          style={{
                            fontSize: '0.75rem',
                            color: 'var(--accent-light)',
                            fontWeight: 600
                          }}
                        >
                          #{tech}
                        </span>
                      ))}
                    </div>
                    <span 
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.35rem',
                        fontSize: '0.8rem',
                        fontWeight: 600,
                        color: '#ffffff'
                      }}
                    >
                      <span>Specs</span>
                      <Maximize2 size={13} />
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* View All Projects Modal Trigger */}
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
              <button
                onClick={() => setAllProjectsModalOpen(true)}
                style={{
                  background: 'var(--accent-primary)',
                  color: '#ffffff',
                  border: 'none',
                  padding: '0.8rem 2rem',
                  borderRadius: '9999px',
                  fontWeight: 600,
                  fontSize: '0.9rem',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  cursor: 'pointer',
                  boxShadow: '0 4px 20px var(--accent-glow)',
                  transition: 'all 0.2s ease'
                }}
                className="btn-interactive"
              >
                <Layers size={17} />
                <span>View All 6 Engineered Projects</span>
              </button>
            </div>
          </div>
        )}

        {/* ===================================================================
            SLIDE 4: EXPERIENCE / PROFESSIONAL EXPEDITION
            =================================================================== */}
        {activeSection === 'experience' && (
          <div 
            className="deck-slide"
            style={{
              animation: 'deckFadeIn 0.55s cubic-bezier(0.16, 1, 0.3, 1) forwards',
              width: '100%',
              maxWidth: '1100px'
            }}
          >
            {/* Upper Kicker */}
            <div 
              style={{
                textTransform: 'uppercase',
                fontSize: '0.825rem',
                fontWeight: 700,
                letterSpacing: '0.18em',
                color: 'var(--accent-light)',
                marginBottom: '0.75rem'
              }}
            >
              Professional Trajectory
            </div>

            {/* Main Title */}
            <h2
              style={{
                fontSize: 'clamp(2.6rem, 5vw, 4.2rem)',
                fontWeight: 800,
                letterSpacing: '-0.03em',
                lineHeight: 1.1,
                marginBottom: '1.25rem',
                color: '#ffffff'
              }}
            >
              Experience &amp; Roles
            </h2>

            {/* Narrative Paragraph */}
            <p
              style={{
                fontSize: 'clamp(1rem, 2vw, 1.15rem)',
                color: 'var(--text-secondary)',
                maxWidth: '780px',
                margin: '0 auto 3rem',
                lineHeight: 1.75
              }}
            >
              Industry internships in document processing, accessibility remediation, Core Java programming, and student leadership in campus tech organizations.
            </p>

            {/* 3 Numbered Cards for Experience */}
            <div 
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: '1.75rem',
                width: '100%',
                marginBottom: '2.5rem'
              }}
              className="deck-cards-grid"
            >
              {/* Exp 1: HBS */}
              <div 
                className="deck-numbered-card"
                style={{
                  background: 'rgba(14, 27, 42, 0.65)',
                  backdropFilter: 'blur(16px)',
                  WebkitBackdropFilter: 'blur(16px)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: '1.25rem',
                  padding: '2.25rem 2rem',
                  textAlign: 'left',
                  position: 'relative'
                }}
              >
                <div 
                  style={{
                    fontSize: '2.5rem',
                    fontWeight: 800,
                    color: 'var(--accent-light)',
                    marginBottom: '1rem',
                    fontFamily: 'monospace',
                    letterSpacing: '-0.05em'
                  }}
                >
                  1
                </div>
                <h3 
                  style={{
                    fontSize: '1.25rem',
                    fontWeight: 700,
                    color: '#ffffff',
                    marginBottom: '0.35rem'
                  }}
                >
                  Document Processing Intern
                </h3>
                <div 
                  style={{
                    fontSize: '0.85rem',
                    fontWeight: 600,
                    color: 'var(--accent-light)',
                    marginBottom: '0.85rem'
                  }}
                >
                  Hudsmer Business Solutions
                </div>
                <p 
                  style={{
                    fontSize: '0.925rem',
                    color: 'var(--text-secondary)',
                    lineHeight: 1.65,
                    marginBottom: '1rem'
                  }}
                >
                  Evaluated PDF accessibility (WCAG 2.1 compliance), document heading hierarchy, OCR pipelines, and assisted in automated extraction experiments.
                </p>
                <div 
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    fontSize: '0.78rem',
                    color: 'var(--text-secondary)'
                  }}
                >
                  <CheckCircle2 size={14} color="var(--accent-light)" />
                  <span>Verified Accessibility Workflow</span>
                </div>
              </div>

              {/* Exp 2: InternPe */}
              <div 
                className="deck-numbered-card"
                style={{
                  background: 'rgba(14, 27, 42, 0.65)',
                  backdropFilter: 'blur(16px)',
                  WebkitBackdropFilter: 'blur(16px)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: '1.25rem',
                  padding: '2.25rem 2rem',
                  textAlign: 'left',
                  position: 'relative'
                }}
              >
                <div 
                  style={{
                    fontSize: '2.5rem',
                    fontWeight: 800,
                    color: 'var(--accent-light)',
                    marginBottom: '1rem',
                    fontFamily: 'monospace',
                    letterSpacing: '-0.05em'
                  }}
                >
                  2
                </div>
                <h3 
                  style={{
                    fontSize: '1.25rem',
                    fontWeight: 700,
                    color: '#ffffff',
                    marginBottom: '0.35rem'
                  }}
                >
                  Java Programming Intern
                </h3>
                <div 
                  style={{
                    fontSize: '0.85rem',
                    fontWeight: 600,
                    color: 'var(--accent-light)',
                    marginBottom: '0.85rem'
                  }}
                >
                  InternPe
                </div>
                <p 
                  style={{
                    fontSize: '0.925rem',
                    color: 'var(--text-secondary)',
                    lineHeight: 1.65,
                    marginBottom: '1rem'
                  }}
                >
                  Designed modular Java console applications, Connect Four matrix logic, and OOP class hierarchies with rigorous debugging practices.
                </p>
                <div 
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    fontSize: '0.78rem',
                    color: 'var(--text-secondary)'
                  }}
                >
                  <CheckCircle2 size={14} color="var(--accent-light)" />
                  <span>OOP &amp; Core Java Algorithms</span>
                </div>
              </div>

              {/* Exp 3: SDE Treasurer */}
              <div 
                className="deck-numbered-card"
                style={{
                  background: 'rgba(14, 27, 42, 0.65)',
                  backdropFilter: 'blur(16px)',
                  WebkitBackdropFilter: 'blur(16px)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: '1.25rem',
                  padding: '2.25rem 2rem',
                  textAlign: 'left',
                  position: 'relative'
                }}
              >
                <div 
                  style={{
                    fontSize: '2.5rem',
                    fontWeight: 800,
                    color: 'var(--accent-light)',
                    marginBottom: '1rem',
                    fontFamily: 'monospace',
                    letterSpacing: '-0.05em'
                  }}
                >
                  3
                </div>
                <h3 
                  style={{
                    fontSize: '1.25rem',
                    fontWeight: 700,
                    color: '#ffffff',
                    marginBottom: '0.35rem'
                  }}
                >
                  SDE Club Treasurer
                </h3>
                <div 
                  style={{
                    fontSize: '0.85rem',
                    fontWeight: 600,
                    color: 'var(--accent-light)',
                    marginBottom: '0.85rem'
                  }}
                >
                  Karpagam College of Engineering
                </div>
                <p 
                  style={{
                    fontSize: '0.925rem',
                    color: 'var(--text-secondary)',
                    lineHeight: 1.65,
                    marginBottom: '1rem'
                  }}
                >
                  Managed event budgets, coordinated student coding challenges, and actively fostered peer code reviews across departments.
                </p>
                <div 
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    fontSize: '0.78rem',
                    color: 'var(--text-secondary)'
                  }}
                >
                  <CheckCircle2 size={14} color="var(--accent-light)" />
                  <span>Community &amp; Tech Leadership</span>
                </div>
              </div>
            </div>

            {/* Resume Action */}
            <div>
              <a
                href={personalInfo.socials.resume}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.15)',
                  color: 'var(--text-main)',
                  padding: '0.75rem 1.8rem',
                  borderRadius: '9999px',
                  fontWeight: 600,
                  fontSize: '0.9rem',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  textDecoration: 'none',
                  transition: 'all 0.2s ease'
                }}
                className="btn-interactive"
              >
                <FileText size={16} />
                <span>Download Verified Resume (Google Drive)</span>
                <ExternalLink size={14} />
              </a>
            </div>
          </div>
        )}

        {/* ===================================================================
            SLIDE 5: CONTACT US (GET IN TOUCH)
            =================================================================== */}
        {activeSection === 'contact' && (
          <div 
            className="deck-slide"
            style={{
              animation: 'deckFadeIn 0.55s cubic-bezier(0.16, 1, 0.3, 1) forwards',
              width: '100%',
              maxWidth: '1100px'
            }}
          >
            {/* Upper Kicker */}
            <div 
              style={{
                textTransform: 'uppercase',
                fontSize: '0.825rem',
                fontWeight: 700,
                letterSpacing: '0.18em',
                color: 'var(--accent-light)',
                marginBottom: '0.75rem'
              }}
            >
              Get In Touch
            </div>

            {/* Main Title */}
            <h2
              style={{
                fontSize: 'clamp(2.6rem, 5vw, 4.2rem)',
                fontWeight: 800,
                letterSpacing: '-0.03em',
                lineHeight: 1.1,
                marginBottom: '1.25rem',
                color: '#ffffff'
              }}
            >
              Contact Me
            </h2>

            {/* Narrative Paragraph */}
            <p
              style={{
                fontSize: 'clamp(1rem, 2vw, 1.15rem)',
                color: 'var(--text-secondary)',
                maxWidth: '780px',
                margin: '0 auto 3rem',
                lineHeight: 1.75
              }}
            >
              Ready to collaborate, innovate, or discuss software engineering opportunities? Reach out directly via email or professional networks.
            </p>

            {/* 3 Numbered Cards for Contact (Just like the video: 1 24/7 Support, 2 Email, 3 Phone) */}
            <div 
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: '1.75rem',
                width: '100%',
                marginBottom: '2.5rem'
              }}
              className="deck-cards-grid"
            >
              {/* Card 1: Location & Availability */}
              <div 
                className="deck-numbered-card"
                style={{
                  background: 'rgba(14, 27, 42, 0.65)',
                  backdropFilter: 'blur(16px)',
                  WebkitBackdropFilter: 'blur(16px)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: '1.25rem',
                  padding: '2.25rem 2rem',
                  textAlign: 'left',
                  position: 'relative'
                }}
              >
                <div 
                  style={{
                    fontSize: '2.5rem',
                    fontWeight: 800,
                    color: 'var(--accent-light)',
                    marginBottom: '1rem',
                    fontFamily: 'monospace',
                    letterSpacing: '-0.05em'
                  }}
                >
                  1
                </div>
                <h3 
                  style={{
                    fontSize: '1.25rem',
                    fontWeight: 700,
                    color: '#ffffff',
                    marginBottom: '0.65rem'
                  }}
                >
                  Available for Roles
                </h3>
                <p 
                  style={{
                    fontSize: '0.925rem',
                    color: 'var(--text-secondary)',
                    lineHeight: 1.65,
                    marginBottom: '1rem'
                  }}
                >
                  Open for full-time graduate roles &amp; engineering internships across 2026/2027.
                </p>
                <div 
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    fontSize: '0.85rem',
                    color: 'var(--accent-light)',
                    fontWeight: 600
                  }}
                >
                  <MapPin size={15} />
                  <span>Tamil Nadu, India • Hybrid / Remote</span>
                </div>
              </div>

              {/* Card 2: Direct Email */}
              <a 
                href={`mailto:${personalInfo.socials.email}`}
                className="deck-numbered-card"
                style={{
                  background: 'rgba(14, 27, 42, 0.65)',
                  backdropFilter: 'blur(16px)',
                  WebkitBackdropFilter: 'blur(16px)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: '1.25rem',
                  padding: '2.25rem 2rem',
                  textAlign: 'left',
                  position: 'relative',
                  textDecoration: 'none',
                  display: 'block',
                  transition: 'transform 0.25s ease, border-color 0.25s ease'
                }}
              >
                <div 
                  style={{
                    fontSize: '2.5rem',
                    fontWeight: 800,
                    color: 'var(--accent-light)',
                    marginBottom: '1rem',
                    fontFamily: 'monospace',
                    letterSpacing: '-0.05em'
                  }}
                >
                  2
                </div>
                <h3 
                  style={{
                    fontSize: '1.25rem',
                    fontWeight: 700,
                    color: '#ffffff',
                    marginBottom: '0.65rem'
                  }}
                >
                  Direct Email
                </h3>
                <p 
                  style={{
                    fontSize: '0.925rem',
                    color: 'var(--text-secondary)',
                    lineHeight: 1.65,
                    marginBottom: '1rem'
                  }}
                >
                  Reach out directly for technical interviews, questions, or project inquiries.
                </p>
                <div 
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    fontSize: '0.85rem',
                    color: 'var(--accent-light)',
                    fontWeight: 600
                  }}
                >
                  <Mail size={15} />
                  <span>{personalInfo.socials.email}</span>
                </div>
              </a>

              {/* Card 3: Social & Professional Networks */}
              <div 
                className="deck-numbered-card"
                style={{
                  background: 'rgba(14, 27, 42, 0.65)',
                  backdropFilter: 'blur(16px)',
                  WebkitBackdropFilter: 'blur(16px)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: '1.25rem',
                  padding: '2.25rem 2rem',
                  textAlign: 'left',
                  position: 'relative'
                }}
              >
                <div 
                  style={{
                    fontSize: '2.5rem',
                    fontWeight: 800,
                    color: 'var(--accent-light)',
                    marginBottom: '1rem',
                    fontFamily: 'monospace',
                    letterSpacing: '-0.05em'
                  }}
                >
                  3
                </div>
                <h3 
                  style={{
                    fontSize: '1.25rem',
                    fontWeight: 700,
                    color: '#ffffff',
                    marginBottom: '0.65rem'
                  }}
                >
                  Professional Networks
                </h3>
                <p 
                  style={{
                    fontSize: '0.925rem',
                    color: 'var(--text-secondary)',
                    lineHeight: 1.65,
                    marginBottom: '1rem'
                  }}
                >
                  Connect on LinkedIn, review source code repositories, and view problem-solving stats.
                </p>
                <div style={{ display: 'flex', gap: '0.75rem' }}>
                  <a
                    href={personalInfo.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn Profile"
                    style={{
                      background: 'rgba(255, 255, 255, 0.08)',
                      padding: '0.5rem',
                      borderRadius: '0.5rem',
                      color: '#ffffff',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      transition: 'background 0.2s ease'
                    }}
                  >
                    <LinkedinIcon size={18} />
                  </a>
                  <a
                    href={personalInfo.socials.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub Profile"
                    style={{
                      background: 'rgba(255, 255, 255, 0.08)',
                      padding: '0.5rem',
                      borderRadius: '0.5rem',
                      color: '#ffffff',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      transition: 'background 0.2s ease'
                    }}
                  >
                    <GithubIcon size={18} />
                  </a>
                  <a
                    href={personalInfo.socials.leetcode}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LeetCode Profile"
                    style={{
                      background: 'rgba(255, 255, 255, 0.08)',
                      padding: '0.5rem',
                      borderRadius: '0.5rem',
                      color: '#ffffff',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      transition: 'background 0.2s ease'
                    }}
                  >
                    <Terminal size={18} />
                  </a>
                </div>
              </div>
            </div>

            {/* Quick Send Message Trigger */}
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
              <a
                href={`mailto:${personalInfo.socials.email}?subject=Software%20Opportunity%20Inquiry%20-%20Parameshwari%20R`}
                style={{
                  background: 'var(--accent-primary)',
                  color: '#ffffff',
                  border: 'none',
                  padding: '0.85rem 2.2rem',
                  borderRadius: '9999px',
                  fontWeight: 600,
                  fontSize: '0.95rem',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.65rem',
                  textDecoration: 'none',
                  boxShadow: '0 4px 20px var(--accent-glow)',
                  transition: 'all 0.2s ease'
                }}
                className="btn-interactive"
              >
                <Mail size={18} />
                <span>Launch Mail to paramesh.ravi11@gmail.com</span>
              </a>
            </div>
          </div>
        )}
      </div>

      {/* ===================================================================
          BOTTOM NAVIGATION DECK CONTROLS (Arrows, Page Indicator, Continuous View Toggle)
          =================================================================== */}
      <div 
        style={{
          position: 'fixed',
          bottom: '1.25rem',
          left: 0,
          right: 0,
          zIndex: 800,
          pointerEvents: 'none',
          display: 'flex',
          justifyContent: 'center'
        }}
      >
        <div 
          style={{
            pointerEvents: 'auto',
            background: 'rgba(8, 14, 22, 0.85)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            border: '1px solid rgba(255, 255, 255, 0.12)',
            borderRadius: '9999px',
            padding: '0.4rem 1.25rem',
            display: 'flex',
            alignItems: 'center',
            gap: '1.25rem',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.6)'
          }}
        >
          {/* Previous Slide Button */}
          <button
            onClick={goToPrev}
            aria-label="Previous Slide"
            style={{
              background: 'transparent',
              border: 'none',
              color: 'var(--text-secondary)',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '0.35rem',
              borderRadius: '50%',
              transition: 'color 0.2s ease'
            }}
          >
            <ArrowLeft size={18} />
          </button>

          {/* Slide Indicator */}
          <div 
            style={{
              fontSize: '0.85rem',
              fontWeight: 700,
              fontFamily: 'monospace',
              letterSpacing: '0.08em',
              color: '#ffffff',
              display: 'flex',
              alignItems: 'center',
              gap: '0.4rem'
            }}
          >
            <span style={{ color: 'var(--accent-light)' }}>
              0{currentIndex + 1}
            </span>
            <span style={{ color: 'var(--text-muted)' }}>/</span>
            <span>0{sections.length}</span>
          </div>

          {/* Dots */}
          <div style={{ display: 'flex', gap: '0.35rem', alignItems: 'center' }}>
            {sections.map((sec, idx) => (
              <button
                key={sec}
                onClick={() => onNavigate(sec)}
                aria-label={`Jump to ${sec}`}
                style={{
                  width: idx === currentIndex ? '16px' : '6px',
                  height: '6px',
                  borderRadius: '9999px',
                  background: idx === currentIndex ? 'var(--accent-light)' : 'rgba(255, 255, 255, 0.2)',
                  border: 'none',
                  cursor: 'pointer',
                  padding: 0,
                  transition: 'all 0.25s ease'
                }}
              />
            ))}
          </div>

          {/* Next Slide Button */}
          <button
            onClick={goToNext}
            aria-label="Next Slide"
            style={{
              background: 'transparent',
              border: 'none',
              color: 'var(--text-secondary)',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '0.35rem',
              borderRadius: '50%',
              transition: 'color 0.2s ease'
            }}
          >
            <ArrowRight size={18} />
          </button>

          {/* Switch to Full Scroll Mode */}
          {onSwitchToFullView && (
            <button
              onClick={onSwitchToFullView}
              style={{
                marginLeft: '0.5rem',
                borderLeft: '1px solid rgba(255, 255, 255, 0.15)',
                paddingLeft: '1rem',
                background: 'transparent',
                border: 'none',
                color: 'var(--text-secondary)',
                fontSize: '0.78rem',
                fontWeight: 600,
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.35rem'
              }}
            >
              <span>Scroll View</span>
            </button>
          )}
        </div>
      </div>

      {/* ===================================================================
          MODALS: Full Project Specs, All Projects Catalog, and Deep Bio
          =================================================================== */}
      {selectedProject && (
        <ProjectModal 
          project={selectedProject} 
          onClose={() => setSelectedProject(null)} 
        />
      )}

      {/* All Projects Catalog Modal */}
      {allProjectsModalOpen && (
        <div 
          className="modal-overlay" 
          onClick={() => setAllProjectsModalOpen(false)}
          role="dialog"
          aria-modal="true"
        >
          <div 
            className="modal-content"
            onClick={e => e.stopPropagation()}
            style={{ maxWidth: '850px', maxHeight: '85vh', overflowY: 'auto' }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
              <div>
                <div style={{ textTransform: 'uppercase', fontSize: '0.75rem', fontWeight: 700, color: 'var(--accent-light)', letterSpacing: '0.12em' }}>
                  Project Catalog
                </div>
                <h3 style={{ fontSize: '1.6rem', fontWeight: 800, color: '#ffffff' }}>
                  All 6 Engineered Systems
                </h3>
              </div>
              <button 
                onClick={() => setAllProjectsModalOpen(false)}
                style={{
                  background: 'rgba(255, 255, 255, 0.08)',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: '0.5rem',
                  color: '#ffffff',
                  padding: '0.4rem 0.8rem',
                  cursor: 'pointer'
                }}
              >
                Close
              </button>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1rem' }}>
              {projectsData.map(p => (
                <div
                  key={p.id}
                  onClick={() => {
                    setAllProjectsModalOpen(false);
                    setSelectedProject(p);
                  }}
                  style={{
                    background: 'rgba(255, 255, 255, 0.03)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    borderRadius: '0.75rem',
                    padding: '1.25rem',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease'
                  }}
                  className="deck-numbered-card"
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                    <h4 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#ffffff' }}>{p.title}</h4>
                    <span style={{ fontSize: '0.72rem', color: 'var(--accent-light)', fontWeight: 600 }}>{p.category}</span>
                  </div>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.5, marginBottom: '0.75rem' }}>
                    {p.shortDescription}
                  </p>
                  <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap' }}>
                    {p.technologies.slice(0, 4).map(t => (
                      <span key={t} style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>#{t}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Deep Bio Modal */}
      {bioModalOpen && (
        <div 
          className="modal-overlay" 
          onClick={() => setBioModalOpen(false)}
          role="dialog"
          aria-modal="true"
        >
          <div 
            className="modal-content"
            onClick={e => e.stopPropagation()}
            style={{ maxWidth: '720px', maxHeight: '85vh', overflowY: 'auto' }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
              <div>
                <div style={{ textTransform: 'uppercase', fontSize: '0.75rem', fontWeight: 700, color: 'var(--accent-light)', letterSpacing: '0.12em' }}>
                  Biographical Profile
                </div>
                <h3 style={{ fontSize: '1.6rem', fontWeight: 800, color: '#ffffff' }}>
                  Engineering Journey &amp; Philosophy
                </h3>
              </div>
              <button 
                onClick={() => setBioModalOpen(false)}
                style={{
                  background: 'rgba(255, 255, 255, 0.08)',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: '0.5rem',
                  color: '#ffffff',
                  padding: '0.4rem 0.8rem',
                  cursor: 'pointer'
                }}
              >
                Close
              </button>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.75 }}>
              {personalInfo.bioFull.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
