import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowDown, FileText, Mail } from "lucide-react";

const lines = [
  "> Hello, I am Vivek Nagar",
  "> Cybersecurity Enthusiast",
  "> Welcome to my portfolio",
];

const TerminalHero = () => {
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
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-4">
      {/* Subtle grid background */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(hsl(156 100% 48%) 1px, transparent 1px), linear-gradient(90deg, hsl(156 100% 48%) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 w-full max-w-2xl">
        {/* Terminal Window */}
        <div className="terminal-window">
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
          initial={{ opacity: 0, y: 20 }}
          animate={showContent ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mt-10 text-center"
        >
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-3">
            <span className="text-gradient-cyber">Vivek Nagar</span>
          </h1>
          <p className="text-muted-foreground text-lg md:text-xl font-display mb-4">
            Cybersecurity Student | B.Tech CSE (Cyber Security)
          </p>
          <p className="text-muted-foreground max-w-lg mx-auto mb-8">
            Passionate cybersecurity enthusiast currently learning ethical hacking, networking, and system security.
          </p>

          <div className="flex flex-wrap justify-center gap-3">
            <button
              onClick={() => scrollTo("projects")}
              className="px-6 py-3 rounded-md bg-primary text-primary-foreground font-display text-sm font-semibold hover:opacity-90 transition-opacity flex items-center gap-2"
            >
              <ArrowDown size={16} /> View Projects
            </button>
            <a
              href="/CV.pdf"
              download="cv.pdf"
              className="px-6 py-3 rounded-md border border-border text-foreground font-display text-sm font-semibold hover-glow flex items-center gap-2"
            >
              <FileText size={16} /> Download Resume
            </a>
            <button
              onClick={() => scrollTo("contact")}
              className="px-6 py-3 rounded-md border border-secondary/30 text-secondary font-display text-sm font-semibold hover:border-secondary/60 transition-colors flex items-center gap-2"
            >
              <Mail size={16} /> Contact Me
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TerminalHero;
