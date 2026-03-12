const Footer = () => {
  return (
    <footer className="border-t border-border py-12 mt-24">
      <div className="section-container">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          <div>
            <h3 className="text-primary neon-text-purple mb-3">Athena</h3>
            <p className="text-muted-foreground text-sm">
              Athena — "We don't die, we respawn." Building games, learning technology, creating experiences.
            </p>
          </div>

          <div>
            <h4 className="font-display text-sm uppercase tracking-wider text-foreground mb-3">
              Connect With Us
            </h4>

            <div className="flex flex-col gap-2 text-sm text-muted-foreground">
              <a
                href="https://instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
              >
                Instagram
              </a>

              <a
                href="https://wa.me/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
              >
                WhatsApp
              </a>

              <a
                href="https://discord.gg/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
              >
                Discord
              </a>
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
