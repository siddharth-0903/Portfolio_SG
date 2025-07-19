import React from 'react';

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const downloadCV = () => {
    // Replace with actual CV download logic
    alert('CV download feature - Replace with actual file download');
  };

  return (
    <section id="hero" className="hero">
      <div className="container">
        <div className="hero-content fade-in">
          {/* Professional Avatar */}
          <div className="hero-avatar">
            <div className="hero-avatar-inner">
              YN
            </div>
          </div>

          {/* Main Content */}
          <h1 className="hero-title">
            Your Name
          </h1>
          
          <p className="hero-subtitle">
            BCA Graduate & Aspiring Developer
          </p>
          
          <p className="hero-description">
            Passionate about creating innovative web solutions and turning ideas into digital reality. 
            Ready to contribute fresh perspectives and technical skills to dynamic development teams.
          </p>

          {/* CTA Buttons */}
          <div className="hero-buttons">
            <button 
              className="btn btn-primary btn-lg"
              onClick={() => scrollToSection('projects')}
            >
              View My Work ↓
            </button>
            
            <button 
              className="btn btn-outline btn-lg"
              onClick={() => scrollToSection('contact')}
            >
              ✉ Get In Touch
            </button>
          </div>

          {/* Quick Actions */}
          <div className="text-center">
            <button 
              className="btn btn-sm"
              onClick={downloadCV}
              style={{ background: 'none', border: 'none', color: 'var(--text-secondary)' }}
            >
              📄 Download CV
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="hero-scroll">
        <span style={{ fontSize: '1.5rem', color: 'var(--primary-color)' }}>↓</span>
      </div>
    </section>
  );
};

export default Hero;