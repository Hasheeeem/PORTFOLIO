import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Code, Database, Palette, Wrench } from "lucide-react";

const skillCategories = [
  {
    title: "Programming Languages",
    icon: Code,
    skills: ["Python", "Java", "C", "Dart", "PHP", "JavaScript", "TypeScript"],
    color: "text-blue-500"
  },
  {
    title: "Frameworks & Libraries",
    icon: Wrench,
    skills: ["HTML", "CSS", "React", "Node.js", "Next.js", "Flutter", "Django", "FastAPI", "Tailwind"],
    color: "text-green-500"
  },
  {
    title: "Databases",
    icon: Database,
    skills: ["MySQL", "MongoDB", "PostgreSQL"],
    color: "text-purple-500"
  },
  {
    title: "Design & Tools",
    icon: Palette,
    skills: ["Git", "Docker", "Pandas", "NumPy", "Postman", "Matplotlib", "Photoshop", "InDesign", "After Effects", "Supabase", "AutoCAD"],
    color: "text-orange-500"
  }
];

const certifications = [
  {
    title: "IBM Python for Data Science, AI & Development",
    issuer: "IBM",
    type: "Course Certification"
  },
  {
    title: "Cryptocurrency and Blockchain",
    issuer: "NIT",
    type: "Certification"
  },
  {
    title: "Kanpur - Self Driving Electric Vehicle",
    issuer: "IIT",
    type: "Certification"
  }
];

const achievements = [
  "Smart India Hackathon Runner-Up",
  "Best University Design Project for \"EKS Breakroom\"",
  "VIP Central Winner"
];

const SkillsSection = () => {
  return (
    <section className="py-24 px-6 bg-gradient-subtle">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <Badge variant="secondary" className="mb-4">Expertise</Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Technical Skills
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive technical expertise spanning modern development technologies and design tools
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <Card 
              key={index}
              className="p-8 hover:shadow-floating transition-all duration-500 hover:-translate-y-1 bg-card/50 backdrop-blur-sm border-border/50 animate-fade-in group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className={`p-3 rounded-2xl bg-gradient-primary ${category.color}`}>
                  <category.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                  {category.title}
                </h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <Badge 
                    key={skillIndex}
                    variant="secondary" 
                    className="bg-muted/50 hover:bg-muted transition-all duration-300 hover:scale-105 cursor-default"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>

        {/* Certifications & Achievements */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Certifications */}
          <Card className="p-8 bg-card/50 backdrop-blur-sm border-border/50 animate-fade-in">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-2xl bg-gradient-primary">
                <Badge className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-foreground">Certifications</h3>
            </div>
            
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <div key={index} className="flex flex-col space-y-1 p-4 rounded-xl bg-muted/30 hover:bg-muted/50 transition-colors">
                  <h4 className="font-semibold text-foreground">{cert.title}</h4>
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-primary font-medium">{cert.issuer}</span>
                    <Badge variant="outline" className="text-xs">{cert.type}</Badge>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* Achievements */}
          <Card className="p-8 bg-card/50 backdrop-blur-sm border-border/50 animate-fade-in">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-2xl bg-gradient-primary">
                <Badge className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-foreground">Achievements</h3>
            </div>
            
            <div className="space-y-4">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-start gap-3 p-4 rounded-xl bg-muted/30 hover:bg-muted/50 transition-colors">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                  <span className="text-foreground font-medium">{achievement}</span>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Additional Info */}
        <Card className="mt-8 p-8 bg-gradient-card backdrop-blur-sm border-border/50 animate-fade-in">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <h4 className="text-lg font-bold text-foreground mb-2">Program Management</h4>
              <p className="text-muted-foreground">Resource Planning, Project Coordination, Stakeholder Communication, Agile Model</p>
            </div>
            <div>
              <h4 className="text-lg font-bold text-foreground mb-2">Languages</h4>
              <p className="text-muted-foreground">English, Hindi (Fluent), Malayalam (Native), Arabic, Tamil (Basic - Conversational)</p>
            </div>
            <div>
              <h4 className="text-lg font-bold text-foreground mb-2">Location</h4>
              <p className="text-muted-foreground">Kottayam, India<br />Open to remote and international opportunities</p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default SkillsSection;