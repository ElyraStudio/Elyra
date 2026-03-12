import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      <div className="container-main">
        <div className="mt-4 flex items-center justify-between rounded-2xl px-6 py-3 glass-card">
          <span className="text-xl font-bold tracking-tight text-foreground">
            Elyra
          </span>
          <div className="hidden md:flex items-center gap-8">
            <a href="#beneficios" className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-150">
              Benefícios
            </a>
            <a href="#como-funciona" className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-150">
              Como funciona
            </a>
            <a href="#planos" className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-150">
              Planos
            </a>
            <a href="#contato" className="text-sm font-medium text-primary hover:text-primary/80 transition-colors duration-150">
              Contato
            </a>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
