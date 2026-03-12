import { motion } from "framer-motion";
import Section from "@/components/Section";

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const sessions = [
  {
    year: "Session 2025–26",
    events: [
      {
        title: "Game Development Bootcamp",
        date: "March 2026",
        desc: "Students explored the fundamentals of game development including game mechanics, design principles, and teamwork. The event focused on building practical skills while encouraging creativity and experimentation.",
        images: ["/images/2025/event1.jpg", "/images/2025/event2.jpg"]
      },
      {
        title: "Game Jam 2026",
        date: "April 2026",
        desc: "Participants worked in teams to build complete playable games within a limited time. The challenge promoted rapid prototyping, innovative thinking, and collaborative development.",
        images: ["/images/2025/event3.jpg", "/images/2025/event4.jpg"]
      }
    ]
  },

  {
    year: "Session 2024–25",
    events: [
      {
        title: "Unity Workshop",
        date: "October 2024",
        desc: "A hands-on workshop introducing students to Unity game development. Participants learned scripting basics, scene building, and interactive gameplay design.",
        images: ["/images/2024/event1.jpg", "/images/2024/event2.jpg"]
      },
      {
        title: "Game Art Session",
        date: "January 2025",
        desc: "Students explored digital art creation for games, including asset design, texturing, and animation workflows using Blender and other creative tools.",
        images: ["/images/2024/event3.jpg", "/images/2024/event4.jpg"]
      },
      {
        title: "Mini Game Jam",
        date: "February 2025",
        desc: "A fast-paced mini game jam where teams built small games based on a surprise theme. It encouraged quick thinking and teamwork.",
        images: ["/images/2024/event5.jpg", "/images/2024/event6.jpg"]
      }
    ]
  },

  {
    year: "Session 2023–24",
    events: [
      {
        title: "Introduction to Game Development",
        date: "September 2023",
        desc: "An introductory event designed to familiarize students with the basics of game development, tools, and the workflow of creating interactive experiences.",
        images: ["/images/2023/event1.jpg", "/images/2023/event2.jpg"]
      },
      {
        title: "Level Design Workshop",
        date: "November 2023",
        desc: "Students learned how to design engaging game environments, focusing on layout planning, player experience, and visual storytelling.",
        images: ["/images/2023/event3.jpg", "/images/2023/event4.jpg"]
      },
      {
        title: "Blender Training",
        date: "January 2024",
        desc: "A session focused on 3D modeling and asset creation using Blender. Participants practiced creating models suitable for game environments.",
        images: ["/images/2023/event5.jpg", "/images/2023/event6.jpg"]
      },
      {
        title: "Annual Game Showcase",
        date: "March 2024",
        desc: "Students presented the games they developed throughout the semester. The showcase highlighted creativity, technical growth, and teamwork.",
        images: ["/images/2023/event7.jpg", "/images/2023/event8.jpg"]
      }
    ]
  }
];

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
          Explore the events organized by Athena across different academic sessions.
        </motion.p>
      </Section>

      {sessions.map((session) => (
        <Section key={session.year}>

          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-foreground text-3xl mb-10"
          >
            {session.year}
          </motion.h2>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-12"
          >

            {session.events.map((event) => (
              <motion.div
                key={event.title}
                variants={fadeUp}
                className="card-surface p-6"
              >

                <h3 className="text-xl text-foreground mb-1">
                  {event.title}
                </h3>

                <p className="text-secondary text-sm mb-4">
                  {event.date}
                </p>

                {/* Images */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  {event.images.map((img, i) => (
                    <img
                      key={i}
                      src={img}
                      alt={event.title}
                      className="w-full aspect-video object-cover rounded-lg"
                    />
                  ))}
                </div>

                <p className="text-muted-foreground text-sm leading-relaxed max-w-3xl">
                  {event.desc}
                </p>

              </motion.div>
            ))}

          </motion.div>

        </Section>
      ))}

    </div>
  );
};

export default Events;
