import { motion } from "framer-motion";
import { Code, Shield, Globe, Server, Users } from "lucide-react";

const skillCategories = [
  {
    title: "Languages",
    icon: Code,
    items: ["C", "C++", "Java", "Python", "JavaScript"],
  },
  {
    title: "Frameworks",
    icon: Globe,
    items: ["HTML", "CSS"],
  },
  {
    title: "Tools/Platforms",
    icon: Shield,
    items: ["Nmap", "Wireshark", "Git", "GitHub", "Linux", "VMware", "Autopsy", "Recon-ng", "Maltego"],
  },
  {
    title: "Backend/Concepts",
    icon: Server,
    items: ["REST APIs", "Google Cloud SQL", "Encryption/Hashing"],
  },
  {
    title: "Soft Skills",
    icon: Users,
    items: ["Leadership", "Problem-Solving", "Communication", "Adaptability"],
  },
];

const SkillsSection = () => (
  <section id="skills" className="section-container">
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center gap-3 mb-2">
        <Code className="text-cyber-purple" size={24} />
        <h2 className="section-title">Skills</h2>
      </div>
      <p className="section-subtitle">// tech_stack</p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillCategories.map((cat, i) => (
          <motion.div 
            key={cat.title} 
            whileHover={{ scale: 1.02 }}
            className="cyber-border p-6 hover-glow transition-all duration-300"
          >
            <div className="flex items-center gap-2 mb-4">
              <cat.icon size={18} className="text-cyber-purple" />
              <h3 className="font-display font-semibold text-foreground">{cat.title}</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {cat.items.map((item) => (
                <span key={item} className="skill-badge hover:!text-cyber-purple">{item}</span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  </section>
);

export default SkillsSection;
