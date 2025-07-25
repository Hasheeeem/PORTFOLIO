import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ExternalLink, Github, Calendar } from "lucide-react";

const projects = [
  {
    title: "CareerWise",
    subtitle: "Python, FastAPI, React, OpenAI API",
    period: "May 2025 - Present",
    description: "AI-based web app offering personalized career guidance through GPT-powered meal AI.",
    features: [
      "Mapped user journeys for students, graduates, and professionals to deliver tailored insights",
      "Leveraged dynamic resources like scholarships, internships, and startup positions",
      "Drive go-to-market efforts via pilot programs, B2B partnerships, and user engagement strategies"
    ],
    tech: ["Python", "FastAPI", "React", "OpenAI API"],
    type: "Web Application"
  },
  {
    title: "E-Art Decoration Website",
    subtitle: "Python, FastAPI, React, Material-UI",
    period: "June 2025 - June 2025",
    description: "E-commerce platform for art and decoration services with seamless user experience.",
    features: [
      "Developed a comprehensive platform connecting artists and customers to enhance their digital presence",
      "Implemented a periodic admin dashboard for seamless content management",
      "Added real-time update capabilities to galleries, services, and event showcases"
    ],
    tech: ["Python", "FastAPI", "React", "Material-UI"],
    type: "E-commerce"
  },
  {
    title: "Leaf Management System",
    subtitle: "Java, JSP, Servlets, MySQL",
    period: "Dec 2024 - May 2025",
    description: "Comprehensive application to help companies manage and track client leads efficiently.",
    features: [
      "Implemented role-based access for administrators and agents, with lead assignment, status tracking, and follow-up",
      "Designed scalable backend architecture using Servlets and MySQL for high performance and data integrity",
      "Delivered a responsive user interface for seamless cross-device access"
    ],
    tech: ["Java", "JSP", "Servlets", "MySQL"],
    type: "Management System"
  }
];

const ProjectsSection = () => {
  return (
    <section className="py-24 px-6 card-glass">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <Badge variant="secondary" className="mb-4">Portfolio</Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Showcasing innovative solutions and technical expertise across various domains
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className="group overflow-hidden hover:shadow-floating transition-all duration-500 hover:-translate-y-2 bg-gradient-card backdrop-blur-sm border-border/50 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Project Header */}
              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <Badge variant="outline" className="text-xs">
                    {project.type}
                  </Badge>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm">{project.period}</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-primary font-medium">
                    {project.subtitle}
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Key Features */}
                <div className="space-y-3">
                  <h4 className="text-sm font-semibold text-foreground">Key Features:</h4>
                  <ul className="space-y-2">
                    {project.features.map((feature, featureIndex) => (
                      <li 
                        key={featureIndex}
                        className="flex items-start gap-2 text-sm text-muted-foreground"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                        <span className="leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Stack */}
                <div className="space-y-3">
                  <h4 className="text-sm font-semibold text-foreground">Tech Stack:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <Badge 
                        key={techIndex}
                        variant="secondary" 
                        className="text-xs bg-muted/50 hover:bg-muted transition-colors"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>

              {/* Project Footer */}
              <div className="px-6 pb-6 pt-2 border-t border-border/50">
                <div className="flex gap-3">
                  <Button size="sm" variant="ghost" className="flex-1 group/btn">
                    <Github className="w-4 h-4 mr-2 group-hover/btn:rotate-12 transition-transform" />
                    Code
                  </Button>
                  <Button size="sm" variant="ghost" className="flex-1 group/btn">
                    <ExternalLink className="w-4 h-4 mr-2 group-hover/btn:translate-x-1 transition-transform" />
                    Demo
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;