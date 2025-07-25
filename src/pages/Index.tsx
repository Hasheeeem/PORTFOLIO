import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";
import EducationSection from "@/components/EducationSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background/50 main-container">
      <Navigation />
      <div className="space-y-8 p-4 md:p-8">
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <SkillsSection />
        <EducationSection />
      </div>
    </div>
  );
};

export default Index;
