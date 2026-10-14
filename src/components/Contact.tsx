import React, { useState } from 'react';
import { personalInfo } from '../data/portfolio';
import { 
  Mail, 
  Send, 
  Copy, 
  Check, 
  AlertCircle,
  ExternalLink,
  Sparkles,
  Loader2,
  CheckCircle2,
  MessageSquare
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [copiedEmail, setCopiedEmail] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'fallback_ready' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.socials.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    if (errorMessage) setErrorMessage(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Client-side validations
    if (!formData.name.trim()) {
      setErrorMessage('Please enter your name.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email.trim())) {
      setErrorMessage('Please enter a valid email address.');
      return;
    }

    if (!formData.subject.trim()) {
      setErrorMessage('Please enter a subject.');
      return;
    }

    if (formData.message.trim().length < 10) {
      setErrorMessage('Message must be at least 10 characters long.');
      return;
    }

    setIsSubmitting(true);
    setErrorMessage(null);

    try {
      // Direct live email sending via FormSubmit endpoint
      const response = await fetch(`https://formsubmit.co/ajax/${personalInfo.socials.email}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          _subject: `Portfolio Message from ${formData.name}: ${formData.subject}`,
          message: formData.message,
          _template: 'table',
          _captcha: 'false'
        })
      });

      const data = await response.json().catch(() => null);

      if (response.ok || (data && (data.success === 'true' || data.success === true))) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        // In case API returns non-200, offer graceful 1-click fallback
        setSubmitStatus('fallback_ready');
      }
    } catch {
      // In case of ad-blocker or network restriction, provide direct email fallback
      setSubmitStatus('fallback_ready');
    } finally {
      setIsSubmitting(false);
    }
  };

  const launchMailClient = () => {
    const mailtoSubject = encodeURIComponent(`[Portfolio Inquiry] ${formData.subject}`);
    const mailtoBody = encodeURIComponent(
      `Hi Parameshwari,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:${personalInfo.socials.email}?subject=${mailtoSubject}&body=${mailtoBody}`;
  };

  const gmailWebComposeUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(personalInfo.socials.email)}&su=${encodeURIComponent(formData.subject ? `[Portfolio] ${formData.subject}` : 'Portfolio Collaboration Inquiry')}&body=${encodeURIComponent(formData.message ? `From: ${formData.name} (${formData.email})\n\n${formData.message}` : '')}`;

  return (
    <section id="contact" className="section" style={{ position: 'relative' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <Mail size={14} />
            <span>Connect &amp; Collaborate</span>
          </div>
          <h2 className="section-title">Get in Touch</h2>
          <p className="section-subtitle">
            Send a direct message to my inbox or connect via LinkedIn, GitHub, and email. Open to 2026/2027 internships, junior roles, and projects.
          </p>
        </div>

        {/* Contact Grid: Info Cards + Live Form */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: '0.9fr 1.1fr',
            gap: '2.5rem',
            alignItems: 'start'
          }}
          className="contact-grid"
        >
          {/* Left Column: Contact Channels */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            {/* Primary Email Card */}
            <div className="glass-card" style={{ padding: '1.75rem 1.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                <div 
                  style={{
                    padding: '0.65rem',
                    borderRadius: 'var(--radius-md)',
                    background: 'var(--bg-input)',
                    border: '1px solid var(--border-card)',
                    color: 'var(--accent-light)'
                  }}
                >
                  <Mail size={22} />
                </div>
                <div>
                  <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--text-contrast)' }}>Direct Email</h3>
                  <p style={{ fontSize: '0.825rem', color: 'var(--text-muted)' }}>Inbox checked daily &bull; 24h response</p>
                </div>
              </div>

              {/* Email Address Display Box with Copy Button */}
              <div 
                style={{
                  background: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: 'var(--radius-md)',
                  padding: '0.75rem 1rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '0.5rem',
                  marginBottom: '1rem'
                }}
              >
                <span 
                  style={{ 
                    fontFamily: 'var(--font-mono)', 
                    fontSize: '0.875rem', 
                    color: 'var(--text-main)',
                    wordBreak: 'break-all'
                  }}
                >
                  {personalInfo.socials.email}
                </span>

                <button
                  onClick={handleCopyEmail}
                  className="btn btn-sm btn-secondary"
                  style={{ padding: '0.35rem 0.75rem', fontSize: '0.8rem', flexShrink: 0 }}
                  aria-label="Copy email address"
                >
                  {copiedEmail ? <Check size={14} color="#10b981" /> : <Copy size={14} />}
                  <span>{copiedEmail ? 'Copied! ✨' : 'Copy'}</span>
                </button>
              </div>

              {/* Action buttons: Web Gmail & Native App */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.65rem' }}>
                <a 
                  href={gmailWebComposeUrl} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline btn-sm"
                  style={{ justifyContent: 'center' }}
                  title="Open directly in Google Gmail in browser"
                >
                  <Mail size={14} />
                  <span>Open in Gmail</span>
                </a>

                <a 
                  href={`mailto:${personalInfo.socials.email}`} 
                  className="btn btn-secondary btn-sm"
                  style={{ justifyContent: 'center' }}
                  title="Open in your computer's mail application"
                >
                  <Send size={14} />
                  <span>Mail App</span>
                </a>
              </div>
            </div>

            {/* Social Networks Cards */}
            <div className="glass-card" style={{ padding: '1.75rem 1.5rem' }}>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--text-contrast)', marginBottom: '1.25rem' }}>
                Professional Networks
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                <a
                  href={personalInfo.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '0.85rem 1rem',
                    borderRadius: 'var(--radius-md)',
                    background: 'rgba(255, 255, 255, 0.03)',
                    border: '1px solid var(--border-subtle)',
                    transition: 'all var(--transition-fast)'
                  }}
                  className="contact-social-row"
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <LinkedinIcon size={20} color="#0a66c2" />
                    <div>
                      <div style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--text-contrast)' }}>LinkedIn</div>
                      <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Connect &amp; Message</div>
                    </div>
                  </div>
                  <ExternalLink size={15} color="var(--text-muted)" />
                </a>

                <a
                  href={personalInfo.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '0.85rem 1rem',
                    borderRadius: 'var(--radius-md)',
                    background: 'rgba(255, 255, 255, 0.03)',
                    border: '1px solid var(--border-subtle)',
                    transition: 'all var(--transition-fast)'
                  }}
                  className="contact-social-row"
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <GithubIcon size={20} color="var(--text-contrast)" />
                    <div>
                      <div style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--text-contrast)' }}>GitHub</div>
                      <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Follow &amp; Star Repos</div>
                    </div>
                  </div>
                  <ExternalLink size={15} color="var(--text-muted)" />
                </a>
              </div>
            </div>

            {/* Availability info card */}
            <div 
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                padding: '1rem',
                borderRadius: 'var(--radius-md)',
                background: 'rgba(16, 185, 129, 0.08)',
                border: '1px solid rgba(16, 185, 129, 0.25)'
              }}
            >
              <div 
                style={{
                  width: '10px',
                  height: '10px',
                  borderRadius: '50%',
                  background: '#10b981',
                  boxShadow: '0 0 8px #10b981',
                  flexShrink: 0
                }}
              />
              <div style={{ fontSize: '0.85rem', color: '#34d399', lineHeight: 1.5 }}>
                <strong>Current Status:</strong> Actively preparing for 2026/2027 software developer roles, internships, and research collaborations.
              </div>
            </div>
          </div>

          {/* Right Column: Live Working Contact Form */}
          <div className="glass-card" style={{ padding: '2.5rem 2rem', position: 'relative' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
              <h3 style={{ fontSize: '1.35rem', fontWeight: 700, color: 'var(--text-contrast)' }}>
                Send a Direct Message
              </h3>
              <span 
                style={{
                  fontSize: '0.75rem',
                  fontFamily: 'var(--font-mono)',
                  color: 'var(--accent-light)',
                  background: 'var(--badge-bg)',
                  padding: '0.2rem 0.6rem',
                  borderRadius: 'var(--radius-full)',
                  border: '1px solid var(--badge-border)'
                }}
              >
                Direct Delivery
              </span>
            </div>

            <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '1.75rem' }}>
              Your message will be sent directly to Parameshwari's inbox (<span style={{ color: 'var(--accent-light)' }}>paramesh.ravi11@gmail.com</span>).
            </p>

            {/* Success Notification Banner */}
            {submitStatus === 'success' && (
              <div 
                style={{
                  padding: '1.5rem',
                  borderRadius: 'var(--radius-lg)',
                  background: 'rgba(16, 185, 129, 0.14)',
                  border: '1.5px solid rgba(16, 185, 129, 0.4)',
                  marginBottom: '1.75rem',
                  animation: 'fadeIn 0.3s ease-out'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
                  <CheckCircle2 size={24} color="#10b981" />
                  <h4 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#34d399' }}>
                    Message Sent Successfully! 🎉
                  </h4>
                </div>
                <p style={{ fontSize: '0.875rem', color: 'var(--text-main)', lineHeight: 1.6, marginBottom: '1rem' }}>
                  Thank you! Your message has been dispatched directly to Parameshwari's email inbox. You will receive a response shortly.
                </p>
                <button
                  onClick={() => setSubmitStatus('idle')}
                  className="btn btn-sm btn-secondary"
                  style={{ fontSize: '0.8rem' }}
                >
                  <span>Send Another Message</span>
                </button>
              </div>
            )}

            {/* Fallback Option Banner (when network blocks automated API) */}
            {submitStatus === 'fallback_ready' && (
              <div 
                style={{
                  padding: '1.25rem',
                  borderRadius: 'var(--radius-lg)',
                  background: 'rgba(245, 158, 11, 0.12)',
                  border: '1.5px solid rgba(245, 158, 11, 0.35)',
                  marginBottom: '1.75rem',
                  animation: 'fadeIn 0.3s ease-out'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '0.5rem' }}>
                  <MessageSquare size={20} color="#f59e0b" />
                  <h4 style={{ fontSize: '1rem', fontWeight: 700, color: '#fbbf24' }}>
                    Ready to Dispatch Message
                  </h4>
                </div>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.5, marginBottom: '1rem' }}>
                  Please click below to launch your email client or Gmail directly with all your message fields filled in:
                </p>
                <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                  <button
                    onClick={launchMailClient}
                    className="btn btn-primary btn-sm"
                  >
                    <Send size={14} />
                    <span>Send via Mail App</span>
                  </button>
                  <a
                    href={gmailWebComposeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-secondary btn-sm"
                  >
                    <Mail size={14} />
                    <span>Send via Gmail Web</span>
                  </a>
                </div>
              </div>
            )}

            {/* Error Message */}
            {errorMessage && (
              <div 
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.65rem',
                  padding: '0.85rem 1rem',
                  borderRadius: 'var(--radius-md)',
                  marginBottom: '1.25rem',
                  background: 'rgba(239, 68, 68, 0.12)',
                  border: '1px solid rgba(239, 68, 68, 0.3)',
                  color: '#f87171',
                  fontSize: '0.875rem'
                }}
              >
                <AlertCircle size={17} style={{ flexShrink: 0 }} />
                <span>{errorMessage}</span>
              </div>
            )}

            {/* Main Form */}
            <form onSubmit={handleSubmit} noValidate>
              <div className="form-group">
                <label htmlFor="contact-name" className="form-label">
                  Your Name <span style={{ color: 'var(--accent-light)' }}>*</span>
                </label>
                <input
                  type="text"
                  id="contact-name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="e.g. Alex Johnson"
                  className="form-input"
                  required
                  disabled={isSubmitting}
                />
              </div>

              <div className="form-group">
                <label htmlFor="contact-email" className="form-label">
                  Your Email <span style={{ color: 'var(--accent-light)' }}>*</span>
                </label>
                <input
                  type="email"
                  id="contact-email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="e.g. alex@company.com"
                  className="form-input"
                  required
                  disabled={isSubmitting}
                />
              </div>

              <div className="form-group">
                <label htmlFor="contact-subject" className="form-label">
                  Subject <span style={{ color: 'var(--accent-light)' }}>*</span>
                </label>
                <input
                  type="text"
                  id="contact-subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="e.g. Software Engineering Opportunity / Collaboration"
                  className="form-input"
                  required
                  disabled={isSubmitting}
                />
              </div>

              <div className="form-group">
                <label htmlFor="contact-message" className="form-label">
                  Message <span style={{ color: 'var(--accent-light)' }}>*</span>
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Hello Parameshwari, I came across your portfolio and wanted to reach out regarding..."
                  className="form-textarea"
                  style={{ minHeight: '130px' }}
                  required
                  disabled={isSubmitting}
                />
              </div>

              <button
                type="submit"
                className="btn btn-primary"
                style={{ 
                  width: '100%', 
                  marginTop: '0.85rem',
                  padding: '0.85rem 1.5rem',
                  fontSize: '0.95rem'
                }}
                id="btn-submit-contact"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 size={18} className="animate-spin" />
                    <span>Sending Message Directly...</span>
                  </>
                ) : (
                  <>
                    <Send size={16} />
                    <span>Send Message to Parameshwari</span>
                    <Sparkles size={14} />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 960px) {
          .contact-grid {
            grid-template-columns: 1fr !important;
          }
        }
        .contact-social-row:hover {
          border-color: var(--accent-light) !important;
          background: var(--bg-card-hover) !important;
          transform: translateY(-2px);
        }
        .animate-spin {
          animation: spin 1s linear infinite;
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </section>
  );
};
