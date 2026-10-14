import React from 'react';
import { personalInfo } from '../data/portfolio';
import { 
  Code, 
  ExternalLink, 
  Mail, 
  ArrowRight, 
  FileText, 
  MapPin,
  GraduationCap,
  Sparkles,
  Award,
  Terminal
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { Typewriter } from './Typewriter';
import { AnimatedCounter } from './AnimatedCounter';
import { TiltCard } from './TiltCard';

export const Hero: React.FC = () => {
  return (
    <section 
      id="hero" 
      className="section"
      style={{
        paddingTop: '8.5rem',
        paddingBottom: '4.5rem',
        minHeight: '90vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden'
      }}
    >

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: '1.2fr 0.8fr',
            gap: '3.5rem',
            alignItems: 'center'
          }}
          className="hero-grid"
        >
          {/* Left Column: Introductions & Actions */}
          <div style={{ textAlign: 'left' }}>
            {/* Status Beacon Pill */}
            <div 
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.65rem',
                background: 'var(--badge-bg)',
                border: '1px solid var(--badge-border)',
                padding: '0.4rem 1rem',
                borderRadius: 'var(--radius-full)',
                marginBottom: '1.5rem',
                fontSize: '0.825rem',
                fontWeight: 600,
                color: 'var(--accent-light)',
                boxShadow: '0 2px 10px var(--accent-glow)'
              }}
              className="badge-beacon-pulse"
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
                    opacity: 0.6,
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
              <span>Available for Software Roles &amp; Internships 2026/2027</span>
            </div>

            {/* Main Heading */}
            <h1 
              style={{
                fontSize: 'clamp(2.5rem, 5.2vw, 3.9rem)',
                fontWeight: 800,
                letterSpacing: '-0.035em',
                lineHeight: 1.15,
                marginBottom: '1.1rem',
                color: 'var(--text-contrast)'
              }}
            >
              Hi, I'm <span style={{ color: 'var(--accent-light)', textShadow: '0 0 25px var(--accent-glow)' }}>{personalInfo.name}</span>.
            </h1>

            {/* Interactive Typewriter Headline */}
            <div 
              style={{
                fontSize: 'clamp(1.1rem, 2.2vw, 1.35rem)',
                fontWeight: 600,
                color: 'var(--text-main)',
                marginBottom: '1.5rem',
                lineHeight: 1.5,
                letterSpacing: '-0.01em',
                minHeight: '2.2rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}
            >
              <Terminal size={20} color="var(--accent-light)" style={{ flexShrink: 0 }} />
              <Typewriter
                phrases={[
                  'Aspiring Full-Stack Software Engineer',
                  'Computer Science & Engineering Student',
                  'Problem Solver • LeetCode 500+ Solved',
                  'Treasurer • Society of Developers'
                ]}
                typingSpeed={60}
                deletingSpeed={30}
                pauseDuration={2000}
              />
            </div>

            {/* Authentic Bio */}
            <p 
              style={{
                fontSize: '1.025rem',
                color: 'var(--text-secondary)',
                lineHeight: 1.7,
                marginBottom: '2rem',
                maxWidth: '600px'
              }}
            >
              {personalInfo.bioIntro}
            </p>

            {/* College & Location tags */}
            <div 
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '0.85rem',
                marginBottom: '2.25rem'
              }}
            >
              <div 
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.45rem',
                  fontSize: '0.85rem',
                  color: 'var(--text-main)',
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border-card)',
                  padding: '0.4rem 0.95rem',
                  borderRadius: 'var(--radius-full)',
                  fontFamily: 'var(--font-mono)'
                }}
              >
                <GraduationCap size={15} color="var(--accent-light)" />
                <span>Karpagam College of Engineering (B.E. CSE &bull; 2027)</span>
              </div>

              <div 
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.45rem',
                  fontSize: '0.85rem',
                  color: 'var(--text-main)',
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border-card)',
                  padding: '0.4rem 0.95rem',
                  borderRadius: 'var(--radius-full)',
                  fontFamily: 'var(--font-mono)'
                }}
              >
                <MapPin size={15} color="var(--accent-secondary-light)" />
                <span>Tamil Nadu, India</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div 
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '0.85rem',
                marginBottom: '2.5rem'
              }}
            >
              <a href="#projects" className="btn btn-primary" id="hero-btn-projects">
                <span>Explore Projects</span>
                <ArrowRight size={16} />
              </a>

              <a 
                href={personalInfo.socials.resume} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-secondary"
                id="hero-btn-resume"
                aria-label="View Resume on Google Drive"
              >
                <FileText size={16} />
                <span>Verified Resume</span>
                <ExternalLink size={13} />
              </a>

              <a href="#contact" className="btn btn-outline" id="hero-btn-contact">
                <Mail size={16} />
                <span>Send Message</span>
              </a>

              <a 
                href={personalInfo.socials.github} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-secondary"
                id="hero-btn-github"
                aria-label="Visit GitHub Profile"
              >
                <GithubIcon size={16} />
                <span>GitHub</span>
              </a>
            </div>

            {/* Social Links Row */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.06em', fontFamily: 'var(--font-mono)' }}>
                Social Channels:
              </span>
              
              <a 
                href={personalInfo.socials.github} 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="Parameshwari R GitHub Profile"
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: 'var(--radius-full)',
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border-card)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--text-secondary)',
                  transition: 'all var(--transition-fast)'
                }}
                className="social-pill-link"
              >
                <GithubIcon size={17} />
              </a>

              <a 
                href={personalInfo.socials.linkedin} 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="Parameshwari R LinkedIn Profile"
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: 'var(--radius-full)',
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border-card)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--text-secondary)',
                  transition: 'all var(--transition-fast)'
                }}
                className="social-pill-link"
              >
                <LinkedinIcon size={17} />
              </a>

              <a 
                href={personalInfo.socials.leetcode} 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="Parameshwari R LeetCode Profile"
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: 'var(--radius-full)',
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border-card)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--text-secondary)',
                  transition: 'all var(--transition-fast)'
                }}
                className="social-pill-link"
              >
                <Code size={17} />
              </a>

              <a 
                href={`mailto:${personalInfo.socials.email}`}
                aria-label="Send Email to Parameshwari R"
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: 'var(--radius-full)',
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border-card)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--text-secondary)',
                  transition: 'all var(--transition-fast)'
                }}
                className="social-pill-link"
              >
                <Mail size={17} />
              </a>
            </div>
          </div>

          {/* Right Column: Modernized Real Photo Card with Floating Micro-Badges */}
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div 
              style={{
                position: 'relative',
                width: '100%',
                maxWidth: '370px'
              }}
            >
              {/* Floating Animated Badge: LeetCode Counter */}
              <div
                style={{
                  position: 'absolute',
                  top: '-14px',
                  right: '-12px',
                  background: 'var(--bg-surface)',
                  border: '1px solid var(--border-card-hover)',
                  borderRadius: 'var(--radius-md)',
                  padding: '0.55rem 0.85rem',
                  boxShadow: 'var(--shadow-md)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.55rem',
                  zIndex: 3,
                  animation: 'floatSlow 4s ease-in-out infinite'
                }}
                className="floating-micro-badge"
              >
                <div 
                  style={{
                    padding: '0.35rem',
                    borderRadius: 'var(--radius-sm)',
                    background: 'rgba(245, 158, 11, 0.15)',
                    color: '#f59e0b',
                    display: 'flex'
                  }}
                >
                  <Code size={16} />
                </div>
                <div>
                  <div style={{ fontSize: '0.85rem', fontWeight: 800, color: 'var(--text-contrast)' }}>
                    <AnimatedCounter target={500} suffix="+" />
                  </div>
                  <div style={{ fontSize: '0.68rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
                    LeetCode Solved
                  </div>
                </div>
              </div>

              {/* Floating Animated Badge: Experience / Internships */}
              <div
                style={{
                  position: 'absolute',
                  bottom: '72px',
                  left: '-18px',
                  background: 'var(--bg-surface)',
                  border: '1px solid var(--border-card)',
                  borderRadius: 'var(--radius-md)',
                  padding: '0.55rem 0.85rem',
                  boxShadow: 'var(--shadow-md)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.55rem',
                  zIndex: 3,
                  animation: 'floatSlow 4.5s ease-in-out infinite 1.5s'
                }}
                className="floating-micro-badge"
              >
                <div 
                  style={{
                    padding: '0.35rem',
                    borderRadius: 'var(--radius-sm)',
                    background: 'var(--badge-bg)',
                    color: 'var(--accent-light)',
                    display: 'flex'
                  }}
                >
                  <Award size={16} />
                </div>
                <div>
                  <div style={{ fontSize: '0.85rem', fontWeight: 800, color: 'var(--text-contrast)' }}>
                    <AnimatedCounter target={2} suffix=" Tech Internships" />
                  </div>
                  <div style={{ fontSize: '0.68rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
                    Hudsmer &bull; InternPe
                  </div>
                </div>
              </div>

              {/* Photo Card with 3D Tilt */}
              <TiltCard maxTilt={6} scale={1.02}>
                <div 
                  className="glass-card"
                  style={{
                    padding: '1rem',
                    borderRadius: 'var(--radius-xl)',
                    position: 'relative',
                    overflow: 'hidden',
                    border: '1.5px solid var(--border-card)'
                  }}
                >
                  {/* Photo Element */}
                  <div 
                    style={{
                      width: '100%',
                      aspectRatio: '3/4',
                      maxHeight: '390px',
                      borderRadius: 'var(--radius-lg)',
                      overflow: 'hidden',
                      background: '#ffffff',
                      position: 'relative',
                      boxShadow: 'var(--shadow-md)'
                    }}
                  >
                    <img 
                      src="/parameshwari.jpg" 
                      alt="Parameshwari R - Professional Portrait"
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        objectPosition: 'center top',
                        display: 'block'
                      }}
                      loading="eager"
                    />

                    {/* Gradient Fade Overlay at base of photo for smooth name tag */}
                    <div 
                      style={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        right: 0,
                        height: '75px',
                        background: 'linear-gradient(to top, rgba(6, 12, 19, 0.95), transparent)',
                        display: 'flex',
                        alignItems: 'flex-end',
                        padding: '1rem'
                      }}
                    >
                      <div>
                        <div style={{ fontWeight: 800, fontSize: '1.15rem', color: '#ffffff', letterSpacing: '-0.02em', lineHeight: 1.2 }}>
                          Parameshwari R
                        </div>
                        <div style={{ fontSize: '0.75rem', color: 'var(--accent-light)', fontFamily: 'var(--font-mono)', display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                          <Sparkles size={12} />
                          <span>Software Engineer Aspirant</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Quick Spec Bar below photo */}
                  <div 
                    style={{
                      marginTop: '0.85rem',
                      padding: '0.85rem 1rem',
                      background: 'var(--bg-input)',
                      border: '1px solid var(--border-card)',
                      borderRadius: 'var(--radius-md)',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center'
                    }}
                  >
                    <div style={{ textAlign: 'left' }}>
                      <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', textTransform: 'uppercase', fontFamily: 'var(--font-mono)' }}>Degree</div>
                      <div style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-contrast)' }}>B.E. CSE</div>
                    </div>
                    <div style={{ height: '24px', width: '1px', background: 'var(--border-subtle)' }} />
                    <div style={{ textAlign: 'center' }}>
                      <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', textTransform: 'uppercase', fontFamily: 'var(--font-mono)' }}>Graduation</div>
                      <div style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--accent-light)' }}>2027</div>
                    </div>
                    <div style={{ height: '24px', width: '1px', background: 'var(--border-subtle)' }} />
                    <div style={{ textAlign: 'right' }}>
                      <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', textTransform: 'uppercase', fontFamily: 'var(--font-mono)' }}>Club Role</div>
                      <div style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--accent-highlight)' }}>Treasurer</div>
                    </div>
                  </div>
                </div>
              </TiltCard>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes floatSlow {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-7px);
          }
        }
        @keyframes ping {
          75%, 100% {
            transform: scale(2);
            opacity: 0;
          }
        }
        @media (max-width: 960px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            gap: 2.5rem !important;
            text-align: center !important;
          }
          .hero-grid > div:first-child {
            text-align: center !important;
          }
          .hero-grid .social-pill-link {
            margin: 0 auto;
          }
          .hero-grid .btn {
            width: 100%;
          }
          .floating-micro-badge {
            display: none !important;
          }
        }
        .social-pill-link:hover {
          border-color: var(--accent-light) !important;
          color: #ffffff !important;
          transform: translateY(-2px);
          background: var(--bg-card-hover) !important;
        }
      `}</style>
    </section>
  );
};
