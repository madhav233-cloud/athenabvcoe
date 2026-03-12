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
          About Us
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-muted-foreground max-w-2xl text-lg"
        >
          We are a community of game developers, designers, and artists passionate about building interactive experiences.
        </motion.p>
      </Section>

      {/* Mission & Vision */}
      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="card-surface p-8">
            <h2 className="text-primary mb-4">Our Mission</h2>
            <p className="text-muted-foreground">
              To provide a collaborative environment where students can learn game development, share knowledge, and build projects that push creative boundaries.
            </p>
          </motion.div>
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="card-surface p-8">
            <h2 className="text-secondary mb-4">Our Vision</h2>
            <p className="text-muted-foreground">
              To be the leading student-run game development community, producing skilled developers and memorable games that showcase our university's talent.
            </p>
          </motion.div>
        </div>
      </Section>

      {/* What We Teach */}
      <Section>
        <h2 className="text-foreground mb-12 text-center">What We Teach</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {["Game Design Fundamentals", "3D Modeling & Animation", "Programming & Architecture"].map((topic) => (
            <motion.div key={topic} whileHover={{ y: -4 }} className="card-surface p-6 text-center">
              <h3 className="text-foreground mb-2">{topic}</h3>
              <p className="text-muted-foreground text-sm">
                Hands-on workshops and mentorship from experienced members.
              </p>
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
