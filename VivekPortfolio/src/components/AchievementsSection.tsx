import { motion } from "framer-motion";
import { Award, Flag, BookOpen, Mic, ShieldCheck, Target, Trophy } from "lucide-react";

const achievements = [
  { icon: Flag, text: "IIT Kanpur Capture The Flag (CTF) Participant" },
  { icon: Target, text: "TryHackMe: Top 30% Rank & Active Progress" },
  { icon: Trophy, text: "LeetCode: Focus on Data Structures & Algorithms" },
  { icon: Mic, text: "Active Participant in Hackathons & Cyber Workshops" },
];

const AchievementsSection = () => (
  <section id="achievements" className="section-container">
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center gap-3 mb-2">
        <Award className="text-cyber-green" size={24} />
        <h2 className="section-title">Achievements</h2>
      </div>
      <p className="section-subtitle">// milestones</p>

      <div className="grid sm:grid-cols-2 gap-4 max-w-3xl">
        {achievements.map((item, i) => (
          <motion.div
            key={item.text}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            whileHover={{ scale: 1.02 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.4 }}
            className="cyber-border p-4 flex items-center gap-4 hover-glow"
          >
            <div className="w-10 h-10 rounded-md bg-muted flex items-center justify-center shrink-0">
              <item.icon size={18} className="text-cyber-green" />
            </div>
            <span className="text-sm text-foreground">{item.text}</span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  </section>
);

export default AchievementsSection;
