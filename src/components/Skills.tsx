import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Database, Globe, Wrench } from "lucide-react";

const skillsData = [
  {
    category: "Programming Languages",
    icon: Code,
    skills: ["Java", "Python", "JavaScript", "TypeScript", "Shell Script", "PHP", "SQL"],
    color: "text-blue-400"
  },
  {
    category: "Web & Frontend",
    icon: Globe,
    skills: ["HTML/CSS", "JSP", "AJAX", "React", "ReactJS", "Redux", "Redux Toolkit", "Angular"],
    color: "text-green-400"
  },
  {
    category: "Backend & Database",
    icon: Database,
    skills: ["Node.js", "MySQL", "Oracle", "MongoDB"],
    color: "text-purple-400"
  },
  {
    category: "Tools & Platforms",
    icon: Wrench,
    skills: ["Git", "GitHub", "Vercel", "Render"],
    color: "text-orange-400"
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-6 bg-gradient-to-b from-background to-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
            Technical Skills
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive expertise across the full-stack development ecosystem
          </p>
        </div>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
          {skillsData.map((skillGroup, index) => (
            <Card 
              key={index} 
              className="bg-gradient-secondary border-border hover:shadow-glow transition-all duration-300 hover:scale-[1.02] group"
            >
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-lg bg-gradient-accent group-hover:shadow-soft transition-all duration-300">
                    <skillGroup.icon className={`w-6 h-6 ${skillGroup.color}`} />
                  </div>
                  <CardTitle className="text-xl text-foreground group-hover:text-primary transition-colors duration-300">
                    {skillGroup.category}
                  </CardTitle>
                </div>
              </CardHeader>
              
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.skills.map((skill, skillIndex) => (
                    <Badge 
                      key={skillIndex} 
                      variant="outline" 
                      className="border-border text-muted-foreground hover:border-primary hover:text-primary transition-all duration-300 cursor-default"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;