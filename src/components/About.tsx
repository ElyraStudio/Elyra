import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="section-spacing min-h-screen flex items-center md:block">

      <div className="container-main md:max-w-3xl">

        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-center"
        >

          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
            Sobre a Elyra
          </h2>

          <p className="text-muted-foreground text-lg leading-relaxed mb-4">
            A Elyra nasceu com um objetivo simples: ajudar pequenos negócios a
            terem presença profissional na internet sem precisar investir
            milhares de reais em um site.
          </p>

          <p className="text-muted-foreground text-lg leading-relaxed">
            Nossa missão é tornar a presença online acessível para qualquer
            empreendedor.
          </p>

        </motion.div>

      </div>

    </section>
  );
};

export default About;
