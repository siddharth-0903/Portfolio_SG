import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: "Portfolio Website",
      description: "A responsive personal portfolio website built with React and modern web technologies. Features smooth animations, mobile-first design, and optimized performance.",
      technologies: ["React", "JavaScript", "CSS3", "HTML5"],
      status: "Completed",
      github: "#",
      live: "#",
      featured: true
    },
    {
      title: "University Management System",
      description: "Academic project for managing student records, courses, and faculty information. Includes user authentication, data validation, and reporting features.",
      technologies: ["Java", "MySQL", "Swing", "JDBC"],
      status: "Academic Project",
      github: "#",
      featured: false
    },
    {
      title: "Task Manager App",
      description: "A full-stack web application for managing daily tasks and projects. Features include user authentication, real-time updates, and data persistence.",
      technologies: ["JavaScript", "Node.js", "Express", "MongoDB"],
      status: "In Development",
      github: "#",
      featured: false
    }
  ];

  const upcomingProjects = [
    "E-commerce Website with Payment Integration",
    "Mobile-Responsive Dashboard",
    "Real-time Chat Application",
    "Personal Finance Tracker"
  ];

  const openLink = (url) => {
    if (url === '#') {
      alert('Demo link - Replace with actual project URL');
    } else {
      window.open(url, '_blank');
    }
  };

  return (
    <section id="projects" className="section section-alt">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Projects & Work</h2>
          <p className="section-description">
            Showcasing my technical skills through practical applications and creative solutions
          </p>
        </div>

        {/* Featured Project */}
        <div style={{ marginBottom: '3rem' }}>
          <h3 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '2rem', textAlign: 'center' }}>
            Featured Project
          </h3>
          {projects.filter(p => p.featured).map((project, index) => (
            <div key={index} className="card project-featured">
              <div className="card-body" style={{ padding: '2rem' }}>
                <div className="grid grid-2" style={{ alignItems: 'center' }}>
                  <div>
                    <div className="project-meta">
                      <span style={{ fontSize: '1.5rem' }}>🚀</span>
                      <span className="badge badge-outline" style={{ borderColor: 'var(--primary-color)', color: 'var(--primary-color)' }}>
                        {project.status}
                      </span>
                    </div>
                    
                    <h4 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>
                      {project.title}
                    </h4>
                    
                    <p style={{ fontSize: '1.125rem', marginBottom: '1.5rem', lineHeight: '1.6' }}>
                      {project.description}
                    </p>
                    
                    <div className="project-technologies">
                      {project.technologies.map((tech, techIndex) => (
                        <span key={techIndex} className="badge">
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    <div className="project-actions">
                      <button 
                        className="btn btn-primary"
                        onClick={() => openLink(project.github)}
                      >
                        📋 View Code
                      </button>
                      {project.live && (
                        <button 
                          className="btn btn-outline"
                          onClick={() => openLink(project.live)}
                        >
                          🔗 Live Demo
                        </button>
                      )}
                    </div>
                  </div>
                  
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <div className="project-preview">
                      💻
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Other Projects */}
        <div style={{ marginBottom: '3rem' }}>
          <h3 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '2rem', textAlign: 'center' }}>
            Other Projects
          </h3>
          <div className="grid grid-2">
            {projects.filter(p => !p.featured).map((project, index) => (
              <div key={index} className="card">
                <div className="card-header">
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <h4 className="card-title">{project.title}</h4>
                    <span className="badge badge-outline" style={{ fontSize: '0.75rem' }}>
                      {project.status}
                    </span>
                  </div>
                </div>
                <div className="card-body">
                  <p style={{ marginBottom: '1rem', lineHeight: '1.5' }}>
                    {project.description}
                  </p>
                  
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.5rem' }}>
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="badge" style={{ fontSize: '0.75rem' }}>
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div style={{ display: 'flex', gap: '0.75rem' }}>
                    <button 
                      className="btn btn-outline btn-sm"
                      style={{ flex: 1 }}
                      onClick={() => openLink(project.github)}
                    >
                      📋 Code
                    </button>
                    {project.live && (
                      <button 
                        className="btn btn-primary btn-sm"
                        style={{ flex: 1 }}
                        onClick={() => openLink(project.live)}
                      >
                        🔗 Demo
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Upcoming Projects */}
        <div className="text-center">
          <h3 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '2rem' }}>
            Coming Soon
          </h3>
          <div className="card" style={{ maxWidth: '800px', margin: '0 auto' }}>
            <div className="card-body" style={{ padding: '2rem' }}>
              <div className="grid grid-2" style={{ gap: '1.5rem' }}>
                {upcomingProjects.map((project, index) => (
                  <div key={index} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', textAlign: 'left' }}>
                    <span style={{ color: 'var(--primary-color)', fontSize: '1.25rem', flexShrink: 0 }}>+</span>
                    <span style={{ color: 'var(--text-secondary)' }}>{project}</span>
                  </div>
                ))}
              </div>
              <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', marginTop: '1.5rem', fontStyle: 'italic' }}>
                More exciting projects in development. Stay tuned for updates!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
