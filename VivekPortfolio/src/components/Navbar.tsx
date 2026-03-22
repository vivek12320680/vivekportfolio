import { useState } from "react";
import { Shield, Menu, X } from "lucide-react";
import profileImg from "@/assets/profile.jpg";

const links = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Practice", href: "#practice" },
  { label: "Certifications", href: "#certifications" },
  { label: "Achievements", href: "#achievements" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-14">
        <a href="#" className="flex items-center gap-2 font-display font-bold text-foreground">
          {/* <img src={} alt="Vivek Nagar" className="w-8 h-8 rounded-full border-2 border-primary object-cover" /> */}
          <span className="text-gradient-cyber">VN</span> Portfolio
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <a key={l.label} href={l.href} className="text-sm text-muted-foreground hover:text-primary transition-colors font-display">
              {l.label}
            </a>
          ))}
        </div>

        {/* Mobile toggle */}
        <button onClick={() => setOpen(!open)} className="md:hidden text-muted-foreground">
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-md">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block px-6 py-3 text-sm text-muted-foreground hover:text-primary font-display border-b border-border/50"
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
