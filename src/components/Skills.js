import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      icon: '💻',
      title: "Programming Languages",
      skills: ["JavaScript", "Python", "Java", "C++", "HTML5", "CSS3"],
      color: "blue"
    },
    {
      icon: '🌐',
      title: "Web Development",
      skills: ["React", "Node.js", "Express.js", "RESTful APIs", "JSON", "AJAX"],
      color: "green"
    },
    {
      icon: '🗄️',
      title: "Database & Backend",
      skills: ["MySQL", "MongoDB", "SQL", "Database Design", "Data Structures"],
      color: "purple"
    },
    {
      icon: '🎨',
      title: "Design & UI/UX",
      skills: ["Responsive Design", "CSS3", "Bootstrap", "Figma", "User Experience"],
      color: "pink"
    },
    {
      icon: '🔧',
      title: "Tools & Technologies",
      skills: ["Git", "GitHub", "VS Code", "Linux", "npm", "Webpack"],
      color: "orange"
    },
    {
      icon: '🤝',
      title: "Soft Skills",
      skills: ["Problem Solving", "Team Collaboration", "Communication", "Learning Agility", "Project Management"],
      color: "teal"
    }
  ];

  return (
    <section id="skills" className="section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Skills & Technologies</h2>
          <p className="section-description">
            A comprehensive toolkit acquired through academic learning and hands-on practice
          </p>
        </div>

        <div className="grid grid-3">
          {skillCategories.map((category, index) => (
            <div key={index} className="card">
              <div className="card-body">
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
                  <div className={`skill-icon ${category.color}`}>
                    {category.icon}
                  </div>
                  <h3 style={{ fontSize: '1.125rem', fontWeight: '600', marginLeft: '1rem', marginBottom: 0 }}>
                    {category.title}
                  </h3>
                </div>
                
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                  {category.skills.map((skill, skillIndex) => (
                    <span key={skillIndex} className="badge">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Learning Section */}
        <div style={{ marginTop: '4rem', textAlign: 'center' }}>
          <div className="card" style={{ 
            maxWidth: '800px', 
            margin: '0 auto',
            background: 'var(--gradient-hero)',
            border: '2px solid rgba(0, 123, 255, 0.2)'
          }}>
            <div className="card-body" style={{ padding: '2rem' }}>
              <h3 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '1rem' }}>
                Continuous Learning
              </h3>
              <p style={{ fontSize: '1.125rem', marginBottom: '1.5rem', lineHeight: '1.6' }}>
                As technology evolves rapidly, I'm committed to staying current with emerging trends and expanding my skill set. 
                I actively pursue online courses, participate in coding challenges, and work on personal projects to enhance my capabilities.
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '0.75rem' }}>
                <span className="badge badge-outline" style={{ borderColor: 'var(--primary-color)', color: 'var(--primary-color)' }}>
                  Currently Learning: React Advanced Patterns
                </span>
                <span className="badge badge-outline" style={{ borderColor: 'var(--accent-color)', color: 'var(--accent-color)' }}>
                  Next: TypeScript & Modern Backend
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;