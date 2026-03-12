import { motion } from "framer-motion";

interface NeonButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  onClick?: () => void;
  type?: "button" | "submit";
  className?: string;
}

const NeonButton = ({ children, variant = "primary", onClick, type = "button", className = "" }: NeonButtonProps) => {
  const base = "inline-flex items-center justify-center px-6 py-3 font-display font-semibold text-sm uppercase tracking-widest rounded transition-all";

  const variants = {
    primary: `${base} bg-primary text-primary-foreground neon-glow-purple`,
    secondary: `${base} bg-transparent border border-border text-foreground hover:border-secondary hover:text-secondary`,
  };

  return (
    <motion.button
      type={type}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`${variants[variant]} ${className}`}
      onClick={onClick}
    >
      {children}
    </motion.button>
  );
};

export default NeonButton;
