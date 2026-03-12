import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      <div className="container-main">
        <div className="mt-4 flex items-center justify-between rounded-2xl px-6 py-3 glass-card">

          {/* Logo */}
          <span className="text-xl font-bold tracking-tight text-foreground">
            Elyra
          </span>

          {/* Desktop menu */}
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

          {/* Mobile button */}
          <button
            className="md:hidden text-foreground text-2xl"
            onClick={() => setOpen(!open)}
          >
            ☰
          </button>
        </div>

        {/* Mobile menu animado */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="md:hidden mt-3 rounded-2xl glass-card px-6 py-6 flex flex-col gap-4"
            >
              <a href="#beneficios" onClick={() => setOpen(false)} className="text-muted-foreground hover:text-foreground">
                Benefícios
              </a>
              <a href="#como-funciona" onClick={() => setOpen(false)} className="text-muted-foreground hover:text-foreground">
                Como funciona
              </a>
              <a href="#planos" onClick={() => setOpen(false)} className="text-muted-foreground hover:text-foreground">
                Planos
              </a>
              <a href="#contato" onClick={() => setOpen(false)} className="text-primary font-medium">
                Contato
              </a>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </motion.nav>
  );
};

export default Navbar;