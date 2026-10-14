import React, { useState } from 'react';
import { projectsData } from '../data/portfolio';
import type { ProjectItem } from '../types/portfolio';
import { ProjectModal } from './ProjectModal';
import { 
  FolderGit2, 
  Eye, 
  ShieldCheck,
  CheckCircle2
} from 'lucide-react';
import { GithubIcon } from './Icons';
import { TiltCard } from './TiltCard';

export const Projects: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>('All');
  const [activeModalProject, setActiveModalProject] = useState<ProjectItem | null>(null);

  const filterCategories: string[] = ['All', 'Full Stack', 'Web Development', 'Automation & Tools'];

  const filteredProjects = selectedFilter === 'All'
    ? projectsData
    : projectsData.filter((p) => p.category === selectedFilter);

  return (
    <section id="projects" className="section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <FolderGit2 size={14} />
            <span>Featured Work</span>
          </div>
          <h2 className="section-title">Projects &amp; Architectures</h2>
          <p className="section-subtitle">
            Authentic software implementations, browser extensions, full-stack applications, and document automation tools.
          </p>
        </div>

        {/* Filter Buttons */}
        <div 
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '0.65rem',
            marginBottom: '3rem'
          }}
        >
          {filterCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedFilter(cat)}
              className="btn btn-sm"
              style={{
                background: selectedFilter === cat ? 'var(--accent-primary)' : 'var(--bg-card)',
                color: selectedFilter === cat ? '#ffffff' : 'var(--text-secondary)',
                borderColor: selectedFilter === cat ? 'var(--accent-light)' : 'var(--border-card)',
                boxShadow: selectedFilter === cat ? '0 2px 10px var(--accent-glow)' : 'none'
              }}
            >
              <span>{cat}</span>
              <span 
                style={{
                  fontSize: '0.75rem',
                  opacity: 0.85,
                  padding: '0.1rem 0.45rem',
                  background: 'rgba(0, 0, 0, 0.3)',
                  borderRadius: '10px'
                }}
              >
                {cat === 'All' ? projectsData.length : projectsData.filter(p => p.category === cat).length}
              </span>
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
            gap: '2rem'
          }}
        >
          {filteredProjects.map((project) => (
            <TiltCard key={project.id} maxTilt={5} scale={1.02}>
              <div 
                className="glass-card"
                style={{
                  padding: '1.85rem 1.65rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  position: 'relative',
                  height: '100%'
                }}
              >
              <div>
                {/* Card Top: Category & Status */}
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
                    {project.category}
                  </span>
                  <div 
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.35rem',
                      fontSize: '0.75rem',
                      fontFamily: 'var(--font-mono)',
                      color: 'var(--accent-secondary-light)'
                    }}
                  >
                    <ShieldCheck size={13} />
                    <span>Verified</span>
                  </div>
                </div>

                {/* Project Title */}
                <h3 
                  style={{
                    fontSize: '1.3rem',
                    fontWeight: 700,
                    color: 'var(--text-contrast)',
                    marginBottom: '0.75rem',
                    letterSpacing: '-0.015em'
                  }}
                >
                  {project.title}
                </h3>

                {/* Short Description */}
                <p 
                  style={{
                    fontSize: '0.9rem',
                    color: 'var(--text-secondary)',
                    lineHeight: 1.6,
                    marginBottom: '1.25rem'
                  }}
                >
                  {project.shortDescription}
                </p>

                {/* Key feature preview */}
                <div style={{ marginBottom: '1.25rem' }}>
                  <div 
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.45rem',
                      fontSize: '0.8rem',
                      color: 'var(--text-main)',
                      lineHeight: 1.4
                    }}
                  >
                    <CheckCircle2 size={14} color="var(--accent-light)" style={{ flexShrink: 0 }} />
                    <span style={{ color: 'var(--text-secondary)' }}>
                      {project.keyFeatures[0]}
                    </span>
                  </div>
                </div>
              </div>

              {/* Card Footer: Tech tags + action buttons */}
              <div>
                {/* Tech Pills */}
                <div 
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '0.4rem',
                    marginBottom: '1.4rem'
                  }}
                >
                  {project.technologies.slice(0, 4).map((tech) => (
                    <span 
                      key={tech} 
                      className="badge" 
                      style={{ fontSize: '0.75rem', padding: '0.2rem 0.6rem' }}
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span 
                      className="badge" 
                      style={{ fontSize: '0.75rem', padding: '0.2rem 0.5rem', opacity: 0.7 }}
                    >
                      +{project.technologies.length - 4}
                    </span>
                  )}
                </div>

                {/* Action Buttons */}
                <div 
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                    paddingTop: '1rem',
                    borderTop: '1px solid var(--border-subtle)'
                  }}
                >
                  <button
                    onClick={() => setActiveModalProject(project)}
                    className="btn btn-primary btn-sm"
                    style={{ flex: 1 }}
                    id={`btn-details-${project.id}`}
                  >
                    <Eye size={15} />
                    <span>View Details</span>
                  </button>

                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-secondary btn-sm"
                      aria-label={`${project.title} GitHub repository`}
                    >
                      <GithubIcon size={15} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </TiltCard>
          ))}
        </div>

        {/* Modal display when a project is selected */}
        <ProjectModal 
          project={activeModalProject} 
          onClose={() => setActiveModalProject(null)} 
        />
      </div>
    </section>
  );
};
