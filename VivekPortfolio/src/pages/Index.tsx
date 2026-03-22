import Navbar from "@/components/Navbar";
import CustomCursor from "@/components/CustomCursor";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import PracticeSection from "@/components/PracticeSection";
import CertificationsSection from "@/components/CertificationsSection";
import AchievementsSection from "@/components/AchievementsSection";
import EducationSection from "@/components/EducationSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <CustomCursor />
      <Navbar />
      <Hero />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <PracticeSection />
      <CertificationsSection />
      <AchievementsSection />
      <EducationSection />
      <ContactSection />
      <footer className="border-t border-border py-8 text-center text-sm text-muted-foreground font-display">
        <p>© 2026 Vivek Nagar. Built with passion for cybersecurity.</p>
      </footer>
    </div>
  );
};

export default Index;
