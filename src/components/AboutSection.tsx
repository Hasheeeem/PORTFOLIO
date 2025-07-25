import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Sparkles, Award, Users, Coffee } from "lucide-react";

const AboutSection = () => {
  const skills = [
    "UI/UX Design", "Brand Identity", "Motion Graphics", "Web Development",
    "Product Strategy", "User Research", "Prototyping", "Design Systems"
  ];

  const achievements = [
    { icon: Award, value: "15+", label: "Awards Won" },
    { icon: Users, value: "500+", label: "Happy Clients" },
    { icon: Coffee, value: "1000+", label: "Cups of Coffee" },
    { icon: Sparkles, value: "200+", label: "Projects Delivered" },
  ];

  return (
    <section id="about" className="py-24 lg:py-32 relative overflow-hidden card-glass">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-slide-up">
            <div className="space-y-4">
              <Badge variant="secondary" className="px-4 py-2 text-sm font-medium">
                About Me
              </Badge>
              <h2 className="text-4xl lg:text-5xl font-bold text-foreground leading-tight">
                Crafting Digital 
                <span className="text-gradient"> Experiences</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm a passionate designer and developer with over 8 years of experience 
                creating world-class digital products. I believe in the power of thoughtful 
                design to solve complex problems and create meaningful connections between 
                brands and their audiences.
              </p>
            </div>

            <div className="space-y-6">
              <p className="text-muted-foreground leading-relaxed">
                My approach combines strategic thinking with meticulous attention to detail, 
                ensuring every pixel serves a purpose. I specialize in creating seamless 
                user experiences that not only look beautiful but also drive business results.
              </p>

              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <Badge 
                    key={index} 
                    variant="outline" 
                    className="px-3 py-1 text-sm hover:bg-accent-hover transition-colors"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>

            <Button variant="premium" size="lg" className="group">
              Let's Work Together
              <Sparkles className="ml-2 h-4 w-4 group-hover:rotate-12 transition-transform" />
            </Button>
          </div>

          {/* Right Content - Stats Grid */}
          <div className="grid grid-cols-2 gap-6 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            {achievements.map((achievement, index) => (
              <div 
                key={index}
                className="card-premium group cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center shadow-elegant group-hover:shadow-glow transition-all duration-500">
                    <achievement.icon className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <div className="space-y-1">
                    <div className="text-3xl lg:text-4xl font-bold text-foreground">
                      {achievement.value}
                    </div>
                    <div className="text-sm text-muted-foreground font-medium">
                      {achievement.label}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Quote */}
        <div className="mt-24 text-center animate-slide-up" style={{ animationDelay: "0.6s" }}>
          <blockquote className="text-xl lg:text-2xl font-medium text-foreground leading-relaxed max-w-4xl mx-auto">
            "Design is not just what it looks like and feels like. 
            <span className="text-gradient"> Design is how it works."</span>
          </blockquote>
          <cite className="text-muted-foreground mt-4 block">— Steve Jobs</cite>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;