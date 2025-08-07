import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, ExternalLink } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary opacity-50" />
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-gradient-accent rounded-full px-4 py-2 mb-8 border border-border">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="text-sm text-muted-foreground">Available for opportunities</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text text-transparent">
            Suyash <span className="text-primary">Vishnoi</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-4">
            Computer Science Engineer | Web Developer
          </p>
          
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Building innovative web solutions with modern technologies. 
            Passionate about creating seamless user experiences and scalable backend systems.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              size="lg" 
              className="bg-gradient-primary hover:shadow-glow transition-all duration-300 hover:scale-105"
              asChild
            >
              <a href="#projects">
                <ExternalLink className="w-4 h-4 mr-2" />
                View My Work
              </a>
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="border-border hover:bg-card transition-all duration-300 hover:shadow-soft"
              asChild
            >
              <a href="#contact">
                Contact Me
              </a>
            </Button>
          </div>
          
          <div className="flex justify-center gap-6">
            <a 
              href="https://github.com/Suyas56" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-card border border-border hover:bg-gradient-accent hover:shadow-soft transition-all duration-300 hover:scale-110"
            >
              <Github className="w-5 h-5" />
            </a>
            <a 
              href="https://linkedin.com/in/suyashvishnoi56" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-card border border-border hover:bg-gradient-accent hover:shadow-soft transition-all duration-300 hover:scale-110"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a 
              href="mailto:suyashv.ug23.cs@nitp.ac.in"
              className="p-3 rounded-full bg-card border border-border hover:bg-gradient-accent hover:shadow-soft transition-all duration-300 hover:scale-110"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;