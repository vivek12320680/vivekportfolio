import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowDown, FileText, Mail, Eye } from "lucide-react";

const lines = [
  "> Hello, I am Vivek Nagar",
  "> Cybersecurity Enthusiast",
  "> Welcome to my portfolio",
];

const Hero = () => {
  const [displayedLines, setDisplayedLines] = useState<string[]>([]);
  const [currentLine, setCurrentLine] = useState(0);
  const [currentChar, setCurrentChar] = useState(0);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    if (currentLine >= lines.length) {
      setTimeout(() => setShowContent(true), 400);
      return;
    }

    const line = lines[currentLine];
    if (currentChar < line.length) {
      const timeout = setTimeout(() => {
        setDisplayedLines((prev) => {
          const updated = [...prev];
          updated[currentLine] = line.slice(0, currentChar + 1);
          return updated;
        });
        setCurrentChar((c) => c + 1);
      }, 40 + Math.random() * 30);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setCurrentLine((l) => l + 1);
        setCurrentChar(0);
      }, 300);
      return () => clearTimeout(timeout);
    }
  }, [currentLine, currentChar]);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-4 md:px-12 lg:px-24">
      {/* Subtle animated moving grid background */}
      <motion.div
        className="absolute inset-0 opacity-[0.05]"
        animate={{
          backgroundPosition: ["0px 0px", "60px 60px"]
        }}
        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
        style={{
          backgroundImage: `linear-gradient(hsl(156 100% 48%) 1px, transparent 1px), linear-gradient(90deg, hsl(156 100% 48%) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 md:gap-16 pt-20">
        
        {/* Left Side Content */}
        <div className="flex-1 w-full order-2 md:order-1">
          {/* Terminal Window */}
          <div className="terminal-window mb-8 max-w-[550px]">
            {/* Title bar */}
            <div className="flex items-center gap-2 px-4 py-3 border-b border-border">
              <div className="w-3 h-3 rounded-full bg-destructive/80" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <div className="w-3 h-3 rounded-full bg-primary/80" />
              <span className="ml-2 text-xs text-muted-foreground font-display">vivek@portfolio:~$</span>
            </div>
            {/* Terminal body */}
            <div className="p-6 font-display text-sm md:text-base space-y-1 min-h-[120px]">
              {displayedLines.map((line, i) => (
                <div key={i} className="text-primary">{line}</div>
              ))}
              {currentLine < lines.length && (
                <span className="text-primary blink-cursor" />
              )}
            </div>
          </div>

          {/* Main content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={showContent ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-left"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-display font-bold mb-3">
              <span className="text-gradient-cyber">Vivek Nagar</span>
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl font-display mb-4">
              Cybersecurity Student | B.Tech CSE (Cyber Security)
            </p>
            <p className="text-muted-foreground text-base md:text-lg max-w-xl mb-8 leading-relaxed">
              A proactive cybersecurity student building expertise in ethical hacking, system security, and networking, while also exploring defensive security, problem-solving, and emerging technologies to develop a well-rounded technical skill set.
            </p>

            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => scrollTo("projects")}
                className="px-6 py-3 rounded-md bg-primary text-primary-foreground font-display text-base font-semibold hover:opacity-90 transition-opacity flex items-center gap-2"
              >
                <ArrowDown size={18} /> View Projects
              </button>
              <div className="flex gap-2">
                <a
                  href="/CV.pdf"
                  download="Vivek_Nagar_CV.pdf"
                  className="px-6 py-3 rounded-md border border-border text-foreground font-display text-base font-semibold hover-glow flex items-center gap-2"
                >
                  <FileText size={18} /> Download Resume
                </a>
                <a
                  href="/CV.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-3 rounded-md border border-border text-foreground hover-glow flex items-center justify-center transition-opacity hover:opacity-80"
                  title="View CV"
                >
                  <Eye size={18} />
                </a>
              </div>
              <button
                onClick={() => scrollTo("contact")}
                className="px-6 py-3 rounded-md border border-secondary/30 text-secondary font-display text-base font-semibold hover:border-secondary/60 transition-colors flex items-center gap-2"
              >
                <Mail size={18} /> Contact Me
              </button>
            </div>
          </motion.div>
        </div>

        {/* Right Side Image */}
        <motion.div 
          className="flex-1 w-full flex justify-center md:justify-end order-1 md:order-2"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={showContent ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="relative group">
            {/* Soft glow effect behind the image */}
            <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-full blur opacity-30 group-hover:opacity-60 transition duration-1000 group-hover:duration-300"></div>
            <div className="relative rounded-full overflow-hidden border border-border bg-background w-64 h-80 sm:w-72 sm:h-96 md:w-80 md:h-[400px] lg:w-[420px] lg:h-[500px]">
              <img 
                src="/vivek.jpg" 
                alt="Vivek Nagar - Cybersecurity Enthusiast" 
                className="w-full h-full object-cover object-top transition-all duration-500 ease-in-out hover:scale-[1.05]"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
