import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Code, Rocket, Plus } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Portfolio Website",
      description: "A responsive personal portfolio website built with React and modern web technologies. Features smooth animations, mobile-first design, and optimized performance.",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Vite"],
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

  return (
    <section id="projects" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Projects & Work
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Showcasing my technical skills through practical applications and creative solutions
          </p>
        </div>

        {/* Featured Project */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-8 text-center text-foreground">Featured Project</h3>
          {projects.filter(p => p.featured).map((project, index) => (
            <Card key={index} className="group hover:shadow-elegant transition-all duration-300 border-primary/20 bg-gradient-hero">
              <CardContent className="p-8">
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <Rocket className="h-6 w-6 text-primary" />
                      <Badge variant="outline" className="border-primary text-primary">
                        {project.status}
                      </Badge>
                    </div>
                    
                    <h4 className="text-2xl font-bold mb-4 text-foreground">
                      {project.title}
                    </h4>
                    
                    <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="secondary" className="text-sm">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    
                    <div className="flex gap-4">
                      <Button 
                        className="bg-gradient-primary hover:shadow-glow transition-all duration-300"
                        onClick={() => window.open(project.github, '_blank')}
                      >
                        <Github className="mr-2 h-4 w-4" />
                        View Code
                      </Button>
                      {project.live && (
                        <Button 
                          variant="outline"
                          className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                          onClick={() => window.open(project.live, '_blank')}
                        >
                          <ExternalLink className="mr-2 h-4 w-4" />
                          Live Demo
                        </Button>
                      )}
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-center">
                    <div className="w-full h-64 bg-gradient-primary rounded-lg flex items-center justify-center">
                      <Code className="h-24 w-24 text-primary-foreground opacity-60" />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Other Projects */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-8 text-center text-foreground">Other Projects</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.filter(p => !p.featured).map((project, index) => (
              <Card key={index} className="group hover:shadow-card transition-all duration-300 hover:-translate-y-2">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-xl">{project.title}</CardTitle>
                    <Badge variant="outline" className="text-xs">
                      {project.status}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex gap-3">
                    <Button 
                      size="sm"
                      variant="outline"
                      className="flex-1"
                      onClick={() => window.open(project.github, '_blank')}
                    >
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </Button>
                    {project.live && (
                      <Button 
                        size="sm"
                        className="flex-1"
                        onClick={() => window.open(project.live, '_blank')}
                      >
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Demo
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Upcoming Projects */}
        <div className="text-center">
          <h3 className="text-2xl font-semibold mb-8 text-foreground">Coming Soon</h3>
          <Card className="max-w-4xl mx-auto">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-6">
                {upcomingProjects.map((project, index) => (
                  <div key={index} className="flex items-center space-x-3 text-left">
                    <Plus className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground">{project}</span>
                  </div>
                ))}
              </div>
              <p className="text-sm text-muted-foreground mt-6 italic">
                More exciting projects in development. Stay tuned for updates!
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Projects;
