import React from 'react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          {/* Left: Logo and Description */}
          <div style={{ textAlign: 'center' }}>
            <div className="footer-brand">
              <div className="navbar-logo">YN</div>
              <span style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>Your Name</span>
            </div>
            <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', maxWidth: '300px', margin: '0 auto' }}>
              BCA Graduate passionate about creating innovative web solutions and turning ideas into digital reality.
            </p>
          </div>

          {/* Center: Quick Links */}
          <div style={{ textAlign: 'center' }}>
            <h3 style={{ fontWeight: '600', marginBottom: '1rem' }}>Quick Links</h3>
            <div className="footer-links">
              <a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}>
                About
              </a>
              <a href="#skills" onClick={(e) => { e.preventDefault(); scrollToSection('skills'); }}>
                Skills
              </a>
              <a href="#projects" onClick={(e) => { e.preventDefault(); scrollToSection('projects'); }}>
                Projects
              </a>
              <a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>
                Contact
              </a>
            </div>
          </div>

          {/* Right: Social Links and Back to Top */}
          <div style={{ textAlign: 'center' }}>
            <div className="social-links" style={{ justifyContent: 'center', marginBottom: '1rem' }}>
              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                title="GitHub"
              >
                🐙
              </a>
              <a
                href="https://linkedin.com/in/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                title="LinkedIn"
              >
                💼
              </a>
              <a
                href="mailto:your.email@example.com"
                className="social-link"
                title="Email"
              >
                ✉️
              </a>
            </div>
            <button
              className="btn btn-outline btn-sm"
              onClick={scrollToTop}
            >
              ⬆ Back to Top
            </button>
          </div>
        </div>

        {/* Bottom: Copyright */}
        <div className="footer-bottom">
          <p style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.25rem' }}>
            <span>© {currentYear} Your Name. Made with</span>
            <span style={{ color: 'var(--danger-color)', animation: 'pulse 2s infinite' }}>❤️</span>
            <span>and lots of code.</span>
          </p>
          <p style={{ fontSize: '0.75rem', marginTop: '0.5rem' }}>
            Built with React, JavaScript, and CSS3
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;