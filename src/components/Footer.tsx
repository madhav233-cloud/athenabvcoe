import { Instagram, MessageCircle, Discord } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border py-12 mt-24">
      <div className="section-container">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* About */}
          <div>
            <h3 className="text-primary neon-text-purple mb-3">Athena</h3>
            <p className="text-muted-foreground text-sm">
              Athena — "We don't die, we respawn." Building games, learning technology, creating experiences.
            </p>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-display text-sm uppercase tracking-wider text-foreground mb-3">
              Connect With Us
            </h4>

            <div className="flex flex-col gap-3 text-sm text-muted-foreground">

              <a
                href="
https://www.instagram.com/athena_bvcoe?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-primary transition-colors"
              >
                <Instagram size={18} />
                Instagram
              </a>

              <a
                href="https://chat.whatsapp.com/EenPOY646sGEZSuFUpg8Aq?mode=gi_t "
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-primary transition-colors"
              >
                <MessageCircle size={18} />
                WhatsApp
              </a>

              <a
                href="https://discord.gg/NfZ5WD29m"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-primary transition-colors"
              >
                <Discord size={18} />
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
