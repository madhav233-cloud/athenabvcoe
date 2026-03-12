import { Github, Twitter, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border py-12 mt-24">
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-primary neon-text-purple mb-3">Athena</h3>
            <p className="text-muted-foreground text-sm">
              Athena — "We don't die, we respawn." Building games, learning technology, creating experiences.
            </p>
          </div>
          <div>
            <h4 className="font-display text-sm uppercase tracking-wider text-foreground mb-3">Quick Links</h4>
            <div className="flex flex-col gap-2 text-sm text-muted-foreground">
              <a href="/about" className="hover:text-primary transition-colors">About</a>
              <a href="/events" className="hover:text-primary transition-colors">Events</a>
              <a href="/join" className="hover:text-primary transition-colors">Join Us</a>
              <a href="/blog" className="hover:text-primary transition-colors">Blog</a>
            </div>
          </div>
        </div>
        <div className="border-t border-border mt-8 pt-8 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} Game Development Society. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
