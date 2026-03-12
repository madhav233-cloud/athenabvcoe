import { Github, Twitter, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border py-12 mt-24">
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-primary neon-text-purple mb-3">GDS</h3>
            <p className="text-muted-foreground text-sm">
              Game Development Society — Building games, learning technology, creating experiences.
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
          <div>
            <h4 className="font-display text-sm uppercase tracking-wider text-foreground mb-3">Connect</h4>
            <div className="flex gap-4">
              <a href="#" className="text-muted-foreground hover:text-secondary transition-colors" aria-label="GitHub">
                <Github size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-secondary transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="mailto:gds@university.edu" className="text-muted-foreground hover:text-secondary transition-colors" aria-label="Email">
                <Mail size={20} />
              </a>
            </div>
            <p className="text-muted-foreground text-xs mt-4">gds@university.edu</p>
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
