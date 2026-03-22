import { motion } from "framer-motion";
import { Terminal, Github, Target, Trophy, ExternalLink } from "lucide-react";

const PracticeSection = () => (
  <section id="practice" className="section-container">
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center gap-3 mb-2">
        <Terminal className="text-primary" size={24} />
        <h2 className="section-title">Hands-on Practice</h2>
      </div>
      <p className="section-subtitle">// system_status</p>

      <div className="grid md:grid-cols-2 gap-6">
        {/* TryHackMe */}
        <motion.div 
          whileHover={{ scale: 1.02 }} 
          className="p-6 rounded-lg border border-green-500/30 bg-card hover:shadow-[0_0_15px_rgba(34,197,94,0.3)] transition-all duration-300 flex flex-col justify-between"
        >
          <div>
            <div className="flex items-center gap-3 mb-6">
              <Target size={24} className="text-green-500" />
              <h3 className="font-display font-semibold text-foreground text-xl">TryHackMe</h3>
            </div>
            
            <div className="space-y-4 mb-8">
              <div className="flex justify-between items-center pb-2 border-b border-border/50">
                <span className="text-sm text-muted-foreground font-display">Completed Rooms</span>
                <span className="font-bold text-foreground text-lg">17</span>
              </div>
              <div className="flex justify-between items-center pb-2 border-b border-border/50">
                <span className="text-sm text-muted-foreground font-display">Streak</span>
                <span className="font-bold text-foreground text-lg">30 Days</span>
              </div>
              <div className="flex justify-between items-center pb-2 border-b border-border/50">
                <span className="text-sm text-muted-foreground font-display">Rank Progress</span>
                <span className="font-bold text-green-500 text-lg">Top 30%</span>
              </div>
            </div>
          </div>

          <motion.a 
            href="https://tryhackme.com/room/offensivesecurityintro?path=cybersecurity101" 
            target="_blank" 
            rel="noopener noreferrer"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="w-full py-3 px-4 rounded-md border border-green-500/50 flex items-center justify-center gap-2 text-green-400 font-medium hover:bg-green-500/10 hover:shadow-[0_0_10px_rgba(34,197,94,0.4)] transition-all"
          >
            <span>View TryHackMe Profile</span>
            <ExternalLink size={18} />
          </motion.a>
        </motion.div>

        {/* LeetCode */}
        <motion.div 
          whileHover={{ scale: 1.02 }} 
          className="p-6 rounded-lg border border-orange-500/30 bg-card hover:shadow-[0_0_15px_rgba(249,115,22,0.3)] transition-all duration-300 flex flex-col justify-between"
        >
          <div>
            <div className="flex items-center gap-3 mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-orange-500">
                <path d="M16.102 17.93l-2.697 2.607c-.466.467-1.111.662-1.823.662s-1.357-.195-1.824-.662l-4.332-4.363c-.467-.467-.702-1.15-.702-1.863s.235-1.357.702-1.824l4.319-4.38c.467-.467 1.125-.645 1.837-.645s1.357.195 1.823.662l2.697 2.606c.514.515 1.365.11 1.365-.64v-3.772c0-.39-.142-.782-.429-1.07l-3.636-3.635c-.933-.934-2.222-1.325-3.646-1.325s-2.713.391-3.646 1.325l-4.852 4.908c-.934.934-1.401 2.302-1.401 3.65 0 1.348.467 2.716 1.401 3.65l4.852 4.908c.933.933 2.222 1.324 3.646 1.324s2.713-.391 3.646-1.324l3.636-3.636c.287-.287.429-.68.429-1.07v-3.771c0-.75-.851-1.155-1.365-.64z"/>
              </svg>
              <h3 className="font-display font-semibold text-foreground text-xl">LeetCode</h3>
            </div>
            
            <div className="space-y-4 mb-8">
              <div className="flex justify-between items-center pb-2 border-b border-border/50">
                <span className="text-sm text-muted-foreground font-display">Problems Solved</span>
                <span className="font-bold text-foreground text-lg">35</span>
              </div>
              <div className="flex justify-between items-center pb-2 border-b border-border/50">
                <span className="text-sm text-muted-foreground font-display">Streak</span>
                <span className="font-bold text-foreground text-lg">30 Days</span>
              </div>
              <div className="flex justify-between items-center pb-2 border-b border-border/50">
                <span className="text-sm text-muted-foreground font-display">Rank</span>
                <span className="font-bold text-orange-500 text-lg">&lt; 3,000,000</span>
              </div>
              
              <div className="flex items-center gap-2 text-muted-foreground pt-2">
                <Trophy size={16} className="text-orange-500" />
                <span className="text-sm font-display">Focus: Data Structures & Algorithms</span>
              </div>
            </div>
          </div>

          <motion.a 
            href="https://leetcode.com/u/VivekNagar2005/" 
            target="_blank" 
            rel="noopener noreferrer"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="w-full py-3 px-4 rounded-md border border-orange-500/50 flex items-center justify-center gap-2 text-orange-400 font-medium hover:bg-orange-500/10 hover:shadow-[0_0_10px_rgba(249,115,22,0.4)] transition-all"
          >
            <span>View LeetCode Profile</span>
            <ExternalLink size={18} />
          </motion.a>
        </motion.div>
      </div>
    </motion.div>
  </section>
);

export default PracticeSection;
