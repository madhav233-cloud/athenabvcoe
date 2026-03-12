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
        title: "Game Development Session",
        date: "13 October 2025",
        desc: "The session provided students with valuable exposure to the game development ecosystem. Participants gained foundational knowledge of game engines such as Unity and Unreal Engine, along with insights into level design, storytelling, character creation, and basic coding concepts. The live demonstrations helped students understand how logic and creativity merge to create interactive virtual environments. The interactive discussion and idea-sharing segment enhanced critical thinking, creativity, and confidence, motivating many students to explore game design and development further as a technical skill and potential career option.",
        images: [
          "/New folder/2025-26/game dev/1.png",
          "/New folder/2025-26/game dev/2.png"
        ]
      },
      {
        title: "HackNFrag : BGMI",
        date: "7th & 8th October 2025",
        desc: "Participants worked in teams to build complete playable games within a limited time. The challenge promoted rapid prototyping, innovative thinking, and collaborative development.",
        images: [
          "/New folder/2025-26/hacknfrag/1.png",
          "/New folder/2025-26/hacknfrag/2.png"
        ]
      }
    ]
  },

  {
    year: "Session 2024–25",
    events: [
      {
        title: "Game Development Webinar",
        date: "3rd & 4th May 2025",
        desc: "To foster a spirit of teamwork, strategic thinking, and healthy competition among students while promoting gaming as a legitimate form of skill-based engagement and building a sense of community through an enjoyable and inclusive esports experience.",
        images: [
          "/New folder/2024-25/game dev webinar/1.jpg",
          "/New folder/2024-25/game dev webinar/2.jpg"
        ]
      },
      {
        title: "Valorant Tournament",
        date: "16th & 17th October 2024",
        desc: "On Day 1, 16 teams competed in 8 brackets, with each match determining a winner to progress to the next round. By the end of the day, 8 teams qualified for Day 2. On Day 2, the 8 qualified teams faced off in intense matches, culminating in the finals, where the top two teams battled for the championship title. The entire tournament was broadcast live on the Athena YouTube channel, allowing a wider audience to enjoy the action-packed matches and cheer for their favorite teams.",
        images: [
          "/New folder/2024-25/valo/1.jpg",
          "/New folder/2024-25/valo/2.jpg"
        ]
      },
      {
        title: "BGMI Tournament",
        date: "20th September 2024",
        desc: "On 20th September 2024, we hosted an exciting BGMI (Battlegrounds Mobile India) tournament where students showcased their skills in a day of intense and thrilling competition. The top teams battled fiercely, with the best taking home a well-deserved prize pool.",
        images: [
          "/New folder/2024-25/bgmi/1.jpg",
          "/New folder/2024-25/bgmi/2.jpg"
        ]
      }
    ]
  },

  {
    year: "Session 2023–24",
    events: [
      {
        title: "WebWeave",
        date: "5th March 2024",
        desc: "The goal of the UI/UX competition, held with Campus Blocks and Nidus, was to give students a chance to flex their creativity and design skills while tackling real-world challenges in user experience.",
        images: [
          "/New folder/2023-24/webwieve/1.png",
          "/New folder/2023-24/webwieve/2.png"
        ]
      },
      {
        title: "Zenith",
        date: "6th March 2024",
        desc: "Athena organized a gaming tournament 'Zenith' featuring Tekken, FIFA, and BGMI. Students showcased their skills in a thrilling competition filled with excitement and camaraderie.",
        images: [
          "/New folder/2023-24/zenith/1.png",
          "/New folder/2023-24/zenith/2.png"
        ]
      },
      {
        title: "Game Development and WEB3 Seminar",
        date: "14 February 2024",
        desc: "The seminar introduced attendees to game development basics, covering design principles and programming, with practical exercises to inspire creativity and explore career opportunities in the gaming industry.",
        images: [
          "/New folder/2023-24/seminar/1.png",
          "/New folder/2023-24/seminar/2.png"
        ]
      },
      {
        title: "BGMI Tournament",
        date: "11 October 2023",
        desc: "The BGMI tournament in our college brought students together for a competitive and engaging gaming experience. Teams showcased their strategic skills, fostering teamwork and community spirit.",
        images: [
          "/New folder/2023-24/bgmi/1.png",
          "/New folder/2023-24/bgmi/2.png"
        ]
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

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  {event.images.map((img, i) => (
                    <img
                      key={i}
                      src={img}
                      alt={event.title}
                      loading="lazy"
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
