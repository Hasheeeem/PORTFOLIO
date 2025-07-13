import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { MapPin, Calendar, ExternalLink } from "lucide-react";

const experience = [
  {
    title: "Software Solutions Intern",
    company: "Laser Lighting Equipment Trading LLC",
    location: "Dallas, UAE",
    period: "July 2025 - Present",
    type: "Internship",
    achievements: [
      "Contributed to client-facing software tools using Supabase and React.JS",
      "Collaborated on UI/UX design improvements and backend service optimization",
      "Engaged in real-world development tasks and software problem-solving as part of a remote freelance internship"
    ]
  },
  {
    title: "Full-Stack Developer Intern",
    company: "PeopleMatrix",
    location: "Bangalore, India",
    period: "July 2025 - Present",
    type: "Internship",
    achievements: [
      "Lead development of a secure code analytics tool using SAST platforms like SonarQube and Semgrep",
      "Designed comprehensive web applications with cutting-edge tech stacks for scalable hosting infrastructure",
      "Automate CI/CD pipelines with GitHub Actions for integrated testing and vulnerability scans",
      "Drive research and planning for future penetration testing capabilities and dynamic analysis tools"
    ]
  }
];

const ExperienceSection = () => {
  return (
    <section className="py-24 px-6 bg-gradient-subtle">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <Badge variant="secondary" className="mb-4">Professional Journey</Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Work Experience
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Building innovative solutions and contributing to cutting-edge projects in software development
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="space-y-8">
          {experience.map((exp, index) => (
            <Card 
              key={index}
              className="p-8 hover:shadow-floating transition-all duration-500 hover:-translate-y-1 bg-card/50 backdrop-blur-sm border-border/50 animate-fade-in group"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                <div className="space-y-2">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {exp.title}
                    </h3>
                    <Badge variant="outline" className="text-xs">
                      {exp.type}
                    </Badge>
                  </div>
                  <p className="text-xl text-primary font-semibold">
                    {exp.company}
                  </p>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      <span>{exp.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>{exp.period}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Achievements */}
              <div className="space-y-3">
                <h4 className="text-lg font-semibold text-foreground mb-4">Key Achievements</h4>
                <ul className="space-y-3">
                  {exp.achievements.map((achievement, achIndex) => (
                    <li 
                      key={achIndex}
                      className="flex items-start gap-3 text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                      <span className="leading-relaxed">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;