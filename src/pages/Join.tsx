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

      {/* Stay Updated Section */}
      <Section>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-foreground text-3xl mb-10 text-center neon-text-purple"
        >
          Stay Updated
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-3xl mx-auto">

          {/* Instagram QR */}
          <div className="card-surface p-6 text-center">
            <h3 className="text-foreground mb-4">Instagram</h3>
            <img
              src="/qr/instagram.png"
              alt="Instagram QR"
              className="mx-auto w-40 h-40 object-contain"
            />
            <p className="text-muted-foreground text-sm mt-3">
              Scan to follow us on Instagram.
            </p>
          </div>

          {/* Discord QR */}
          <div className="card-surface p-6 text-center">
            <h3 className="text-foreground mb-4">Discord</h3>
            <img
              src="/qr/wtp.png"
              alt="Discord QR"
              className="mx-auto w-40 h-40 object-contain"
            />
            <p className="text-muted-foreground text-sm mt-3">
              Scan to join our Whatsapp community.
            </p>
          </div>

        </div>

        {/* Discord Link */}
        <div className="text-center mt-10">
          <a
            href="https://discord.gg/NfZ5WD29m"
            target="_blank"
            rel="noopener noreferrer"
            className="card-surface px-6 py-3 inline-block text-sm text-secondary hover:text-primary transition-colors"
          >
            Join our Discord server
          </a>
        </div>

      </Section>

    </div>
  );
};

export default Join;
