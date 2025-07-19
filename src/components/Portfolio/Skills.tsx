import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Code, 
  Database, 
  Globe, 
  Smartphone, 
  GitBranch, 
  Palette,
  Server,
  MonitorSpeaker
} from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      icon: Code,
      title: "Programming Languages",
      skills: ["JavaScript", "C++", "HTML5", "CSS3"],
      color: "bg-blue-500"
    },
    {
      icon: Globe,
      title: "Web Development",
      skills: ["Php", "React", "Node.js", "AJAX"],
      color: "bg-green-500"
    },
    {
      icon: Database,
      title: "Database & Backend",
      skills: ["MySQL", "SQL", "Database Design", "Data Structures"],
      color: "bg-purple-500"
    },
    {
      icon: Palette,
      title: "Design & UI/UX",
      skills: ["Responsive Design", "Bootstrap", "Figma", "User Experience"],
      color: "bg-pink-500"
    },
    {
      icon: GitBranch,
      title: "Tools & Technologies",
      skills: ["Git", "GitHub", "VS Code", "Canva", "Chat GPT", "Claude", "Gemini"],
      color: "bg-orange-500"
    },
    {
      icon: MonitorSpeaker,
      title: "Soft Skills",
      skills: ["Problem Solving", "Team Collaboration", "Communication", "Learning Agility", "Project Management"],
      color: "bg-teal-500"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Skills & Technologies
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit acquired through academic learning and hands-on practice
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 border-border/50"
            >
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className={`w-12 h-12 rounded-full ${category.color} flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300`}>
                    <category.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">
                    {category.title}
                  </h3>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge 
                      key={skillIndex}
                      variant="secondary"
                      className="text-xs hover:bg-primary hover:text-primary-foreground transition-colors duration-200 cursor-default"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Learning Section */}
        <div className="mt-16 text-center">
          <Card className="max-w-4xl mx-auto bg-gradient-hero border-primary/20">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold mb-4 text-foreground">
                Continuous Learning
              </h3>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                As technology evolves rapidly, I'm committed to staying current with emerging trends and expanding my skill set. 
                I actively pursue online courses, participate in coding challenges, and work on personal projects to enhance my capabilities.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                <Badge variant="outline" className="text-sm border-primary text-primary">
                  Currently Learning: React 
                </Badge>
                <Badge variant="outline" className="text-sm border-accent text-accent">
                  Next: TypeScript & Modern Backend
                </Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;