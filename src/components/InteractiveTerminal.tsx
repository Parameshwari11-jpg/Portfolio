import React, { useState } from 'react';
import { Terminal, Copy, Check, Play, Sparkles } from 'lucide-react';

export const InteractiveTerminal: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'java' | 'ts' | 'bash'>('java');
  const [copied, setCopied] = useState(false);
  const [isRunning, setIsRunning] = useState(false);
  const [outputLogs, setOutputLogs] = useState<string[]>([
    'Compiled successfully with 0 errors.',
    'System ready: JVM 21, Spring Context initialized.',
    'Parameshwari.java loaded.'
  ]);

  const snippets = {
    java: `// Parameshwari.java - Core Developer Blueprint
package com.parameshwari.portfolio;

public class SoftwareEngineer {
    private final String name = "Parameshwari R";
    private final String college = "Karpagam College of Engineering";
    private final int graduationYear = 2027;
    private final String[] coreStack = {"Java", "React", "Node.js", "MongoDB"};

    public void executeMission() {
        System.out.println("Building scalable, accessible software solutions.");
        solveProblems(500 /* LeetCode DSA */);
        deliverImpact("Hudsmer Solutions", "InternPe");
    }
}`,
    ts: `// portfolio.config.ts - Technical Architecture
export interface DeveloperProfile {
  name: "Parameshwari R";
  degree: "B.E. Computer Science & Engineering";
  graduation: 2027;
  status: "Open to 2026/2027 Software Roles";
  specializations: [
    "Full-Stack MERN Architecture",
    "Java OOP & Algorithmic Problem Solving",
    "Digital Document Accessibility (WCAG 2.1)"
  ];
  leadership: "Treasurer @ Society of Developers (SDE)";
}`,
    bash: `# terminal.sh - Environment Verification
$ git clone https://github.com/Parameshwari11-jpg/portfolio.git
$ cd portfolio && npm install
$ npm run build
> vite build: 1937 modules transformed.
> dist/assets/index.js [321 kB] gzip: 92 kB
✓ Build complete in 488ms. Ready for production.`
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(snippets[activeTab]);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleRunCode = () => {
    setIsRunning(true);
    setOutputLogs(['Initiating runtime environment...', 'Compiling source files...']);
    setTimeout(() => {
      setOutputLogs([
        'Compiled successfully in 142ms.',
        'Executing com.parameshwari.portfolio.SoftwareEngineer...',
        '>> Output: "Building scalable, accessible software solutions."',
        '>> LeetCode Milestone: 500+ problems verified.',
        '>> Status: Ready for Technical Interviews & Internship Deployments. ✨'
      ]);
      setIsRunning(false);
    }, 900);
  };

  return (
    <div
      style={{
        background: '#090d14',
        border: '1.5px solid var(--border-card)',
        borderRadius: 'var(--radius-xl)',
        overflow: 'hidden',
        boxShadow: '0 20px 45px -12px rgba(0, 0, 0, 0.75)',
        fontFamily: 'var(--font-mono)',
        fontSize: '0.85rem',
        position: 'relative'
      }}
      className="developer-terminal-box"
    >
      {/* Terminal Title Bar */}
      <div
        style={{
          background: '#06090e',
          padding: '0.75rem 1.15rem',
          borderBottom: '1px solid var(--border-card)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '1rem'
        }}
      >
        {/* Window dots */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
          <span style={{ width: '11px', height: '11px', borderRadius: '50%', background: '#ef4444', display: 'inline-block' }} />
          <span style={{ width: '11px', height: '11px', borderRadius: '50%', background: '#eab308', display: 'inline-block' }} />
          <span style={{ width: '11px', height: '11px', borderRadius: '50%', background: '#22c55e', display: 'inline-block' }} />
          <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginLeft: '0.5rem', fontWeight: 600 }}>
            bash &bull; parameshwari-workspace
          </span>
        </div>

        {/* Tab Switcher */}
        <div style={{ display: 'flex', gap: '0.35rem' }}>
          <button
            onClick={() => setActiveTab('java')}
            style={{
              padding: '0.25rem 0.65rem',
              borderRadius: 'var(--radius-sm)',
              background: activeTab === 'java' ? 'var(--badge-bg)' : 'transparent',
              color: activeTab === 'java' ? 'var(--accent-light)' : 'var(--text-muted)',
              border: `1px solid ${activeTab === 'java' ? 'var(--badge-border)' : 'transparent'}`,
              cursor: 'pointer',
              fontSize: '0.75rem',
              fontFamily: 'inherit'
            }}
          >
            Parameshwari.java
          </button>
          <button
            onClick={() => setActiveTab('ts')}
            style={{
              padding: '0.25rem 0.65rem',
              borderRadius: 'var(--radius-sm)',
              background: activeTab === 'ts' ? 'var(--badge-bg)' : 'transparent',
              color: activeTab === 'ts' ? 'var(--accent-light)' : 'var(--text-muted)',
              border: `1px solid ${activeTab === 'ts' ? 'var(--badge-border)' : 'transparent'}`,
              cursor: 'pointer',
              fontSize: '0.75rem',
              fontFamily: 'inherit'
            }}
          >
            profile.ts
          </button>
          <button
            onClick={() => setActiveTab('bash')}
            style={{
              padding: '0.25rem 0.65rem',
              borderRadius: 'var(--radius-sm)',
              background: activeTab === 'bash' ? 'var(--badge-bg)' : 'transparent',
              color: activeTab === 'bash' ? 'var(--accent-light)' : 'var(--text-muted)',
              border: `1px solid ${activeTab === 'bash' ? 'var(--badge-border)' : 'transparent'}`,
              cursor: 'pointer',
              fontSize: '0.75rem',
              fontFamily: 'inherit'
            }}
          >
            build.sh
          </button>
        </div>

        {/* Action icons: Run and Copy */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <button
            onClick={handleRunCode}
            disabled={isRunning}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.35rem',
              padding: '0.25rem 0.65rem',
              borderRadius: 'var(--radius-sm)',
              background: 'rgba(16, 185, 129, 0.15)',
              border: '1px solid rgba(16, 185, 129, 0.35)',
              color: '#34d399',
              cursor: 'pointer',
              fontSize: '0.72rem',
              fontFamily: 'inherit'
            }}
            title="Execute Code"
          >
            <Play size={11} fill="#34d399" />
            <span>{isRunning ? 'Running...' : 'Run'}</span>
          </button>

          <button
            onClick={handleCopy}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.35rem',
              padding: '0.25rem 0.65rem',
              borderRadius: 'var(--radius-sm)',
              background: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid var(--border-subtle)',
              color: 'var(--text-muted)',
              cursor: 'pointer',
              fontSize: '0.72rem',
              fontFamily: 'inherit'
            }}
            title="Copy snippet"
          >
            {copied ? <Check size={11} color="#34d399" /> : <Copy size={11} />}
            <span>{copied ? 'Copied' : 'Copy'}</span>
          </button>
        </div>
      </div>

      {/* Code Editor Body */}
      <div
        style={{
          padding: '1.25rem',
          overflowX: 'auto',
          lineHeight: 1.6,
          color: '#cbd5e1',
          background: 'rgba(5, 9, 15, 0.95)',
          minHeight: '220px'
        }}
      >
        <pre style={{ margin: 0, fontFamily: 'inherit' }}>
          <code>
            {snippets[activeTab].split('\n').map((line, i) => (
              <div key={i} style={{ display: 'flex', gap: '1rem' }}>
                <span
                  style={{
                    userSelect: 'none',
                    color: 'rgba(255, 255, 255, 0.2)',
                    textAlign: 'right',
                    width: '24px',
                    flexShrink: 0
                  }}
                >
                  {i + 1}
                </span>
                <span
                  style={{
                    color: line.startsWith('//') || line.startsWith('#')
                      ? '#64748b'
                      : line.includes('public class') || line.includes('export interface') || line.includes('private final')
                      ? 'var(--accent-light)'
                      : line.includes('String') || line.includes('int')
                      ? '#38bdf8'
                      : line.includes('"')
                      ? '#facc15'
                      : '#e2e8f0'
                  }}
                >
                  {line}
                </span>
              </div>
            ))}
          </code>
        </pre>
      </div>

      {/* Terminal Live Output Console */}
      <div
        style={{
          borderTop: '1px solid var(--border-card)',
          background: '#04070c',
          padding: '0.85rem 1.15rem',
          fontSize: '0.75rem',
          color: 'var(--text-muted)'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', marginBottom: '0.35rem', color: 'var(--text-main)', fontWeight: 600 }}>
          <Terminal size={13} color="var(--accent-light)" />
          <span>Interactive Execution Console</span>
          <Sparkles size={11} color="var(--accent-light)" />
        </div>
        {outputLogs.map((log, index) => (
          <div
            key={index}
            style={{
              color: log.includes('successfully') || log.includes('Ready') || log.includes('Output')
                ? '#34d399'
                : 'var(--text-secondary)',
              fontFamily: 'inherit',
              paddingLeft: '1rem'
            }}
          >
            {log}
          </div>
        ))}
      </div>
    </div>
  );
};
