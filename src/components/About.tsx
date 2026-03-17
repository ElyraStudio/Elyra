import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";

const reviews = [
  "/review/1.png",
  "/review/2.png",
  "/review/3.png",
  "/review/4.png",
  "/review/5.png",
];

const About = () => {
  const controls = useAnimation();
  const [isDragging, setIsDragging] = useState(false);

  useEffect(() => {
    if (!isDragging) {
      controls.start({
        x: ["0%", "-50%"],
        transition: {
          repeat: Infinity,
          duration: 40,
          ease: "linear",
        },
      });
    }
  }, [controls, isDragging]);

  return (
    <section className="section-spacing min-h-screen overflow-x-hidden">

      <div className="container-main md:max-w-3xl mx-auto flex flex-col gap-16">

        {/* TEXTO */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
            Sobre a Elyra
          </h2>

          <p className="text-muted-foreground text-base sm:text-lg leading-relaxed mb-4">
            A Elyra nasceu com um objetivo simples: ajudar pequenos negócios a
            terem presença profissional na internet sem precisar investir
            milhares de reais em um site.
          </p>

          <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
            Nossa missão é tornar a presença online acessível para qualquer
            empreendedor.
          </p>
        </motion.div>

        {/* REVIEWS */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-6">
            <h3 className="text-lg md:text-2xl font-semibold text-foreground">
              Pessoas que confiaram na Elyra
            </h3>
            <p className="text-sm text-muted-foreground">
              Avaliações reais no Google
            </p>
          </div>

          <div className="relative w-full overflow-hidden">

            {/* fades laterais */}
            <div className="pointer-events-none absolute left-0 top-0 h-full w-12 sm:w-24 bg-gradient-to-r from-background to-transparent z-10" />
            <div className="pointer-events-none absolute right-0 top-0 h-full w-12 sm:w-24 bg-gradient-to-l from-background to-transparent z-10" />

            <motion.div
              className="flex gap-3 sm:gap-6 cursor-grab active:cursor-grabbing"
              drag="x"
              dragConstraints={{ left: -1000, right: 0 }}
              onDragStart={() => {
                setIsDragging(true);
                controls.stop();
              }}
              onDragEnd={() => {
                setTimeout(() => setIsDragging(false), 800);
              }}
              animate={controls}
            >
              {[...reviews, ...reviews].map((src, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.05 }}
                  className="flex-shrink-0 w-[200px] sm:w-[240px] md:w-[300px]"
                >
                  <div className="bg-white/5 backdrop-blur-md p-2 rounded-xl shadow-lg">
                    <img
                      src={src}
                      alt={`Avaliação ${i + 1}`}
                      className="w-full h-auto rounded-lg"
                    />
                  </div>
                </motion.div>
              ))}
            </motion.div>

          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default About;