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

const posts = [
  { title: "Getting Started with Unity in 2026", author: "Sarah Kim", date: "Mar 10, 2026", category: "Tutorial" },
  { title: "The State of Indie Game Dev", author: "Alex Chen", date: "Mar 5, 2026", category: "Industry" },
  { title: "Spring Game Jam Recap", author: "Jake Williams", date: "Feb 28, 2026", category: "Recap" },
  { title: "Shader Programming for Beginners", author: "Marcus Johnson", date: "Feb 20, 2026", category: "Tutorial" },
  { title: "How We Built 'Neon Runner'", author: "Priya Patel", date: "Feb 15, 2026", category: "Project" },
  { title: "AI Tools Every Game Dev Should Know", author: "Mia Rodriguez", date: "Feb 10, 2026", category: "Industry" },
];

const catColor: Record<string, string> = {
  Tutorial: "text-secondary",
  Industry: "text-primary",
  Recap: "text-accent",
  Project: "text-primary",
};

const Blog = () => {
  return (
    <div className="pt-16">
      <Section>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-foreground neon-text-purple mb-6"
        >
          Blog
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-muted-foreground max-w-2xl text-lg"
        >
          Tutorials, recaps, and insights from our community.
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
          {posts.map((post) => (
            <motion.div
              key={post.title}
              variants={fadeUp}
              whileHover={{ y: -4, scale: 1.02 }}
              className="card-surface overflow-hidden cursor-pointer"
            >
              <ImagePlaceholder aspect="16/9" label="THUMBNAIL" />
              <div className="p-5">
                <div className="flex items-center gap-2 mb-2">
                  <span className={`font-display text-xs uppercase tracking-wider ${catColor[post.category] || "text-muted-foreground"}`}>
                    {post.category}
                  </span>
                  <span className="text-muted-foreground text-xs">•</span>
                  <span className="text-muted-foreground text-xs">{post.date}</span>
                </div>
                <h3 className="text-foreground mb-2">{post.title}</h3>
                <p className="text-muted-foreground text-sm">By {post.author}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Section>
    </div>
  );
};

export default Blog;
