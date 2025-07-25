import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowDown } from "lucide-react";
import heroPortrait from "@/assets/hero-portrait.jpg";

const HeroSection = () => {
  const stats = [
    { number: "2+", label: "Years Experience" },
    { number: "15+", label: "Projects Completed" },
  ];

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 card-glass">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-subtle/0"></div>
      <div className="absolute top-20 right-20 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }}></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Left Content */}
        <div className="space-y-8 animate-fade-in">
          {/* Badge */}
          <Badge variant="secondary" className="w-fit">
            Software Developer & Designer
          </Badge>

          {/* Main Heading */}
          <div className="space-y-6">
            <h1 className="text-5xl lg:text-7xl font-bold text-foreground leading-tight">
              Muhammed
              <span className="block text-transparent bg-clip-text bg-gradient-primary">
                Hasheem
              </span>
              <span className="block text-2xl lg:text-3xl font-medium text-muted-foreground">
                Full-Stack Developer
              </span>
            </h1>
            
            <p className="text-lg lg:text-xl text-muted-foreground max-w-lg leading-relaxed">
              Information Technology student passionate about creating innovative software solutions. 
              Currently pursuing B.Tech at Amal Jyothi College of Engineering.
            </p>
          </div>

          {/* Stats */}
          <div className="flex gap-8 text-sm text-muted-foreground">
            {stats.map((stat, index) => (
              <div key={index} className="space-y-1">
                <div className="text-2xl lg:text-3xl font-bold text-foreground">
                  {stat.number}
                </div>
                <div className="opacity-80">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="premium-button">
              View My Projects
            </Button>
            <Button size="lg" variant="ghost" className="glass-button">
              Download Resume
            </Button>
          </div>
        </div>

        {/* Right Content - Hero Image */}
        <div className="relative lg:justify-self-end animate-fade-in" style={{ animationDelay: "0.3s" }}>
          <div className="relative">
            {/* Simple Image */}
            <img
              src={heroPortrait}
              alt="Designer Portrait"
              className="w-full max-w-md mx-auto rounded-3xl shadow-floating grayscale hover:grayscale-0 transition-all duration-700"
            />

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-primary rounded-2xl flex items-center justify-center shadow-floating animate-bounce-gentle">
              <span className="text-primary-foreground font-bold text-lg">✦</span>
            </div>
            <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-accent rounded-xl shadow-elegant animate-float" style={{ animationDelay: "1s" }}></div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-gentle">
        <div className="flex flex-col items-center space-y-2 text-muted-foreground">
          <span className="text-sm tracking-wide">Scroll down</span>
          <ArrowDown className="h-4 w-4" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;