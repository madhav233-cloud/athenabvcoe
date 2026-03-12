import { motion } from "framer-motion";
import Section from "@/components/Section";

const Join = () => {
  return (
    <div className="pt-16">
      <Section>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-foreground neon-text-purple mb-6"
        >
          Join Us
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-muted-foreground max-w-2xl text-lg"
        >
          Your next project starts here. Whether you're a beginner or experienced, there's a place for you.
        </motion.p>
      </Section>
    </div>
  );
};

export default Join;
