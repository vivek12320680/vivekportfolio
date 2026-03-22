import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

const EducationSection = () => (
  <section id="education" className="section-container">
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center gap-3 mb-2">
        <GraduationCap className="text-cyber-pink" size={24} />
        <h2 className="section-title">Education</h2>
      </div>
      <p className="section-subtitle">// academic_record</p>

      <div className="space-y-4 max-w-3xl">
        <div className="cyber-border p-6">
          <div className="flex items-start justify-between flex-wrap gap-2">
            <div>
              <h3 className="font-display font-semibold text-foreground text-lg">Lovely Professional University</h3>
              <p className="text-muted-foreground text-sm">B.Tech Computer Science (Cyber Security)</p>
            </div>
            <span className="font-display text-cyber-pink font-bold text-lg">CGPA: 7.1</span>
          </div>
        </div>
        <div className="cyber-border p-6">
          <div className="flex items-start justify-between flex-wrap gap-2">
            <div>
              <h3 className="font-display font-semibold text-foreground text-lg">Ruby Public School, Kota</h3>
              <p className="text-muted-foreground text-sm">PCM</p>
            </div>
            <span className="font-display text-cyber-pink font-bold text-lg">72%</span>
          </div>
        </div>
      </div>
    </motion.div>
  </section>
);

export default EducationSection;
