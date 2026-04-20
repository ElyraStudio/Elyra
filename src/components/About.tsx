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
          duration: 35, // Um pouco mais rápido para dar dinamismo
          ease: "linear",
        },
      });
    }
  }, [controls, isDragging]);

  return (
    <section id="sobre" className="py-24 md:py-32 bg-black overflow-x-hidden">
      <div className="container-main px-6 flex flex-col gap-24">

        {/* TEXTO ESTRATÉGICO */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-4xl md:text-6xl font-extrabold text-white tracking-tighter mb-8">
            Você pode estar perdendo clientes <br />
            <span className="text-white/40 italic font-light">neste exato momento.</span>
          </h2>

          <div className="space-y-6">
            <p className="text-zinc-400 text-lg md:text-xl font-light leading-relaxed">
              Hoje, a maioria dos negócios depende apenas de Instagram e indicação — enquanto seus clientes ideais estão no <span className="text-white font-medium italic">Google</span> prontos para comprar.
            </p>

            <p className="text-zinc-400 text-lg md:text-xl font-light leading-relaxed">
              Se sua empresa não possui uma presença profissional de elite, você está apenas facilitando a venda para o seu concorrente.
            </p>

            <p className="text-primary text-lg md:text-xl font-bold italic tracking-tight">
              A Elyra existe para mudar o jogo: estruturamos sua autoridade digital para que você seja a primeira escolha, não a última opção.
            </p>
          </div>
        </motion.div>

        {/* SEÇÃO DE REVIEWS (PROVA SOCIAL) */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="relative"
        >
          <div className="text-center mb-12">
            <h3 className="text-xs font-black uppercase tracking-[0.4em] text-zinc-600 mb-4">
              Social Proof & Trust
            </h3>
            <p className="text-2xl md:text-3xl font-bold text-white tracking-tight">
              Negócios que já mudaram de patamar
            </p>
          </div>

          <div className="relative w-full overflow-hidden group">
            {/* Fades laterais mais profundos para efeito de túnel */}
            <div className="pointer-events-none absolute left-0 top-0 h-full w-24 md:w-48 bg-gradient-to-r from-black to-transparent z-20" />
            <div className="pointer-events-none absolute right-0 top-0 h-full w-24 md:w-48 bg-gradient-to-l from-black to-transparent z-20" />

            <motion.div
              className="flex gap-4 md:gap-8 cursor-grab active:cursor-grabbing"
              drag="x"
              dragConstraints={{ left: -2000, right: 0 }}
              onDragStart={() => {
                setIsDragging(true);
                controls.stop();
              }}
              onDragEnd={() => {
                setTimeout(() => setIsDragging(false), 800);
              }}
              animate={controls}
            >
              {[...reviews, ...reviews, ...reviews].map((src, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -10, transition: { duration: 0.3 } }}
                  className="flex-shrink-0 w-[240px] md:w-[320px]"
                >
                  <div className="relative p-[1px] rounded-2xl bg-gradient-to-b from-white/10 to-transparent group-hover:from-primary/40 transition-colors duration-500">
                    <div className="bg-zinc-900/80 backdrop-blur-xl p-3 rounded-2xl">
                      <img
                        src={src}
                        alt={`Avaliação cliente ${i + 1}`}
                        className="w-full h-auto rounded-xl grayscale hover:grayscale-0 transition-all duration-700"
                      />
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
          
          <div className="mt-10 text-center">
             <div className="inline-flex items-center gap-2 text-zinc-500 text-xs tracking-widest uppercase font-bold">
               <span className="w-8 h-[1px] bg-zinc-800" />
               Arraste para explorar
               <span className="w-8 h-[1px] bg-zinc-800" />
             </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default About;