import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { ShowcaseDeck } from './components/ShowcaseDeck';
import { ThreeHeroScene } from './components/ThreeHeroScene';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Certifications } from './components/Certifications';
import { CodingLeadership } from './components/CodingLeadership';
import { ResumeSection } from './components/ResumeSection';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { SpotlightCursor } from './components/SpotlightCursor';

export const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('home');
  const [viewMode, setViewMode] = useState<'showcase' | 'scroll'>('scroll');
  const [currentTheme, setCurrentTheme] = useState<string>(() => {
    return localStorage.getItem('portfolio-theme') || 'teal';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', currentTheme);
    localStorage.setItem('portfolio-theme', currentTheme);
  }, [currentTheme]);

  // Handle URL hash changes
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash) {
        if (hash === 'hero') setActiveSection('home');
        else setActiveSection(hash);
      }
    };
    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  // Scroll listener only active when in continuous scroll mode
  useEffect(() => {
    if (viewMode !== 'scroll') return;

    const sections = ['hero', 'about', 'skills', 'experience', 'projects', 'certifications', 'resume', 'contact'];
    
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId === 'hero' ? 'home' : sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [viewMode]);

  const handleNavigate = (sectionId: string) => {
    const target = sectionId === 'hero' ? 'home' : sectionId;
    setActiveSection(target);
    window.location.hash = target === 'home' ? '#home' : `#${target}`;

    if (viewMode === 'scroll') {
      const elementId = target === 'home' ? 'hero' : target;
      const element = document.getElementById(elementId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleToggleViewMode = () => {
    setViewMode((prev) => (prev === 'showcase' ? 'scroll' : 'showcase'));
  };

  return (
    <>
      {/* Skip to Content for Accessibility */}
      <a 
        href="#main-content" 
        style={{
          position: 'absolute',
          top: '-100px',
          left: '1rem',
          background: 'var(--accent-primary)',
          color: '#ffffff',
          padding: '0.75rem 1.25rem',
          zIndex: 9999,
          borderRadius: 'var(--radius-sm)',
          fontWeight: 600,
          transition: 'top 0.2s ease'
        }}
        onFocus={(e) => (e.currentTarget.style.top = '1rem')}
        onBlur={(e) => (e.currentTarget.style.top = '-100px')}
      >
        Skip to main content
      </a>

      {/* Smooth Global Interactive Cursor Spotlight */}
      <SpotlightCursor />

      {/* Global Interactive 3D Developer Background (Active across entire website with parallax) */}
      <ThreeHeroScene isGlobal={true} />

      {/* Modern Floating Island Navbar with Theme Switcher & Mode Toggle */}
      <Navbar 
        activeSection={activeSection} 
        currentTheme={currentTheme}
        onThemeChange={setCurrentTheme}
        onNavigate={handleNavigate}
        viewMode={viewMode}
        onToggleViewMode={handleToggleViewMode}
      />

      {/* MAIN VIEW: CINEMATIC SHOWCASE DECK (DEFAULT) OR CONTINUOUS SCROLL */}
      <main id="main-content">
        {viewMode === 'showcase' ? (
          <ShowcaseDeck 
            activeSection={activeSection} 
            onNavigate={handleNavigate}
            onSwitchToFullView={() => setViewMode('scroll')}
          />
        ) : (
          <>
            {/* Ambient Background Grid */}
            <div className="ambient-bg" aria-hidden="true" />

            <Hero />
            <About />
            <Skills />
            <Experience />
            <Projects />
            <Certifications />
            <CodingLeadership />
            <ResumeSection />
            <Contact />
            <Footer />
          </>
        )}
      </main>
    </>
  );
};

export default App;
