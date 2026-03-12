import { motion } from "framer-motion";
import Section from "@/components/Section";
import { Github, Linkedin, Twitter } from "lucide-react";

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } }
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const members = [
{ name: "Alex Chen", role: "President", bio: "Passionate about game design and real-time rendering." },
{ name: "Sarah Kim", role: "Vice President", bio: "Specializes in narrative design and Unity development." },
{ name: "Marcus Johnson", role: "Technical Lead", bio: "C++ enthusiast and Unreal Engine expert." },
{ name: "Priya Patel", role: "Design Lead", bio: "3D artist and Blender wizard with a love for stylized art." },
{ name: "Jake Williams", role: "Event Coordinator", bio: "Organizes game jams and community events." },
{ name: "Mia Rodriguez", role: "Community Manager", bio: "Keeps the community engaged and growing." }];


const Team = () => {
  return (
    <div className="pt-16">
      <Section>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-foreground neon-text-purple mb-6">
          
          Our Team
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-muted-foreground max-w-2xl text-lg">
          
          The people who keep the society running.
        </motion.p>
      </Section>

      <Section>
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {members.map((member) =>
          <motion.div
            key={member.name}
            variants={fadeUp}
            whileHover={{ y: -4 }}
            className="card-surface p-6 text-center">
            
              



            
              <h3 className="text-foreground mb-1">{member.name}</h3>
              <p className="text-primary font-display text-xs uppercase tracking-wider mb-3">{member.role}</p>
              <p className="text-muted-foreground text-sm mb-4">{member.bio}</p>
              <div className="flex justify-center gap-3">
                <a href="#" className="text-muted-foreground hover:text-secondary transition-colors" aria-label="GitHub">
                  <Github size={16} />
                </a>
                <a href="#" className="text-muted-foreground hover:text-secondary transition-colors" aria-label="LinkedIn">
                  <Linkedin size={16} />
                </a>
                <a href="#" className="text-muted-foreground hover:text-secondary transition-colors" aria-label="Twitter">
                  <Twitter size={16} />
                </a>
              </div>
            </motion.div>
          )}
        </motion.div>
      </Section>
    </div>);

};

export default Team;