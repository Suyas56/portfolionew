import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trophy, Award, Code2, Users } from "lucide-react";

const achievementsData = [
  {
    category: "Competitive Programming",
    icon: Code2,
    items: [
      {
        title: "CodeChef",
        description: "Highest Rating: 1421",
        type: "Platform Rating"
      },
      {
        title: "LeetCode",
        description: "Solved 20+ questions | Current Rating: 1584",
        type: "Problem Solving"
      }
    ]
  },
  {
    category: "Hackathons & Competitions",
    icon: Trophy,
    items: [
      {
        title: "Byteverse'24 Hackathon (Offline)",
        description: "Showcased technical expertise and innovation in a competitive environment",
        type: "Competition"
      }
    ]
  },
  {
    category: "Certifications",
    icon: Award,
    items: [
      {
        title: "ByteVerse",
        description: "Certification 1",
        type: "April 2024"
      },
      {
        title: "Vimantrikik",
        description: "Certification 2", 
        type: "November 2023"
      }
    ]
  },
  {
    category: "Leadership",
    icon: Users,
    items: [
      {
        title: "Web Developer",
        description: "Web Development Cell, NIT Patna",
        type: "March 2025 - Present"
      }
    ]
  }
];

const iconColors = {
  Code2: "text-blue-400",
  Trophy: "text-yellow-400", 
  Award: "text-green-400",
  Users: "text-purple-400"
};

const Achievements = () => {
  return (
    <section id="achievements" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
            Achievements & Recognition
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Celebrating milestones in competitive programming, hackathons, and leadership roles
          </p>
        </div>
        
        <div className="grid gap-6 md:grid-cols-2">
          {achievementsData.map((category, index) => (
            <Card 
              key={index} 
              className="bg-gradient-secondary border-border hover:shadow-glow transition-all duration-300 hover:scale-[1.02] group"
            >
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-lg bg-gradient-accent group-hover:shadow-soft transition-all duration-300">
                    <category.icon className={`w-6 h-6 ${iconColors[category.icon.name as keyof typeof iconColors]}`} />
                  </div>
                  <CardTitle className="text-xl text-foreground group-hover:text-primary transition-colors duration-300">
                    {category.category}
                  </CardTitle>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                {category.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="space-y-2">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h4 className="font-semibold text-foreground">{item.title}</h4>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                      <Badge variant="outline" className="border-primary text-primary flex-shrink-0">
                        {item.type}
                      </Badge>
                    </div>
                    {itemIndex < category.items.length - 1 && (
                      <div className="border-b border-border/50" />
                    )}
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;