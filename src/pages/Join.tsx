import { motion } from "framer-motion";
import { useState } from "react";
import Section from "@/components/Section";
import NeonButton from "@/components/NeonButton";
import { toast } from "sonner";

const Join = () => {
  const [form, setForm] = useState({ name: "", email: "", year: "", reason: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim()) {
      toast.error("Please fill in all required fields.");
      return;
    }
    toast.success("Application submitted! We'll be in touch.");
    setForm({ name: "", email: "", year: "", reason: "" });
  };

  const inputClass =
    "w-full bg-background border border-border rounded px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-secondary focus:ring-2 focus:ring-secondary/30 transition-all";

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

      <Section>
        <div className="max-w-xl mx-auto">
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="card-surface p-8 space-y-6"
          >
            <div>
              <label className="block font-display text-xs uppercase tracking-wider text-foreground mb-2">Name *</label>
              <input
                type="text"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="Your full name"
                className={inputClass}
                maxLength={100}
                required
              />
            </div>
            <div>
              <label className="block font-display text-xs uppercase tracking-wider text-foreground mb-2">Email *</label>
              <input
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder="you@university.edu"
                className={inputClass}
                maxLength={255}
                required
              />
            </div>
            <div>
              <label className="block font-display text-xs uppercase tracking-wider text-foreground mb-2">Year / Department</label>
              <input
                type="text"
                value={form.year}
                onChange={(e) => setForm({ ...form, year: e.target.value })}
                placeholder="e.g. 2nd Year, Computer Science"
                className={inputClass}
                maxLength={100}
              />
            </div>
            <div>
              <label className="block font-display text-xs uppercase tracking-wider text-foreground mb-2">Why do you want to join?</label>
              <textarea
                value={form.reason}
                onChange={(e) => setForm({ ...form, reason: e.target.value })}
                placeholder="Tell us about your interest in game development..."
                rows={4}
                className={inputClass}
                maxLength={1000}
              />
            </div>
            <NeonButton type="submit" className="w-full">
              Join the Society
            </NeonButton>
          </motion.form>
        </div>
      </Section>
    </div>
  );
};

export default Join;
