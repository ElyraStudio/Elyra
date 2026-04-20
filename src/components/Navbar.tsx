import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();

  // Detecta o scroll para mudar o estilo da navbar
  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  });

  const navLinks = [
    { name: "Sobre", href: "#sobre" },
    { name: "Portfólio", href: "#exemplos" }, 
    { name: "Planos", href: "#planos" },
  ];

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 pt-4 md:pt-6 transition-all duration-500"
    >
      <div className="container-main px-4">
        {/* A mágica acontece aqui: as classes mudam conforme o scroll */}
        <div className={`flex items-center justify-between rounded-full px-6 py-3 transition-all duration-500 ${
          isScrolled 
            ? "border border-white/10 bg-black/80 backdrop-blur-xl shadow-2xl" 
            : "border border-transparent bg-transparent"
        }`}>
          
          {/* Logo muda de cor: preto no topo branco, branco no scroll preto */}
          <span className={`text-xl md:text-2xl font-black tracking-tighter transition-colors duration-500 ${
            isScrolled ? "text-white" : "text-black"
          }`}>
            ELYRA<span className="text-primary">.</span>
          </span>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-[11px] font-black uppercase tracking-[0.2em] transition-colors duration-500 ${
                  isScrolled ? "text-zinc-400 hover:text-white" : "text-zinc-600 hover:text-black"
                }`}
              >
                {link.name}
              </a>
            ))}
            
            <a
              href="#contato"
              className={`px-5 py-2 rounded-full text-[11px] font-black uppercase tracking-widest transition-all duration-500 ${
                isScrolled 
                  ? "bg-primary text-black" 
                  : "bg-black text-white"
              }`}
            >
              Consultoria
            </a>
          </div>

          {/* Mobile button */}
          <button
            className={`md:hidden p-1 transition-colors duration-500 ${isScrolled ? "text-white" : "text-black"}`}
            onClick={() => setOpen(!open)}
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile menu - Mantemos escuro por padrão */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="md:hidden mt-3 rounded-3xl border border-white/10 bg-zinc-950 p-8 flex flex-col gap-6 shadow-2xl"
            >
              {navLinks.map((link) => (
                <a key={link.name} href={link.href} onClick={() => setOpen(false)} className="text-lg font-bold text-zinc-400 hover:text-primary">
                  {link.name}
                </a>
              ))}
              <a href="#contato" onClick={() => setOpen(false)} className="text-primary text-lg font-black uppercase tracking-widest">
                Falar com consultor
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;