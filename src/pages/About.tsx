import { motion } from "framer-motion";
import Section from "@/components/Section";
import ImagePlaceholder from "@/components/ImagePlaceholder";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const techs = [
  { name: "Unity", color: "primary" },
  { name: "Unreal Engine", color: "secondary" },
  { name: "Blender", color: "accent" },
  { name: "C#", color: "primary" },
  { name: "C++", color: "secondary" },
];

const goals = [
  { id: "G1", text: "To create awareness and interest in gaming and game development among students." },
  { id: "G2", text: "To provide opportunities for students to enhance their skills in game development areas and game experience by working on various projects." },
  { id: "G3", text: "To provide an opportunity to showcase their talents in exhibitions, competitions, and gaming tournaments." },
  { id: "G4", text: "To enhance creativity, technical skills, teamwork and strategy making." },
];

const About = () => {
  return (
    <div className="pt-16">
      {/* Header */}
      <Section>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-foreground neon-text-purple mb-6"
        >
          About Athena
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-muted-foreground text-sm font-display uppercase tracking-wider mb-2"
        >
          Chapter Head (Faculty Name): <span className="text-secondary">Dr. Suman Yadav</span>
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-muted-foreground max-w-3xl text-lg"
        >
          Gaming in this day and age is not only associated with entertainment but has also progressed towards full time careers as competitive gamers, streamers, and game developers. Athena, founded in 2023, aims to provide a platform to students where we host competitive gaming events aimed at challenging abilities of the player and organize seminars and workshops focused towards game development while having fun and entertaining others as well.
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-muted-foreground max-w-3xl text-base mt-4"
        >
          Game development is a vast industry. A game developer could be a programmer, a sound designer, an artist, a designer, or many other roles available in the industry. We work on real time game development projects as well.
        </motion.p>
      </Section>

      {/* Goals */}
      <Section>
        <h2 className="text-foreground mb-12 text-center neon-text-purple">Goals of Athena</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {goals.map((goal, i) => (
            <motion.div
              key={goal.id}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="card-surface p-6 flex gap-4 items-start"
            >
              <span className="font-display text-2xl font-bold text-primary neon-text-purple shrink-0">{goal.id}</span>
              <p className="text-muted-foreground">{goal.text}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Technologies */}
      <Section>
        <h2 className="text-foreground mb-12 text-center">Technologies</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {techs.map((tech) => (
            <motion.div
              key={tech.name}
              whileHover={{ scale: 1.1 }}
              className={`card-surface px-6 py-3 font-display text-sm uppercase tracking-wider ${
                tech.color === "primary" ? "text-primary" :
                tech.color === "secondary" ? "text-secondary" : "text-accent"
              }`}
            >
              {tech.name}
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Photos placeholder */}
      <Section>
        <h2 className="text-foreground mb-8 text-center">Gallery</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <ImagePlaceholder key={i} aspect="4/3" label={`PHOTO ${i}`} className="rounded-lg" />
          ))}
        </div>
      </Section>
    </div>
  );
};

export default About;
