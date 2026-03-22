import { motion } from "framer-motion";
import { Shield } from "lucide-react";

const AboutSection = () => (
  <section id="about" className="section-container">
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center gap-3 mb-2">
        <Shield className="text-cyber-pink" size={24} />
        <h2 className="section-title">About Me</h2>
      </div>
      <p className="section-subtitle">// who_am_i</p>
        <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
I am a B.Tech Computer Science (Cyber Security) student at Lovely Professional University, currently building a strong foundation in cybersecurity with a growing interest in defensive security (Blue Team), including threat detection, system monitoring, and incident response.
Alongside cybersecurity, I am actively developing problem-solving skills through platforms like LeetCode and exploring real-world security scenarios on TryHackMe and Hack The Box. I also have a keen interest in areas such as backend development, cloud technologies, AI, and OSINT, which helps me understand systems from both a security and development perspective.
While I am still in the learning phase, I am highly motivated, consistent, and focused on continuous improvement. I aim to become a well-rounded professional who can not only identify vulnerabilities but also contribute to building secure, scalable, and efficient systems.        </p>
    </motion.div>
  </section>
);

export default AboutSection;
