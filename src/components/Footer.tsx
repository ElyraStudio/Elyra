import { motion } from "framer-motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-black pt-24 pb-12 overflow-hidden">
      {/* Linha de separação com brilho dourado sutil */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      
      <div className="container-main px-6">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          
          {/* Brand & Tagline */}
          <div className="flex flex-col gap-6">
            <span className="text-3xl font-black text-white tracking-tighter">
              ELYRA<span className="text-primary">.</span>
            </span>
            <p className="text-zinc-500 text-sm leading-relaxed max-w-[240px]">
              Elevando o padrão digital de negócios locais através de design de elite e estratégia de conversão.
            </p>
          </div>

          {/* Navegação */}
          <div>
            <h4 className="text-white text-xs font-black uppercase tracking-[0.3em] mb-6">Empresa</h4>
            <ul className="space-y-4">
              <li><a href="#sobre" className="text-zinc-500 text-sm hover:text-primary transition-colors duration-300">Sobre nós</a></li>
              <li><a href="#planos" className="text-zinc-500 text-sm hover:text-primary transition-colors duration-300">Planos</a></li>
              <li><a href="#contato" className="text-zinc-500 text-sm hover:text-primary transition-colors duration-300">Contato</a></li>
            </ul>
          </div>

          {/* Soluções */}
          <div>
            <h4 className="text-white text-xs font-black uppercase tracking-[0.3em] mb-6">Soluções</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-zinc-500 text-sm hover:text-primary transition-colors duration-300">Sites por Assinatura</a></li>
              <li><a href="#" className="text-zinc-500 text-sm hover:text-primary transition-colors duration-300">SEO Local & Google</a></li>
              <li><a href="#" className="text-zinc-500 text-sm hover:text-primary transition-colors duration-300">Landing Pages High-End</a></li>
            </ul>
          </div>

          {/* Legal & Compliance */}
          <div>
            <h4 className="text-white text-xs font-black uppercase tracking-[0.3em] mb-6">Legal</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-zinc-500 text-sm hover:text-primary transition-colors duration-300">Termos de Uso</a></li>
              <li><a href="#" className="text-zinc-500 text-sm hover:text-primary transition-colors duration-300">Privacidade</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col items-center md:items-start gap-1">
            <p className="text-[10px] text-zinc-600 uppercase tracking-widest font-medium">
              © {currentYear} Elyra Digital. Todos os direitos reservados.
            </p>
            <p className="text-[9px] text-zinc-800 font-bold uppercase tracking-[0.2em]">
              CNPJ: 65.308.302/0001-77
            </p>
          </div>

          {/* Assinatura Visual */}
          <div className="flex items-center gap-3">
            <div className="h-[1px] w-8 bg-zinc-900" />
            <span className="text-[10px] text-zinc-700 font-black uppercase tracking-[0.4em]">
              Crafted for Excellence
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;