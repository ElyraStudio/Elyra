"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MessageCircle, ArrowRight, Sparkles } from "lucide-react";

interface Snowflake {
  id: number;
  left: number; // Porcentagem
  size: number;
  duration: number;
  delay: number;
  drift: number;
  opacity: number;
}

const FinalCTA = () => {
  const [snowflakes, setSnowflakes] = useState<Snowflake[]>([]);

  // Gerar os flocos apenas no cliente para evitar erros de Hydration (SSR)
  useEffect(() => {
    const flakes = Array.from({ length: 40 }, (_, i) => ({
      id: i,
      left: (i * 37.7) % 100,
      size: 2 + (i % 4),
      duration: 6 + (i % 8),
      delay: (i % 5) * 0.8,
      drift: -40 + ((i * 29) % 80),
      opacity: 0.3 + ((i * 17) % 60) / 100,
    }));
    setSnowflakes(flakes);
  }, []);

  const handlePlanos = () => {
    document.getElementById("planos")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section
      id="contato"
      className="relative overflow-hidden bg-black text-white py-28 md:py-40 min-h-screen"
    >
      {/* =====================================================
          FLOCOS DE NEVE (ANIMADOS VIA FRAMER MOTION)
      ====================================================== */}
      <div className="absolute inset-0 pointer-events-none z-20 overflow-hidden">
        {snowflakes.map((snow) => (
          <motion.span
            key={snow.id}
            initial={{
              y: -20,
              x: 0,
              opacity: 0,
              rotate: 0,
            }}
            animate={{
              y: ["0vh", "100vh"],
              x: [0, snow.drift * 0.5, -snow.drift * 0.3, snow.drift],
              opacity: [0, snow.opacity, snow.opacity, 0],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: snow.duration,
              repeat: Infinity,
              ease: "linear",
              delay: snow.delay,
            }}
            style={{
              position: "absolute",
              left: `${snow.left}%`,
              top: 0,
              width: `${snow.size}px`,
              height: `${snow.size}px`,
              borderRadius: "50%",
              backgroundColor: "#ffffff",
              boxShadow: "0 0 6px rgba(255, 255, 255, 0.8)",
            }}
          />
        ))}
      </div>

      {/* =====================================================
          ATMOSFERA / GLOWS
      ====================================================== */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none overflow-hidden z-0"
      >
        {/* Glow principal */}
        <div className="absolute left-1/2 top-[20%] -translate-x-1/2 w-[700px] h-[500px] rounded-full bg-primary/[0.07] blur-[120px]" />

        {/* Glow inferior */}
        <div className="absolute left-1/2 bottom-[-10%] -translate-x-1/2 w-[800px] h-[350px] rounded-full bg-primary/[0.045] blur-[100px]" />

        {/* Névoa sobre a água */}
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-primary/[0.035] via-black/20 to-transparent" />
      </div>

      {/* =====================================================
          CONTEÚDO
      ====================================================== */}
      <div className="container-main relative z-30 px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{
            duration: 0.7,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="max-w-4xl mx-auto text-center"
        >
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 mb-7">
            <div className="h-px w-8 bg-primary/50" />

            <span className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.35em] text-primary">
              Próximo passo
            </span>

            <div className="h-px w-8 bg-primary/50" />
          </div>

          {/* Headline */}
          <h2 className="text-4xl sm:text-5xl md:text-7xl lg:text-[80px] leading-[0.95] font-black tracking-[-0.045em]">
            Seu próximo cliente
            <br />
            <span className="text-white/40 font-light italic">
              já está procurando.
            </span>
          </h2>

          <p className="mt-8 md:mt-10 max-w-2xl mx-auto text-base md:text-lg text-zinc-400 font-light leading-relaxed">
            Não deixe sua empresa desaparecer entre os concorrentes.
            <span className="text-white font-medium">
              {" "}
              Construa uma presença digital que transmite autoridade,
              aparece para as pessoas certas e transforma atenção em
              oportunidades.
            </span>
          </p>

          {/* AÇÕES */}
          <div className="mt-10 md:mt-12 flex flex-col sm:flex-row justify-center gap-3">
            <Button
              onClick={handlePlanos}
              className="
                group
                h-14 md:h-16
                px-8 md:px-10
                rounded-2xl
                bg-primary
                text-black
                hover:bg-primary/90
                font-black
                uppercase
                tracking-[0.14em]
                text-[10px] md:text-xs
                shadow-[0_0_40px_rgba(234,179,8,0.12)]
                hover:shadow-[0_0_50px_rgba(234,179,8,0.22)]
                hover:-translate-y-0.5
                transition-all duration-300
              "
            >
              Ver planos e preços
              <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>

            <a
              href="https://wa.me/5551998202893?text=Olá,%20vim%20pelo%20site%20da%20Elyra%20e%20quero%20atrair%20mais%20clientes"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="outline"
                className="
                  group
                  h-14 md:h-16
                  px-8 md:px-10
                  w-full
                  rounded-2xl
                  border-white/10
                  bg-white/[0.03]
                  text-white
                  hover:bg-white/[0.07]
                  hover:border-white/20
                  font-black
                  uppercase
                  tracking-[0.14em]
                  text-[10px] md:text-xs
                  transition-all duration-300
                "
              >
                <MessageCircle className="mr-2 h-4 w-4 text-primary" />
                Falar com a Elyra
              </Button>
            </a>
          </div>
        </motion.div>

        {/* =====================================================
            ICEBERG
        ====================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{
            duration: 1,
            delay: 0.15,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="relative mt-24 md:mt-32 h-[300px] md:h-[400px] max-w-5xl mx-auto"
        >
          {/* Glow submerso */}
          <div
            aria-hidden="true"
            className="
              absolute
              left-1/2
              bottom-[-5%]
              -translate-x-1/2
              w-[70%]
              h-[55%]
              rounded-full
              bg-primary/[0.055]
              blur-[90px]
            "
          />

          {/* ÁGUA / HORIZONTE */}
          <div
            aria-hidden="true"
            className="
              absolute
              left-1/2
              top-[48%]
              -translate-x-1/2
              w-[90%]
              h-px
              bg-gradient-to-r
              from-transparent
              via-white/[0.16]
              to-transparent
            "
          />

          {/* Pequena ondulação */}
          <div
            aria-hidden="true"
            className="
              absolute
              left-1/2
              top-[48%]
              -translate-x-1/2
              w-[75%]
              h-8
              rounded-[50%]
              border-t
              border-white/[0.035]
            "
          />

          {/* PARTE SUBMERSA */}
          <div
            aria-hidden="true"
            className="
              absolute
              left-1/2
              top-[47%]
              -translate-x-1/2
              w-[340px]
              md:w-[580px]
              h-[220px]
              md:h-[300px]
              opacity-60
            "
          >
            <div
              className="
                absolute
                inset-0
                bg-gradient-to-b
                from-white/[0.055]
                via-primary/[0.018]
                to-transparent
                [clip-path:polygon(28%_0%,68%_0%,90%_22%,100%_52%,82%_72%,74%_100%,18%_100%,8%_72%,0%_48%,12%_22%)]
              "
            />
            <div
              className="
                absolute
                left-1/2
                top-0
                -translate-x-1/2
                w-[45%]
                h-[55%]
                bg-white/[0.035]
                blur-[35px]
              "
            />
          </div>

          {/* PARTE ACIMA DA ÁGUA */}
          <div
            aria-hidden="true"
            className="
              absolute
              left-1/2
              top-[18%]
              -translate-x-1/2
              w-[230px]
              md:w-[360px]
              h-[150px]
              md:h-[210px]
            "
          >
            <div
              className="
                absolute
                inset-0
                bg-gradient-to-br
                from-white/[0.16]
                via-white/[0.07]
                to-primary/[0.025]
                [clip-path:polygon(50%_0%,63%_15%,71%_38%,86%_49%,77%_65%,64%_61%,55%_81%,43%_64%,30%_72%,17%_51%,31%_37%,38%_14%)]
              "
            />
            <div
              className="
                absolute
                inset-0
                bg-gradient-to-br
                from-white/[0.13]
                via-transparent
                to-transparent
                [clip-path:polygon(50%_0%,38%_14%,31%_37%,43%_64%,55%_81%,58%_57%,57%_29%)]
              "
            />
            <div
              className="
                absolute
                inset-0
                bg-primary/[0.035]
                [clip-path:polygon(50%_0%,63%_15%,71%_38%,86%_49%,77%_65%,64%_61%,55%_81%,57%_29%)]
              "
            />
            <div
              className="
                absolute
                left-1/2
                top-0
                -translate-x-1/2
                w-2
                h-2
                rounded-full
                bg-white
                shadow-[0_0_25px_6px_rgba(255,255,255,0.3)]
              "
            />
          </div>

          {/* LEGENDA */}
          <div className="absolute bottom-0 left-0 right-0 text-center">
            <div className="inline-flex items-center gap-2 text-[8px] md:text-[9px] uppercase tracking-[0.35em] text-zinc-600">
              <Sparkles className="w-3 h-3 text-primary/50" />
              Muito mais por trás da sua presença digital
            </div>
          </div>
        </motion.div>

        {/* FOOTER */}
        <div className="mt-12 md:mt-16 pt-8 border-t border-white/[0.06] text-center">
          <p className="text-[9px] uppercase tracking-[0.4em] text-zinc-700">
            © 2026 Elyra Digital • Crafted for Excellence
          </p>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;