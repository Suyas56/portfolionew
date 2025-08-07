import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import { Send, Loader2 } from "lucide-react";
import emailjs from '@emailjs/browser';

const ContactForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // EmailJS configuration - You'll need to replace these with your actual EmailJS details
      const serviceID = 'your_service_id';
      const templateID = 'your_template_id';
      const publicKey = 'your_public_key';

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_email: 'suyashv.ug23.cs@nitp.ac.in'
      };

      await emailjs.send(serviceID, templateID, templateParams, publicKey);
      
      toast({
        title: "Message sent successfully!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      console.error('EmailJS error:', error);
      toast({
        title: "Failed to send message",
        description: "Please try again or contact me directly via email.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className="bg-gradient-secondary border-border shadow-glow">
      <CardHeader>
        <CardTitle className="text-2xl text-foreground flex items-center gap-2">
          <Send className="w-6 h-6" />
          Send Me a Message
        </CardTitle>
        <p className="text-muted-foreground">
          Fill out the form below and I'll get back to you as soon as possible.
        </p>
      </CardHeader>
      
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="name">Name *</Label>
              <Input
                id="name"
                name="name"
                type="text"
                placeholder="Your full name"
                value={formData.name}
                onChange={handleChange}
                required
                className="bg-background/50 border-border focus:border-primary"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="email">Email *</Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="your.email@example.com"
                value={formData.email}
                onChange={handleChange}
                required
                className="bg-background/50 border-border focus:border-primary"
              />
            </div>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="subject">Subject *</Label>
            <Input
              id="subject"
              name="subject"
              type="text"
              placeholder="What's this about?"
              value={formData.subject}
              onChange={handleChange}
              required
              className="bg-background/50 border-border focus:border-primary"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="message">Message *</Label>
            <Textarea
              id="message"
              name="message"
              placeholder="Tell me about your project, question, or just say hello!"
              value={formData.message}
              onChange={handleChange}
              required
              rows={6}
              className="bg-background/50 border-border focus:border-primary resize-none"
            />
          </div>
          
          <Button 
            type="submit" 
            size="lg" 
            disabled={isLoading}
            className="w-full bg-gradient-primary hover:shadow-glow transition-all duration-300 hover:scale-[1.02]"
          >
            {isLoading ? (
              <>
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                Sending...
              </>
            ) : (
              <>
                <Send className="w-4 h-4 mr-2" />
                Send Message
              </>
            )}
          </Button>
          
          <p className="text-xs text-muted-foreground text-center">
            * Required fields. Your information will be kept private and secure.
          </p>
        </form>
      </CardContent>
    </Card>
  );
};

export default ContactForm;