import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Section from "@/components/Section";
import NeonButton from "@/components/NeonButton";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import { Gamepad2, Code, Users, Calendar } from "lucide-react";
import athenaLogo from "@/assets/athena-logo.jpg";

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Home = () => {
  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center pt-16">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary/10 rounded-full blur-[100px]" />
        </div>

        <div className="section-container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="font-display text-sm uppercase tracking-widest text-secondary mb-4"
              >
                Game Development Society
              </motion.p>
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="text-foreground mb-6 neon-text-purple"
              >
                ATHENA
              </motion.h1>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="text-muted-foreground text-lg max-w-xl mb-8"
              >
                Building games, learning technology, and creating experiences.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="flex flex-wrap gap-4"
              >
                <Link to="/about#gallery">
                  <NeonButton>View Gallery</NeonButton>
                </Link>
                <Link to="/events">
                  <NeonButton variant="secondary">Explore Events</NeonButton>
                </Link>
              </motion.div>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="lg:col-span-5"
            >
              <img src={athenaLogo} alt="Athena - Game Development Society" className="rounded-lg w-full object-cover" style={{ aspectRatio: "4/3" }} />
            </motion.div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <Section>
        <h2 className="text-foreground mb-12 text-center">What We Do</h2>
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {[
            { icon: Gamepad2, title: "Game Jams", desc: "48-hour challenges to build complete games from scratch." },
            { icon: Code, title: "Workshops", desc: "Hands-on sessions on Unity, Unreal, Blender, and more." },
            { icon: Users, title: "Community", desc: "A network of passionate developers, designers, and artists." },
            { icon: Calendar, title: "Events", desc: "Speaker talks, hackathons, and demo days every month." },
          ].map((item) => (
            <motion.div key={item.title} variants={fadeUp} className="card-surface p-6 group">
              <motion.div whileHover={{ scale: 1.1 }} className="w-10 h-10 rounded bg-primary/10 flex items-center justify-center mb-4">
                <item.icon size={20} className="text-primary" />
              </motion.div>
              <h3 className="text-foreground mb-2">{item.title}</h3>
              <p className="text-muted-foreground text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </Section>

      {/* Upcoming Events */}
      <Section>
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-foreground">Upcoming Events</h2>
          <Link to="/events" className="font-display text-xs uppercase tracking-wider text-secondary hover:text-primary transition-colors">
            View All →
          </Link>
        </div>
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {[
            { title: "Spring Game Jam 2026", date: "Mar 28–30, 2026", desc: "48-hour game jam. Theme revealed at kickoff." },
            { title: "Unity Masterclass", date: "Apr 5, 2026", desc: "Deep dive into Unity's new rendering pipeline." },
            { title: "Game Dev Hackathon 2026", date: "Coming Soon", desc: "A hackathon focused on building innovative games." },
          ].map((event) => (
            <motion.div key={event.title} variants={fadeUp} whileHover={{ y: -4, scale: 1.02 }} className="card-surface overflow-hidden group cursor-pointer">
              <ImagePlaceholder aspect="16/9" label="EVENT IMAGE" />
              <div className="p-5">
                <p className="text-xs text-secondary font-display uppercase tracking-wider mb-2">{event.date}</p>
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

export default Home;
