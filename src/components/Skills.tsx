import React, { useState } from 'react';
import { skillsData } from '../data/portfolio';
import type { SkillCategory } from '../types/portfolio';
import { 
  Code2, 
  Globe, 
  Database, 
  Cloud, 
  Cpu, 
  Layers, 
  Terminal, 
  CheckCircle2
} from 'lucide-react';
import { TiltCard } from './TiltCard';

export const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories: { name: string; icon: React.ReactNode }[] = [
    { name: 'All', icon: <Layers size={15} /> },
    { name: 'Languages', icon: <Terminal size={15} /> },
    { name: 'Web Development', icon: <Globe size={15} /> },
    { name: 'Databases', icon: <Database size={15} /> },
    { name: 'Cloud & Tools', icon: <Cloud size={15} /> },
    { name: 'Core & Workflows', icon: <Cpu size={15} /> },
  ];

  const categoryGroups: { category: SkillCategory; title: string; icon: React.ReactNode; color: string }[] = [
    {
      category: 'Languages',
      title: 'Programming Languages',
      icon: <Terminal size={20} color="var(--accent-light)" />,
      color: 'var(--accent-primary)'
    },
    {
      category: 'Web Development',
      title: 'Web & Full-Stack Development',
      icon: <Globe size={20} color="#38bdf8" />,
      color: '#38bdf8'
    },
    {
      category: 'Databases',
      title: 'Database Technologies',
      icon: <Database size={20} color="#10b981" />,
      color: '#10b981'
    },
    {
      category: 'Cloud & Tools',
      title: 'Cloud & Developer Tools',
      icon: <Cloud size={20} color="#f59e0b" />,
      color: '#f59e0b'
    },
    {
      category: 'Core & Workflows',
      title: 'Core CS & Specialized Workflows',
      icon: <Cpu size={20} color="#34d399" />,
      color: '#34d399'
    }
  ];

  const filteredGroups = selectedCategory === 'All' 
    ? categoryGroups 
    : categoryGroups.filter(g => g.category === selectedCategory);

  return (
    <section id="skills" className="section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <Code2 size={14} />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="section-title">Technical Skills &amp; Stack</h2>
          <p className="section-subtitle">
            Categorized technical skills, tools, and methodologies genuinely studied and applied in projects and internships.
          </p>
        </div>

        {/* Category Filters */}
        <div 
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '0.65rem',
            marginBottom: '2.75rem'
          }}
        >
          {categories.map((cat) => (
            <button
              key={cat.name}
              onClick={() => setSelectedCategory(cat.name)}
              className="btn btn-sm"
              style={{
                background: selectedCategory === cat.name ? 'var(--accent-primary)' : 'var(--bg-card)',
                color: selectedCategory === cat.name ? '#ffffff' : 'var(--text-secondary)',
                borderColor: selectedCategory === cat.name ? 'var(--accent-light)' : 'var(--border-card)',
                boxShadow: selectedCategory === cat.name ? '0 2px 10px var(--accent-glow)' : 'none'
              }}
            >
              {cat.icon}
              <span>{cat.name}</span>
            </button>
          ))}
        </div>

        {/* Skills Cards Grid */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '1.75rem'
          }}
        >
          {filteredGroups.map((group) => {
            const groupSkills = skillsData.filter(s => s.category === group.category);

            return (
              <TiltCard key={group.category} maxTilt={5} scale={1.02}>
                <div 
                  className="glass-card"
                  style={{
                    padding: '2rem 1.75rem',
                    display: 'flex',
                    flexDirection: 'column',
                    position: 'relative',
                    height: '100%'
                  }}
                >
                {/* Card Title & Icon */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', marginBottom: '1.4rem' }}>
                  <div 
                    style={{
                      padding: '0.65rem',
                      borderRadius: 'var(--radius-md)',
                      background: 'rgba(255, 255, 255, 0.05)',
                      border: '1px solid var(--border-subtle)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    {group.icon}
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--text-contrast)' }}>
                      {group.title}
                    </h3>
                    <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
                      {groupSkills.length} competencies
                    </span>
                  </div>
                </div>

                {/* Skill Badges List */}
                <div 
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '0.65rem',
                    flex: 1
                  }}
                >
                  {groupSkills.map((skill) => (
                    <div
                      key={skill.name}
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.45rem',
                        padding: '0.45rem 0.85rem',
                        borderRadius: 'var(--radius-md)',
                        background: skill.highlight 
                          ? 'var(--badge-bg)' 
                          : 'var(--bg-input)',
                        border: `1px solid ${skill.highlight ? 'var(--badge-border)' : 'var(--border-card)'}`,
                        fontSize: '0.85rem',
                        fontWeight: 500,
                        color: skill.highlight ? 'var(--text-contrast)' : 'var(--text-secondary)',
                        transition: 'all var(--transition-fast)'
                      }}
                      className="skill-pill"
                    >
                      {skill.highlight ? (
                        <CheckCircle2 size={13} color="var(--accent-light)" />
                      ) : (
                        <span 
                          style={{
                            width: '5px',
                            height: '5px',
                            borderRadius: '50%',
                            background: 'var(--text-muted)'
                          }} 
                        />
                      )}
                      <span>{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </TiltCard>
          );
        })}
        </div>

        {/* Note on Authenticity */}
        <div 
          style={{
            marginTop: '2.5rem',
            textAlign: 'center',
            fontSize: '0.85rem',
            color: 'var(--text-muted)',
            fontFamily: 'var(--font-mono)'
          }}
        >
          * Verified technical skills based on academic curriculum, project implementations, and verified internship training.
        </div>
      </div>

      <style>{`
        .skill-pill:hover {
          border-color: var(--accent-light) !important;
          background: var(--bg-card-hover) !important;
          color: #ffffff !important;
          transform: translateY(-1px);
        }
      `}</style>
    </section>
  );
};
