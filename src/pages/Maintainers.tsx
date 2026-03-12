import { motion } from "framer-motion";
import Section from "@/components/Section";
import { Github } from "lucide-react";

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } }
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const maintainers = [
{ name: "Marcus Johnson", role: "Lead Developer", github: "https://github.com" },
{ name: "Alex Chen", role: "Frontend Engineer", github: "https://github.com" },
{ name: "Priya Patel", role: "UI/UX Designer", github: "https://github.com" }];


const Maintainers = () => {
  return (
    <div className="pt-16">
      <Section>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-foreground neon-text-purple mb-6">
          
          Maintainers
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-muted-foreground max-w-2xl text-lg">
          
          The developers who build and maintain this website.
        </motion.p>
      </Section>

      <Section>
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
          
          {maintainers.map((m) =>
          <motion.div
            key={m.name}
            variants={fadeUp}
            whileHover={{ y: -4 }}
            className="card-surface p-6 text-center">
            
              

            
              <h3 className="text-foreground mb-1">{m.name}</h3>
              <p className="text-secondary font-display text-xs uppercase tracking-wider mb-4">{m.role}</p>
              <a
              href={m.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors text-sm">

              <Github size={16} />
                GitHub
              </a>
            </motion.div>
          )}
        </motion.div>
      </Section>
    </div>);

};

export default Maintainers;