import React, { useState } from 'react';
import { personalInfo } from '../data/portfolio';
import { Menu, X, ExternalLink, Eye, Film } from 'lucide-react';

interface NavbarProps {
  activeSection: string;
  currentTheme: string;
  onThemeChange: (theme: string) => void;
  onNavigate?: (sectionId: string) => void;
  viewMode?: 'showcase' | 'scroll';
  onToggleViewMode?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ 
  activeSection, 
  currentTheme, 
  onThemeChange,
  onNavigate,
  viewMode = 'showcase',
  onToggleViewMode
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', id: 'home', href: '#home' },
    { name: 'About', id: 'about', href: '#about' },
    { name: 'Skills', id: 'skills', href: '#skills' },
    { name: 'Projects', id: 'projects', href: '#projects' },
    { name: 'Experience', id: 'experience', href: '#experience' },
    { name: 'Contact', id: 'contact', href: '#contact' },
  ];

  const themes = [
    { id: 'teal', label: 'Mint Teal', color: '#2dd4bf' },
    { id: 'titanium', label: 'Titanium', color: '#e2e8f0' },
    { id: 'amber', label: 'Warm Amber', color: '#fbbf24' },
  ];

  const cycleTheme = () => {
    const currentIndex = themes.findIndex(t => t.id === currentTheme);
    const nextTheme = themes[(currentIndex + 1) % themes.length].id;
    onThemeChange(nextTheme);
  };

  const currentThemeObj = themes.find(t => t.id === currentTheme) || themes[0];

  const handleLinkClick = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate(id);
    } else {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <header
      style={{
        position: 'fixed',
        top: '1rem',
        left: 0,
        right: 0,
        zIndex: 900,
        pointerEvents: 'none'
      }}
    >
      <div 
        className="container"
        style={{
          display: 'flex',
          justifyContent: 'center',
          padding: '0 1rem'
        }}
      >
        <div
          style={{
            pointerEvents: 'auto',
            width: '100%',
            maxWidth: '1100px',
            background: 'rgba(8, 14, 22, 0.82)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            border: '1px solid rgba(255, 255, 255, 0.12)',
            borderRadius: '9999px',
            padding: '0.45rem 1.15rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.5)'
          }}
          className="floating-nav-island"
        >
          {/* Brand Logo & Name */}
          <a
            href="#home"
            onClick={(e) => handleLinkClick(e, 'home')}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              textDecoration: 'none'
            }}
            aria-label="Parameshwari R Home"
          >
            <div
              style={{
                width: '34px',
                height: '34px',
                borderRadius: '50%',
                background: 'var(--accent-primary)',
                border: '1.5px solid rgba(255, 255, 255, 0.2)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: 800,
                fontSize: '0.85rem',
                color: '#ffffff',
                boxShadow: '0 2px 10px var(--accent-glow)'
              }}
            >
              PR
            </div>
            <div>
              <div style={{ fontWeight: 800, fontSize: '0.95rem', color: '#ffffff', letterSpacing: '0.04em', lineHeight: 1.2 }}>
                PARAMESHWARI
              </div>
              <div style={{ fontSize: '0.7rem', color: 'var(--accent-light)', fontWeight: 600, letterSpacing: '0.02em' }}>
                B.E. CSE &bull; 2027
              </div>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.25rem'
            }}
            className="desktop-nav"
          >
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.id)}
                  style={{
                    fontSize: '0.85rem',
                    fontWeight: isActive ? 600 : 500,
                    color: isActive ? '#ffffff' : 'var(--text-secondary)',
                    background: isActive ? 'rgba(255, 255, 255, 0.1)' : 'transparent',
                    border: `1px solid ${isActive ? 'rgba(255, 255, 255, 0.18)' : 'transparent'}`,
                    padding: '0.4rem 0.9rem',
                    borderRadius: '9999px',
                    transition: 'all 0.2s ease',
                    textDecoration: 'none'
                  }}
                  className="nav-link-pill"
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Action Group */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
            {/* View Mode Toggle: Cinematic vs Scroll */}
            {onToggleViewMode && (
              <button
                onClick={onToggleViewMode}
                style={{
                  background: viewMode === 'showcase' ? 'rgba(45, 212, 191, 0.15)' : 'rgba(255, 255, 255, 0.06)',
                  border: `1px solid ${viewMode === 'showcase' ? 'var(--accent-light)' : 'rgba(255, 255, 255, 0.15)'}`,
                  color: viewMode === 'showcase' ? 'var(--accent-light)' : 'var(--text-secondary)',
                  padding: '0.4rem 0.8rem',
                  borderRadius: '9999px',
                  fontSize: '0.78rem',
                  fontWeight: 600,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}
                title={viewMode === 'showcase' ? 'Switch to Continuous Scroll View' : 'Switch to Cinematic 3D Deck View'}
              >
                {viewMode === 'showcase' ? <Film size={14} /> : <Eye size={14} />}
                <span className="desktop-nav">{viewMode === 'showcase' ? 'Showcase' : 'Full Page'}</span>
              </button>
            )}

            {/* Live Theme Switcher */}
            <button
              onClick={cycleTheme}
              style={{
                background: 'rgba(255, 255, 255, 0.06)',
                border: '1px solid rgba(255, 255, 255, 0.12)',
                color: 'var(--text-main)',
                padding: '0.4rem 0.85rem',
                borderRadius: '9999px',
                fontSize: '0.78rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.45rem',
                cursor: 'pointer'
              }}
              title="Switch Color Theme"
              aria-label={`Current theme: ${currentThemeObj.label}. Click to switch.`}
            >
              <span 
                style={{
                  width: '9px',
                  height: '9px',
                  borderRadius: '50%',
                  background: currentThemeObj.color,
                  boxShadow: `0 0 6px ${currentThemeObj.color}`
                }} 
              />
              <span className="theme-label-text desktop-nav">{currentThemeObj.label}</span>
            </button>

            {/* Resume Button */}
            <a
              href={personalInfo.socials.resume}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                background: 'var(--accent-primary)',
                color: '#ffffff',
                border: 'none',
                padding: '0.45rem 1.15rem',
                borderRadius: '9999px',
                fontSize: '0.825rem',
                fontWeight: 600,
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.35rem',
                textDecoration: 'none',
                boxShadow: '0 2px 10px var(--accent-glow)'
              }}
              className="desktop-resume-btn"
            >
              <span>Resume</span>
              <ExternalLink size={13} />
            </a>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              style={{
                background: 'transparent',
                border: 'none',
                color: '#ffffff',
                cursor: 'pointer',
                padding: '0.4rem',
                display: 'none'
              }}
              className="mobile-hamburger"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          style={{
            pointerEvents: 'auto',
            background: 'rgba(8, 14, 22, 0.98)',
            borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
            padding: '1.25rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.85rem'
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.id)}
              style={{
                color: '#ffffff',
                textDecoration: 'none',
                fontSize: '1rem',
                fontWeight: 600,
                padding: '0.5rem 0'
              }}
            >
              {link.name}
            </a>
          ))}
          <a
            href={personalInfo.socials.resume}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              background: 'var(--accent-primary)',
              color: '#ffffff',
              padding: '0.65rem 1rem',
              borderRadius: '9999px',
              textAlign: 'center',
              fontWeight: 600,
              textDecoration: 'none',
              marginTop: '0.5rem'
            }}
          >
            View Resume PDF
          </a>
        </div>
      )}
    </header>
  );
};
