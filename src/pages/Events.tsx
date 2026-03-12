import { motion } from "framer-motion";
import Section from "@/components/Section";
import ImagePlaceholder from "@/components/ImagePlaceholder";

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const events = [
  { title: "Spring Game Jam 2026", date: "Mar 28–30, 2026", type: "Game Jam", desc: "48-hour game jam. Build something amazing from scratch. Theme revealed at kickoff." },
  { title: "Unity Masterclass", date: "Apr 5, 2026", type: "Workshop", desc: "Deep dive into Unity's new rendering pipeline and shader graph." },
  { title: "Industry Speaker Night", date: "Apr 12, 2026", type: "Speaker Session", desc: "A senior developer from a AAA studio shares insights on game architecture." },
  { title: "Blender Bootcamp", date: "Apr 19, 2026", type: "Workshop", desc: "Learn 3D modeling, texturing, and basic animation in Blender." },
  { title: "Hackathon: AI in Games", date: "May 3–4, 2026", type: "Hackathon", desc: "Build AI-driven game mechanics in this 24-hour hackathon." },
  { title: "End-of-Semester Showcase", date: "May 20, 2026", type: "Event", desc: "Present your semester projects to the community and invited industry guests." },
];

const typeColor: Record<string, string> = {
  "Game Jam": "text-primary",
  "Workshop": "text-secondary",
  "Speaker Session": "text-accent",
  "Hackathon": "text-primary",
  "Event": "text-secondary",
};

const Events = () => {
  return (
    <div className="pt-16">
      <Section>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-foreground neon-text-purple mb-6"
        >
          Events
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-muted-foreground max-w-2xl text-lg"
        >
          Game jams, workshops, hackathons, and speaker sessions — there's always something happening.
        </motion.p>
      </Section>

      <Section>
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {events.map((event) => (
            <motion.div
              key={event.title}
              variants={fadeUp}
              whileHover={{ y: -4, scale: 1.02 }}
              className="card-surface overflow-hidden cursor-pointer"
            >
              <ImagePlaceholder aspect="16/9" label="EVENT IMAGE" />
              <div className="p-5">
                <div className="flex items-center gap-2 mb-2">
                  <span className={`font-display text-xs uppercase tracking-wider ${typeColor[event.type] || "text-muted-foreground"}`}>
                    {event.type}
                  </span>
                  <span className="text-muted-foreground text-xs">•</span>
                  <span className="text-muted-foreground text-xs">{event.date}</span>
                </div>
                <h3 className="text-foreground mb-2">{event.title}</h3>
                <p className="text-muted-foreground text-sm">{event.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Section>
    </div>
  );
};

export default Events;
