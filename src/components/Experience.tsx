import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, MapPin, Calendar } from "lucide-react";

const experienceData = [
  {
    role: "Web Developer (Official Website)",
    company: "NIT Patna",
    location: "Patna",
    duration: "March 2025 - Present",
    type: "current",
    achievements: [
      "Built the Facilities section of NIT Patna's website using Next.js, improving structure and usability",
      "Implemented server-side rendering (SSR) and static site generation (SSG) for faster load times and better SEO",
      "Optimized UI with Tailwind CSS, enhancing responsiveness and performance",
      "Ensured seamless integration within the existing website framework"
    ]
  },
  {
    role: "Machine Learning Intern",
    company: "Encryptix",
    location: "Remote",
    duration: "July 2024 - August 2024",
    type: "completed",
    achievements: [
      "Built machine learning models for fraud detection and churn prediction, achieving 90% accuracy",
      "Optimized data preprocessing, reducing training time by 25%",
      "Improved model performance through feature selection and hyperparameter tuning"
    ]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 px-6 bg-gradient-to-b from-background to-secondary/30">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
            Professional Experience
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Growing through hands-on experience in web development and machine learning
          </p>
        </div>
        
        <div className="space-y-8">
          {experienceData.map((exp, index) => (
            <Card 
              key={index} 
              className="bg-gradient-secondary border-border hover:shadow-glow transition-all duration-300 hover:scale-[1.01] relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-1 h-full bg-gradient-primary" />
              
              <CardHeader className="pb-4">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-gradient-accent mt-1">
                      <Briefcase className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-xl text-foreground mb-1">{exp.role}</CardTitle>
                      <p className="text-primary font-semibold">{exp.company}</p>
                    </div>
                  </div>
                  
                  <div className="flex flex-col sm:items-end gap-2">
                    <Badge 
                      variant={exp.type === 'current' ? 'default' : 'secondary'}
                      className={exp.type === 'current' ? 'bg-gradient-primary' : ''}
                    >
                      {exp.type === 'current' ? 'Current' : 'Completed'}
                    </Badge>
                    
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{exp.duration}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="pt-0">
                <ul className="space-y-3">
                  {exp.achievements.map((achievement, achievementIndex) => (
                    <li key={achievementIndex} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span className="text-muted-foreground leading-relaxed">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;