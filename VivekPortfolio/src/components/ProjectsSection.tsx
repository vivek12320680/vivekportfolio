import { motion } from "framer-motion";
import { FolderGit2, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "eVoteGuard",
    subtitle: "Cybersecure Face Verified Online Voting System",
    description: "Architected a secure and trustworthy voting platform utilizing facial recognition and OTP authentication, backed by a fully encrypted Google Cloud SQL database to ensure data integrity.",
    tags: ["Python", "Flask", "Face Recognition", "Cloud SQL"],
    features: ["Biometric verification", "OTP authentication", "Encrypted database"],
    github: "#",
  },
  {
    title: "AI Resume Builder",
    subtitle: "AI-Powered Resume Generation",
    description: "Developed a dynamic web application that leverages the Google Gemini API to automatically generate and format professional resume content with AI assistance.",
    tags: ["HTML", "CSS", "JavaScript", "Gemini API"],
    features: ["AI content generation", "Professional formatting", "Real-time preview"],
    github: "#",
  },
  {
    title: "Travel Guide Website",
    subtitle: "Interactive Travel Information Platform",
    description: "Designed a responsive and visually appealing travel information platform with an interactive user interface for exploring global destinations and comprehensive travel guides.",
    tags: ["HTML", "CSS", "JavaScript"],
    features: ["Interactive UI", "Responsive design", "Destination catalog"],
    github: "#",
  },
];

const ProjectsSection = () => (
  <section id="projects" className="section-container">
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center gap-3 mb-2">
        <FolderGit2 className="text-cyber-blue" size={24} />
        <h2 className="section-title">Projects</h2>
      </div>
      <p className="section-subtitle">// recent_builds</p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, i) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.4 }}
            className="cyber-border p-6 flex flex-col hover-glow group"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="w-10 h-10 rounded-md bg-muted flex items-center justify-center">
                <FolderGit2 size={18} className="text-cyber-blue" />
              </div>
              <div className="flex gap-3">
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-cyber-blue transition-colors cursor-pointer" title="View Source">
                  <Github size={18} />
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors cursor-pointer" title="Live Demo">
                  <ExternalLink size={18} />
                </a>
              </div>
            </div>
            <h3 className="font-display font-semibold text-foreground text-xl mb-1">{project.title}</h3>
            <p className="text-sm text-secondary font-display mb-3">{project.subtitle}</p>
            <p className="text-muted-foreground text-sm flex-1 mb-4 leading-relaxed">{project.description}</p>
            
            <div className="mb-4">
              <h4 className="text-xs font-semibold text-foreground mb-2 flex items-center gap-2">
                <span className="w-1 h-1 rounded-full bg-cyber-blue"></span> Key Features
              </h4>
              <ul className="space-y-1">
                {project.features.map((feature, idx) => (
                  <li key={idx} className="text-xs text-muted-foreground flex items-center gap-2">
                    <span className="text-cyber-blue/70">▹</span> {feature}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-border/50">
              {project.tags.map((tag) => (
                <span key={tag} className="text-xs font-display px-2 py-1 rounded bg-muted text-muted-foreground border border-border/50">
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  </section>
);

export default ProjectsSection;
