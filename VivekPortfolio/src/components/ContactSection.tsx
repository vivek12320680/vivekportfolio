import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Phone } from "lucide-react";
import { toast } from "sonner";

const contacts = [
  { icon: Mail, label: "Email", value: "viveknagar2005@gmail.com", href: "mailto:viveknagar2005@gmail.com" },
  { icon: Phone, label: "Phone", value: "+91-9982958008", href: "tel:+919982958008" },
  { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/viveknagar05", href: "https://linkedin.com/in/viveknagar05" },
  { icon: Github, label: "GitHub", value: "github.com/vivek12320680", href: "https://github.com/vivek12320680" },
];

const ContactSection = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "50cc16fd-2bca-46e2-a0ea-332f53535c50",
          ...formData
        }),
      });

      const result = await response.json();
      
      if (result.success) {
        setFormData({ name: "", email: "", message: "" });
        toast.success("Message sent successfully! I will get back to you soon.");
      } else {
        toast.error(result.message || "Something went wrong. Please try again.");
      }
    } catch (error) {
      toast.error("Failed to send message. Please check your connection.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section id="contact" className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
          <span className="text-gradient-cyber">Get In Touch</span>
        </h2>
        <p className="text-muted-foreground text-sm md:text-base max-w-xl mx-auto font-display">
          Have a question or want to work together? Fill out the form below or reach out directly through my contact information.
        </p>
      </motion.div>

      <div className="grid lg:grid-cols-5 gap-6 lg:gap-8 items-stretch max-w-6xl mx-auto">
        {/* Left Side: Contact Form (Takes 3 columns) */}
        <motion.div 
          className="lg:col-span-3 cyber-border p-6 md:p-8 shadow-2xl"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.5 }}
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2 text-left">
              <label htmlFor="name" className="text-sm font-semibold text-foreground tracking-wide">Name</label>
              <input 
                type="text" 
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full bg-background border border-border rounded-lg px-4 py-3.5 text-sm focus:outline-none focus:border-cyber-purple focus:ring-1 focus:ring-cyber-purple transition-all text-foreground"
                placeholder="Your name"
              />
            </div>

            <div className="space-y-2 text-left">
              <label htmlFor="email" className="text-sm font-semibold text-foreground tracking-wide">Email</label>
              <input 
                type="email" 
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full bg-background border border-border rounded-lg px-4 py-3.5 text-sm focus:outline-none focus:border-cyber-purple focus:ring-1 focus:ring-cyber-purple transition-all text-foreground"
                placeholder="your.email@example.com"
              />
            </div>

            <div className="space-y-2 text-left">
              <label htmlFor="message" className="text-sm font-semibold text-foreground tracking-wide">Message</label>
              <textarea 
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full bg-background border border-border rounded-lg px-4 py-3.5 text-sm focus:outline-none focus:border-cyber-purple focus:ring-1 focus:ring-cyber-purple transition-all text-foreground resize-none"
                placeholder="Your message..."
              />
            </div>

            <button 
              type="submit" 
              disabled={isSubmitting}
              className={`w-full bg-[#a855f7] text-white font-display font-medium rounded-lg px-4 py-4 flex items-center justify-center gap-2 transition-all hover:opacity-90 shadow-lg shadow-[#a855f7]/20 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover-glow'}`}
            >
              {isSubmitting ? (
                <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              ) : (
                <span>Send Message</span>
              )}
            </button>
          </form>
        </motion.div>

        {/* Right Side: Contact Information (Takes 2 columns) */}
        <motion.div 
          className="lg:col-span-2 cyber-border p-6 lg:p-8 flex flex-col justify-between shadow-2xl h-full"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <div>
            <h3 className="text-xl font-display font-bold text-foreground mb-8 text-left">Contact Information</h3>
            
            <div className="space-y-8">
              {contacts.map((item) => (
                <div key={item.label} className="flex flex-col md:flex-row items-center md:items-start gap-4 text-center md:text-left group">
                  <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center shrink-0 group-hover:bg-[#a855f7]/20 transition-colors">
                    <item.icon size={20} className="text-cyber-purple" />
                  </div>
                  <div className="overflow-hidden">
                    <p className="text-sm font-semibold text-foreground mb-0.5">{item.label}</p>
                    <a 
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-muted-foreground hover:text-cyber-purple transition-colors break-all"
                    >
                      {item.value}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-border/50 text-left">
            <p className="text-sm font-semibold text-foreground mb-4 text-center md:text-left">Follow Me</p>
            <div className="flex justify-center md:justify-start gap-3">
              <a href="#" className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:text-cyber-purple hover:bg-[#a855f7]/10 transition-colors">
                <span className="font-semibold text-sm">T</span>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:text-cyber-purple hover:bg-[#a855f7]/10 transition-colors">
                <span className="font-semibold text-sm">I</span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
