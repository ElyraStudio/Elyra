import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";

const steps = [
  {
    number: "01",
    title: "Diagnóstico",
    text: "Analisamos sua presença online e identificamos exatamente onde você está perdendo clientes.",
  },
  {
    number: "02",
    title: "Engenharia",
    text: "Estruturamos sua presença digital com design de elite e otimização para o topo do Google.",
  },
  {
    number: "03",
    title: "Domínio",
    text: "Sua estrutura gera contatos decididos, transformando buscas em faturamento real.",
  },
];

const HowItWorks = () => {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const wireHeight = useTransform(smoothProgress, [0, 1], ["0%", "100%"]);

  return (
    <section 
      ref={containerRef}
      id="como-funciona" 
      className="py-24 md:py-40 bg-black relative overflow-hidden"
    >
      <div className="container-main px-6 relative">
        
        {/* HEADER */}
        <div className="max-w-3xl mb-24 md:mb-32">
          <h2 className="text-sm font-black uppercase tracking-[0.3em] text-primary mb-4">
            O Fluxo
          </h2>
          <h3 className="text-4xl md:text-6xl font-extrabold text-white tracking-tighter leading-none">
            A energia que move <br /> 
            <span className="text-white/40 font-light italic">o seu faturamento.</span>
          </h3>
        </div>

        <div className="relative">
          
          {/* FIO DE ENERGIA MOBILE */}
          <div className="absolute left-2 top-0 bottom-0 w-[2px] md:hidden pointer-events-none bg-white/5">
            <motion.div 
              style={{ height: wireHeight }}
              className="absolute top-0 left-0 w-full bg-primary shadow-[0_0_15px_rgba(var(--primary-rgb),0.8)]"
            />
            <motion.div 
              style={{ top: wireHeight }}
              className="absolute left-1/2 -translate-x-1/2 w-3 h-3 bg-white rounded-full shadow-[0_0_20px_#fff,0_0_40px_var(--primary-hex)]"
            />
          </div>

          {/* FIO DE ENERGIA DESKTOP */}
          <div className="absolute top-1/2 left-0 w-full -translate-y-1/2 hidden md:block px-10 pointer-events-none">
            <svg viewBox="0 0 1200 200" fill="none" className="w-full">
              <path d="M0,100 C200,200 400,0 600,100 S1000,0 1200,100" stroke="rgba(255,255,255,0.05)" strokeWidth="2" />
              <motion.path
                d="M0,100 C200,200 400,0 600,100 S1000,0 1200,100"
                stroke="var(--primary-hex)"
                strokeWidth="4"
                strokeLinecap="round"
                style={{ pathLength: smoothProgress }}
              />
            </svg>
          </div>

          {/* CARDS */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-12 relative z-10">
            {steps.map((step) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0.2 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: false, amount: 0.7 }}
                transition={{ duration: 0.5 }}
                className="group relative ml-8 md:ml-0"
              >
                <div className="absolute -inset-4 bg-primary/5 blur-3xl rounded-[40px] pointer-events-none transition-opacity duration-500 opacity-0 group-hover:opacity-100" />

                <div className="relative p-8 md:p-10 rounded-[32px] border border-white/5 bg-zinc-950/90 backdrop-blur-xl transition-all duration-500 group-hover:border-primary/40">
                  
                  {/* BADGE DO NÚMERO: Sempre aceso no mobile (bg-primary text-black) */}
                  {/* No Desktop (md:), ele volta para o estado escuro e só acende no hover */}
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-8 transition-all duration-500 bg-primary text-black md:bg-white/5 md:text-white md:border md:border-white/10 md:group-hover:bg-primary md:group-hover:text-black md:group-hover:border-transparent">
                    <span className="text-xl font-black tabular-nums">{step.number}</span>
                  </div>
                  
                  <h4 className="text-2xl font-bold text-white mb-4 tracking-tight">
                    {step.title}
                  </h4>
                  <p className="text-zinc-400 text-lg leading-relaxed font-light">
                    {step.text}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;