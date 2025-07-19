import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Code, Lightbulb, Target } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: GraduationCap,
      title: "BCA Graduate",
      description: "Recently completed Bachelor of Computer Applications with strong foundation in programming and software development."
    },
    {
      icon: Code,
      title: "Tech Enthusiast",
      description: "Passionate about learning new technologies and staying updated with the latest trends in web development."
    },
    {
      icon: Lightbulb,
      title: "Problem Solver",
      description: "Love tackling complex challenges and finding creative solutions through clean, efficient code."
    },
    {
      icon: Target,
      title: "Goal Oriented",
      description: "Focused on building a successful career in software development with continuous learning and growth."
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            About Me
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A fresh perspective with a passion for technology and innovation
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Personal Story */}
          <div className="space-y-6">
            <h3 className="text-2xl md:text-3xl font-semibold text-foreground mb-6">
              My Journey
            </h3>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              As a recent BCA graduate, I bring fresh energy and modern knowledge to the world of software development. 
              My academic journey has equipped me with a solid foundation in programming principles, database management, 
              and software engineering practices.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              During my studies, I discovered my passion for creating digital solutions that make a difference. 
              I'm particularly interested in web development, user experience design, and emerging technologies. 
              My goal is to contribute meaningfully to innovative projects while continuously expanding my skill set.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              I believe in the power of technology to solve real-world problems and improve people's lives. 
              I'm excited to begin my professional journey and collaborate with like-minded individuals who share 
              this vision.
            </p>
          </div>

          {/* Highlights Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {highlights.map((highlight, index) => (
              <Card key={index} className="group hover:shadow-card transition-all duration-300 hover:-translate-y-2 border-border/50">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-primary flex items-center justify-center group-hover:animate-glow-pulse transition-all duration-300">
                    <highlight.icon className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <h4 className="text-lg font-semibold mb-2 text-foreground">
                    {highlight.title}
                  </h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {highlight.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;