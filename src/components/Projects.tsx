import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Code } from "lucide-react";

const projectsData = [
  {
    title: "Hotel Booking System",
    description: "A web-based platform for seamless hotel reservations",
    duration: "March 2025 - Present",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    future: "Machine Learning for recommendations",
    features: [
      "Developed a hotel booking platform with React for frontend and Node.js with MongoDB for backend",
      "Integrated Stripe for secure online payments, ensuring seamless transactions",
      "Implemented secure authentication and real-time availability tracking, enhancing user experience",
      "Designed a responsive UI for easy navigation and optimized performance"
    ],
    status: "In Progress",
    github: "#",
    demo: "#"
  },
  {
    title: "Sorting Algorithm Visualizer",
    description: "Interactive tool for visualizing sorting techniques",
    duration: "March 2025",
    technologies: ["React", "Node.js", "Vercel"],
    features: [
      "Designed an interactive sorting algorithm visualizer to demonstrate various sorting techniques",
      "Integrated React for dynamic UI and Node.js for backend logic, ensuring smooth animations",
      "Deployed the application on Vercel for fast and accessible performance",
      "Evaluated algorithm efficiency through real-time comparisons of sorting methods"
    ],
    status: "Completed",
    github: "#",
    demo: "#"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Showcasing my passion for building innovative solutions with modern technologies
          </p>
        </div>
        
        <div className="grid gap-8 md:grid-cols-2">
          {projectsData.map((project, index) => (
            <Card 
              key={index} 
              className="bg-gradient-secondary border-border hover:shadow-glow transition-all duration-300 hover:scale-[1.02] group"
            >
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-gradient-accent group-hover:shadow-soft transition-all duration-300">
                      <Code className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-xl text-foreground group-hover:text-primary transition-colors duration-300">
                        {project.title}
                      </CardTitle>
                      <p className="text-muted-foreground mt-1">{project.description}</p>
                    </div>
                  </div>
                  
                  <Badge 
                    variant={project.status === 'In Progress' ? 'default' : 'secondary'}
                    className={project.status === 'In Progress' ? 'bg-gradient-primary' : ''}
                  >
                    {project.status}
                  </Badge>
                </div>
                
                <p className="text-sm text-muted-foreground">{project.duration}</p>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-semibold text-foreground mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-foreground mb-3">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="outline" className="border-border text-muted-foreground">
                        {tech}
                      </Badge>
                    ))}
                    {project.future && (
                      <Badge variant="outline" className="border-primary text-primary">
                        Future: {project.future}
                      </Badge>
                    )}
                  </div>
                </div>
                
                <div className="flex gap-3 pt-4">
                  <Button 
                    size="sm" 
                    className="bg-gradient-primary hover:shadow-glow transition-all duration-300"
                    asChild
                  >
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </a>
                  </Button>
                  
                  <Button 
                    size="sm" 
                    variant="outline" 
                    className="border-border hover:bg-card transition-all duration-300"
                    asChild
                  >
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;