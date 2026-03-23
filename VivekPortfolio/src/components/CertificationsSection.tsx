import { motion } from "framer-motion";
import { ShieldCheck, BookOpen, FileCode, MonitorPlay, Server, Award, BrainCircuit, Users, Lightbulb, Calculator } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

const certifications = [
  {
    title: "Cyber Security Essentials",
    organization: "LPU",
    icon: ShieldCheck,
    image: "/CyberSecurityEssientials.png"
  },
  {
    title: "Java Programming",
    organization: "LPU & iameone (NeoColab)",
    icon: FileCode,
    image: "/java.png"
  },
  {
    title: "Responsive Web Design",
    organization: "FreeCodeCamp",
    icon: MonitorPlay,
    image: "/ResponsiveWebDesign.png"
  },
  {
    title: "Computer Communications",
    organization: "Coursera",
    icon: Server,
    image: "/computerCommunication.png"
  },
  {
    title: "Spoken English & Communication",
    organization: "Winner Academy",
    icon: BookOpen,
    image: "/Winner-English.jpg"
  },
  {
    title: "IBM Hardware & OS Course",
    organization: "IBM",
    icon: MonitorPlay,
    image: "/IBMhardwareAnd OS.png"
  },
  {
    title: "Master Generative AI & Tools",
    organization: "Udemy",
    icon: BrainCircuit,
    image: "/MasterGenerativeAIandTools.png"
  },
  {
    title: "Prompt Engineering",
    organization: "Infosys",
    icon: Lightbulb,
    image: "/PromptEngineering.png"
  },
  {
    title: "Build Generative AI",
    organization: "Infosys",
    icon: BrainCircuit,
    image: "/BuildGenerativeAI.png"
  },
  {
    title: "Computational Theory",
    organization: "Infosys",
    icon: Calculator,
    image: "/ComputationalTheory.png"
  },
  {
    title: "Community Development",
    organization: "NEEV Foundation",
    icon: Users,
    image: "/CommunityDevelopment.jpg"
  }
];

const CertificationsSection = () => (
  <section id="certifications" className="section-container">
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center gap-3 mb-2">
        <Award className="text-cyber-orange" size={24} />
        <h2 className="section-title">Trainings & Certifications</h2>
      </div>
      <p className="section-subtitle">// professional_development</p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {certifications.map((cert, i) => (
          <Dialog key={cert.title}>
            <DialogTrigger asChild>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.02 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
                className="cyber-border p-6 flex flex-col hover-glow cursor-pointer"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-md bg-muted flex items-center justify-center shrink-0">
                    <cert.icon size={20} className="text-cyber-orange" />
                  </div>
                  <div className="flex flex-col">
                    <h3 className="font-display font-semibold text-foreground leading-tight">{cert.title}</h3>
                    <span className="text-sm text-muted-foreground mt-1">{cert.organization}</span>
                  </div>
                </div>
              </motion.div>
            </DialogTrigger>
            <DialogContent className="max-w-4xl border-border bg-background/95 backdrop-blur-md">
              <DialogHeader>
                <VisuallyHidden>
                  <DialogTitle>{cert.title}</DialogTitle>
                </VisuallyHidden>
              </DialogHeader>
              <div className="flex flex-col items-center justify-center p-2">
                <h3 className="font-display font-bold text-2xl mb-4 text-foreground">{cert.title}</h3>
                <img 
                  src={cert.image} 
                  alt={cert.title} 
                  className="w-full h-auto rounded-md object-contain max-h-[75vh]" 
                />
              </div>
            </DialogContent>
          </Dialog>
        ))}
      </div>
    </motion.div>
  </section>
);

export default CertificationsSection;
