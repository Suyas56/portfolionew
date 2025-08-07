import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Calendar } from "lucide-react";

const educationData = [
  {
    degree: "B.Tech., Computer Science and Engineering",
    institution: "National Institute of Technology, Patna",
    cgpa: "6.94",
    year: "May 2027",
    type: "current"
  },
  {
    degree: "Senior Secondary",
    institution: "U.P. Kirana Seva Samiti Vidyalaya",
    cgpa: "87%",
    year: "May 2022",
    type: "completed"
  },
  {
    degree: "Secondary",
    institution: "U.P. Kirana Seva Samiti Vidyalaya", 
    cgpa: "79.2%",
    year: "May 2020",
    type: "completed"
  }
];

const Education = () => {
  return (
    <section id="education" className="py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
            Educational Journey
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Building a strong foundation through quality education and continuous learning
          </p>
        </div>
        
        <div className="space-y-6">
          {educationData.map((edu, index) => (
            <Card 
              key={index} 
              className="bg-gradient-secondary border-border hover:shadow-glow transition-all duration-300 hover:scale-[1.02]"
            >
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-gradient-accent">
                      <GraduationCap className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-xl text-foreground">{edu.degree}</CardTitle>
                      <p className="text-muted-foreground mt-1">{edu.institution}</p>
                    </div>
                  </div>
                  
                  <div className="text-right flex-shrink-0">
                    <Badge 
                      variant={edu.type === 'current' ? 'default' : 'secondary'}
                      className={edu.type === 'current' ? 'bg-gradient-primary' : ''}
                    >
                      {edu.type === 'current' ? 'Pursuing' : 'Completed'}
                    </Badge>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="pt-0">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm">{edu.year}</span>
                  </div>
                  
                  <div className="text-right">
                    <span className="text-2xl font-bold text-primary">{edu.cgpa}</span>
                    <span className="text-sm text-muted-foreground ml-1">
                      {edu.cgpa.includes('%') ? '' : 'CGPA'}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;