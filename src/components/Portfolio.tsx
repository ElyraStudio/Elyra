import { motion } from "framer-motion";
import portfolioGrid from "@/assets/portfolio-grid.png";

const categories = ["Barbearia", "Restaurante", "Clínica", "Salão de beleza"];

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
          Exemplos de sites
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.05, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-muted-foreground text-center mb-12 text-lg"
        >
          Veja como ficam os sites criados pela Elyra.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
          className="glass-card p-4 sm:p-6"
        >
          <img
            src={portfolioGrid}
            alt="Exemplos de sites: Barbearia, Restaurante, Clínica e Salão de beleza"
            className="w-full rounded-xl"
            loading="lazy"
          />
          <div className="flex flex-wrap justify-center gap-3 mt-6">
            {categories.map((cat) => (
              <span
                key={cat}
                className="px-4 py-2 rounded-full bg-secondary text-secondary-foreground text-sm font-medium"
              >
                {cat}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;
