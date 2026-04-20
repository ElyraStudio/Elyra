import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import previewSalao from "@/assets/preview-salao.png";
import previewRestaurante from "@/assets/preview-restaurante.png";
import previewRecarga from "@/assets/preview-recarga.png";

const sites = [
  {
    name: "Aura Beauty",
    category: "Estética & Bem-estar",
    image: previewSalao,
    url: "https://salao-de-beleza-exemplo.vercel.app/",
  },
  {
    name: "Gusto Gourmet",
    category: "Gastronomia",
    image: previewRestaurante,
    url: "https://restauranteexe.vercel.app/",
  },
  {
    name: "Speed Recarga",
    category: "Serviços Digitais",
    image: previewRecarga,
    url: "https://r-recarga.vercel.app/",
  },
];

const container = { 
  hidden: {}, 
  show: { transition: { staggerChildren: 0.15 } } 
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const },
  },
};

const Portfolio = () => {
  return (
    <section id="exemplos" className="py-24 md:py-32 bg-black relative">
      {/* Luz de fundo sutil para não deixar o preto "morto" */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-primary/10 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="container-main px-6 relative">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <h2 className="text-sm font-black uppercase tracking-[0.3em] text-primary mb-4">
              Showcase
            </h2>
            <h3 className="text-4xl md:text-5xl font-extrabold text-white tracking-tighter leading-none">
              Projetos que definem <br />
              <span className="text-white/40 font-light italic">novos padrões.</span>
            </h3>
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-zinc-400 text-lg max-w-sm font-light leading-relaxed"
          >
            Cada estrutura é projetada para converter visitantes em clientes reais através de design estratégico.
          </motion.p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {sites.map((site) => (
            <motion.div
              key={site.name}
              variants={item}
              className="group relative"
            >
              <div className="relative overflow-hidden rounded-[24px] border border-white/5 bg-zinc-900/40 backdrop-blur-sm transition-all duration-500 hover:border-primary/30 hover:shadow-[0_20px_50px_rgba(0,0,0,0.7)]">
                
                {/* Mockup de Navegador Premium */}
                <div className="bg-white/5 border-b border-white/5 px-4 py-3 flex items-center gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-white/20" />
                  <div className="w-2 h-2 rounded-full bg-white/20" />
                  <div className="w-2 h-2 rounded-full bg-white/20" />
                </div>

                {/* Imagem do Projeto */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={site.image}
                    alt={site.name}
                    className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-110"
                  />
                  
                  {/* Overlay interativo */}
                  <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center backdrop-blur-[3px]">
                    <Button
                      variant="outline"
                      className="rounded-full border-primary text-primary hover:bg-primary hover:text-black font-bold"
                      asChild
                    >
                      <a href={site.url} target="_blank" rel="noopener noreferrer">
                        Acessar Site
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </div>

                {/* Info do Projeto */}
                <div className="p-6">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-primary/80 mb-2 inline-block">
                    {site.category}
                  </span>
                  <h4 className="text-xl font-bold text-white mb-1">
                    {site.name}
                  </h4>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;