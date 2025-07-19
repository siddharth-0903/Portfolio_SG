import React from 'react';

const About = () => {
  const highlights = [
    {
      icon: '🎓',
      title: "BCA Graduate",
      description: "Recently completed Bachelor of Computer Applications with strong foundation in programming and software development."
    },
    {
      icon: '💻',
      title: "Tech Enthusiast",
      description: "Passionate about learning new technologies and staying updated with the latest trends in web development."
    },
    {
      icon: '💡',
      title: "Problem Solver",
      description: "Love tackling complex challenges and finding creative solutions through clean, efficient code."
    },
    {
      icon: '🎯',
      title: "Goal Oriented",
      description: "Focused on building a successful career in software development with continuous learning and growth."
    }
  ];

  return (
    <section id="about" className="section section-alt">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">About Me</h2>
          <p className="section-description">
            A fresh perspective with a passion for technology and innovation
          </p>
        </div>

        <div className="grid grid-2" style={{ alignItems: 'center' }}>
          {/* Personal Story */}
          <div>
            <h3 style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>
              My Journey
            </h3>
            
            <p style={{ fontSize: '1.125rem', marginBottom: '1.5rem' }}>
              As a recent BCA graduate, I bring fresh energy and modern knowledge to the world of software development. 
              My academic journey has equipped me with a solid foundation in programming principles, database management, 
              and software engineering practices.
            </p>
            
            <p style={{ fontSize: '1.125rem', marginBottom: '1.5rem' }}>
              During my studies, I discovered my passion for creating digital solutions that make a difference. 
              I'm particularly interested in web development, user experience design, and emerging technologies. 
              My goal is to contribute meaningfully to innovative projects while continuously expanding my skill set.
            </p>
            
            <p style={{ fontSize: '1.125rem' }}>
              I believe in the power of technology to solve real-world problems and improve people's lives. 
              I'm excited to begin my professional journey and collaborate with like-minded individuals who share 
              this vision.
            </p>
          </div>

          {/* Highlights Grid */}
          <div className="grid grid-2">
            {highlights.map((highlight, index) => (
              <div key={index} className="card">
                <div className="card-body text-center">
                  <div style={{ 
                    fontSize: '3rem', 
                    marginBottom: '1rem',
                    background: 'var(--gradient-primary)',
                    width: '4rem',
                    height: '4rem',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 1rem'
                  }}>
                    {highlight.icon}
                  </div>
                  <h4 className="card-title">
                    {highlight.title}
                  </h4>
                  <p style={{ fontSize: '0.875rem', lineHeight: '1.5' }}>
                    {highlight.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;