import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, Github, Linkedin, MapPin } from "lucide-react";
import ContactForm from "./ContactForm";

const contactData = [
  {
    icon: Mail,
    label: "Email",
    value: "suyashv.ug23.cs@nitp.ac.in",
    href: "mailto:suyashv.ug23.cs@nitp.ac.in",
    color: "text-blue-400"
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91-9122079774",
    href: "tel:+919122079774",
    color: "text-green-400"
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/Suyas56",
    href: "https://github.com/Suyas56",
    color: "text-gray-400"
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/suyashvishnoi56",
    href: "https://linkedin.com/in/suyashvishnoi56",
    color: "text-blue-500"
  },
  {
    icon: MapPin,
    label: "Location",
    value: "NIT Patna, Bihar, India",
    href: "#",
    color: "text-red-400"
  }
];

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-6 bg-gradient-to-b from-background to-secondary/30">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
            Let's Connect
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, collaborations, or just having a conversation about technology
          </p>
        </div>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-12">
          {contactData.map((contact, index) => (
            <Card 
              key={index} 
              className="bg-gradient-secondary border-border hover:shadow-glow transition-all duration-300 hover:scale-[1.05] group cursor-pointer"
              onClick={() => contact.href !== "#" && window.open(contact.href, "_blank")}
            >
              <CardContent className="p-6 text-center">
                <div className="flex flex-col items-center gap-4">
                  <div className="p-3 rounded-full bg-gradient-accent group-hover:shadow-soft transition-all duration-300">
                    <contact.icon className={`w-6 h-6 ${contact.color}`} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{contact.label}</h3>
                    <p className="text-sm text-muted-foreground break-all">{contact.value}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="grid gap-8 lg:grid-cols-2 mb-12">
          {/* Contact Form */}
          <ContactForm />
          
          {/* Quick Contact Options */}
          <Card className="bg-gradient-secondary border-border shadow-glow">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl text-foreground">Prefer direct contact?</CardTitle>
              <p className="text-muted-foreground">
                Choose your preferred way to get in touch with me.
              </p>
            </CardHeader>
            
            <CardContent className="text-center pb-8">
              <div className="flex flex-col gap-4 justify-center">
                <Button 
                  size="lg" 
                  className="bg-gradient-primary hover:shadow-glow transition-all duration-300 hover:scale-105"
                  asChild
                >
                  <a href="mailto:suyashv.ug23.cs@nitp.ac.in">
                    <Mail className="w-4 h-4 mr-2" />
                    Send Email Directly
                  </a>
                </Button>
                
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-border hover:bg-card transition-all duration-300 hover:shadow-soft"
                  asChild
                >
                  <a href="https://linkedin.com/in/suyashvishnoi56" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="w-4 h-4 mr-2" />
                    Connect on LinkedIn
                  </a>
                </Button>
                
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-border hover:bg-card transition-all duration-300 hover:shadow-soft"
                  asChild
                >
                  <a href="tel:+919122079774">
                    <Phone className="w-4 h-4 mr-2" />
                    Call Me
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;