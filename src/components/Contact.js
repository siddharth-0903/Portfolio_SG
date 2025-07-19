import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    
    // Show success message
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
    
    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: '✉️',
      label: "Email",
      value: "your.email@example.com",
      link: "mailto:your.email@example.com"
    },
    {
      icon: '📱',
      label: "Phone",
      value: "+91 12345 67890",
      link: "tel:+911234567890"
    },
    {
      icon: '📍',
      label: "Location",
      value: "Your City, India",
      link: "#"
    }
  ];

  const socialLinks = [
    {
      icon: '🐙',
      label: "GitHub",
      url: "https://github.com/yourusername"
    },
    {
      icon: '💼',
      label: "LinkedIn",
      url: "https://linkedin.com/in/yourprofile"
    },
    {
      icon: '🐦',
      label: "Twitter",
      url: "https://twitter.com/yourusername"
    }
  ];

  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-description">
            Ready to start your next project? Let's discuss how we can work together to bring your ideas to life.
          </p>
        </div>

        <div className="grid grid-2" style={{ maxWidth: '1000px', margin: '0 auto', alignItems: 'start' }}>
          {/* Contact Form */}
          <div className="card">
            <div className="card-header">
              <h3 className="card-title" style={{ fontSize: '1.5rem' }}>Send a Message</h3>
            </div>
            <div className="card-body">
              {showSuccess && (
                <div style={{ 
                  background: 'var(--success-color)', 
                  color: 'white', 
                  padding: '1rem', 
                  borderRadius: '0.5rem', 
                  marginBottom: '1.5rem',
                  textAlign: 'center'
                }}>
                  ✅ Message sent successfully! I'll get back to you soon.
                </div>
              )}
              
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label className="form-label" htmlFor="name">Full Name</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    className="form-input"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your Name"
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label className="form-label" htmlFor="email">Email Address</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    className="form-input"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="your.email@example.com"
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label className="form-label" htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    className="form-textarea"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell me about your project or just say hello..."
                    rows={5}
                    required
                  />
                </div>
                
                <button type="submit" className="btn btn-primary btn-lg" style={{ width: '100%' }}>
                  📤 Send Message
                </button>
              </form>
            </div>
          </div>

          {/* Contact Information */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            {/* Contact Details */}
            <div className="card">
              <div className="card-header">
                <h3 className="card-title" style={{ fontSize: '1.5rem' }}>Contact Information</h3>
              </div>
              <div className="card-body">
                {contactInfo.map((info, index) => (
                  <div key={index} className="contact-info">
                    <div className="contact-icon">
                      {info.icon}
                    </div>
                    <div>
                      <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', marginBottom: '0.25rem' }}>
                        {info.label}
                      </p>
                      <a 
                        href={info.link}
                        style={{ 
                          fontSize: '1.125rem', 
                          fontWeight: '500', 
                          color: 'var(--text-primary)',
                          textDecoration: 'none'
                        }}
                      >
                        {info.value}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="card">
              <div className="card-header">
                <h3 className="card-title" style={{ fontSize: '1.5rem' }}>Connect With Me</h3>
              </div>
              <div className="card-body">
                <div className="social-links">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-link"
                      title={social.label}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
                <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
                  Follow me on social media for updates on my latest projects and tech insights.
                </p>
              </div>
            </div>

            {/* Availability */}
            <div className="card" style={{ 
              background: 'var(--gradient-hero)', 
              border: '2px solid rgba(0, 123, 255, 0.2)' 
            }}>
              <div className="card-body text-center">
                <h3 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '0.5rem' }}>
                  Available for Opportunities
                </h3>
                <p style={{ marginBottom: '1rem' }}>
                  I'm currently open to internships, entry-level positions, and freelance projects. 
                  Let's discuss how I can contribute to your team!
                </p>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
                  <div className="availability-indicator"></div>
                  <span style={{ fontSize: '0.875rem', color: 'var(--success-color)', fontWeight: '500' }}>
                    Available Now
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;