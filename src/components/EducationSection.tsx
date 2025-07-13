import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { GraduationCap, MapPin, Calendar, Award } from "lucide-react";

const education = {
  institution: "Amal Jyothi College of Engineering Autonomous",
  degree: "Bachelor of Technology in Information Technology",
  location: "Kottayam, India",
  period: "July 2022 - June 2026",
  status: "Currently Pursuing",
  highlights: [
    "Specialized in Information Technology with focus on software development",
    "Engaged in real-world projects and internship opportunities",
    "Active participation in technical competitions and hackathons",
    "Strong foundation in computer science fundamentals and modern technologies"
  ]
};

const contactInfo = {
  phone: "+91 8848748552",
  email: "hasheemhm4@gmail.com",
  linkedin: "linkedin.com/in/muhammedhasheem",
  github: "github.com/Hasheeeeem"
};

const EducationSection = () => {
  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <Badge variant="secondary" className="mb-4">Academic Background</Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Education & Contact
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Building a strong foundation in technology and engineering
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Education Card */}
          <Card className="lg:col-span-2 p-8 hover:shadow-floating transition-all duration-500 hover:-translate-y-1 bg-gradient-card backdrop-blur-sm border-border/50 animate-fade-in">
            <div className="flex items-start gap-6">
              <div className="p-4 rounded-2xl bg-gradient-primary">
                <GraduationCap className="w-8 h-8 text-white" />
              </div>
              
              <div className="flex-1 space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-2xl font-bold text-foreground">
                      {education.degree}
                    </h3>
                    <Badge variant="outline" className="text-xs">
                      {education.status}
                    </Badge>
                  </div>
                  <p className="text-xl text-primary font-semibold">
                    {education.institution}
                  </p>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      <span>{education.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>{education.period}</span>
                    </div>
                  </div>
                </div>

                {/* Highlights */}
                <div className="space-y-3">
                  <h4 className="text-lg font-semibold text-foreground flex items-center gap-2">
                    <Award className="w-5 h-5" />
                    Academic Highlights
                  </h4>
                  <ul className="space-y-3">
                    {education.highlights.map((highlight, index) => (
                      <li 
                        key={index}
                        className="flex items-start gap-3 text-muted-foreground hover:text-foreground transition-colors"
                      >
                        <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                        <span className="leading-relaxed">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </Card>

          {/* Contact Card */}
          <Card className="p-8 bg-card/50 backdrop-blur-sm border-border/50 animate-fade-in sticky top-8">
            <div className="space-y-6">
              <div className="text-center">
                <h3 className="text-xl font-bold text-foreground mb-2">Get In Touch</h3>
                <p className="text-sm text-muted-foreground">Ready to collaborate on innovative projects</p>
              </div>

              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-muted/30 hover:bg-muted/50 transition-colors">
                  <p className="text-sm text-muted-foreground mb-1">Phone</p>
                  <p className="font-medium text-foreground">{contactInfo.phone}</p>
                </div>

                <div className="p-4 rounded-xl bg-muted/30 hover:bg-muted/50 transition-colors">
                  <p className="text-sm text-muted-foreground mb-1">Email</p>
                  <p className="font-medium text-foreground break-all">{contactInfo.email}</p>
                </div>

                <div className="p-4 rounded-xl bg-muted/30 hover:bg-muted/50 transition-colors">
                  <p className="text-sm text-muted-foreground mb-1">LinkedIn</p>
                  <p className="font-medium text-primary break-all">{contactInfo.linkedin}</p>
                </div>

                <div className="p-4 rounded-xl bg-muted/30 hover:bg-muted/50 transition-colors">
                  <p className="text-sm text-muted-foreground mb-1">GitHub</p>
                  <p className="font-medium text-primary break-all">{contactInfo.github}</p>
                </div>
              </div>

              <div className="pt-4 border-t border-border/50">
                <p className="text-center text-sm text-muted-foreground">
                  Open to remote work and international opportunities
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;