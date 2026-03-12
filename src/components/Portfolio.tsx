import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import previewSalao from "@/assets/preview-salao.png";
import previewRestaurante from "@/assets/preview-restaurante.png";
import previewRecarga from "@/assets/preview-recarga.png";

const sites = [
  {
    name: "Salão de Beleza",
    image: previewSalao,
    url: "https://salao-de-beleza-exemplo.vercel.app/",
  },
  {
    name: "Restaurante",
    image: previewRestaurante,
    url: "https://restauranteexe.vercel.app/",
  },
  {
    name: "Recarga de Celular",
    image: previewRecarga,
    url: "https://r-recarga.vercel.app/",
  },
];

const container = { hidden: {}, show: { transition: { staggerChildren: 0.1 } } };
const item = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as const } },
};

const Portfolio = () => {
  return (
    <section className="section-spacing">
      <div className="container-main">
        <motion.h2
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-3xl sm:text-4xl font-bold text-foreground text-center mb-4"
        >
          Exemplos de sites criados pela Elyra
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.05, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-muted-foreground text-center mb-12 text-lg"
        >
          Veja sites reais que criamos para nossos clientes.
        </motion.p>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-3 gap-6"
        >
          {sites.map((site) => (
            <motion.div
              key={site.name}
              variants={item}
              className="glass-card p-3 group"
            >
              <div className="overflow-hidden rounded-xl mb-4">
                <img
                  src={site.image}
                  alt={`Preview do site: ${site.name}`}
                  className="w-full aspect-video object-cover object-top rounded-xl transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="px-2 pb-2">
                <h3 className="text-lg font-bold text-foreground mb-3">{site.name}</h3>
                <Button
                  variant="hero-secondary"
                  size="sm"
                  className="w-full"
                  asChild
                >
                  <a href={site.url} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-4 w-4" />
                    Ver site
                  </a>
                </Button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;
