import { motion } from "framer-motion";

const steps = [
  { number: "1", text: "Você nos conta sobre seu negócio." },
  { number: "2", text: "Criamos um site profissional para sua empresa." },
  { number: "3", text: "Seu site começa a atrair novos clientes." },
];

const container = { hidden: {}, show: { transition: { staggerChildren: 0.2 } } };

const item = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const HowItWorks = () => (
  <section id="como-funciona" className="py-20 md:py-28 relative overflow-hidden">
    <div className="container-main relative">

      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground text-center mb-16"
      >
        Simples, rápido e sem burocracia.
      </motion.h2>

      {/* DESKTOP ZIGZAG */}
      <div className="absolute inset-0 pointer-events-none hidden md:flex items-center">

        <svg viewBox="0 0 1000 300" className="w-full h-[260px]" preserveAspectRatio="none">

          <defs>
            <linearGradient id="iceGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="transparent"/>
              <stop offset="40%" stopColor="#c9f2ff"/>
              <stop offset="60%" stopColor="#c9f2ff"/>
              <stop offset="100%" stopColor="transparent"/>
            </linearGradient>
          </defs>

          <motion.path
            d="M0 150 L300 60 L600 240 L900 80 L1000 150"
            stroke="url(#iceGradient)"
            strokeWidth="5"
            fill="transparent"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.8, ease: "easeInOut" }}
          />
        </svg>

      </div>

      {/* MOBILE ZIGZAG */}
      <div className="absolute inset-0 pointer-events-none md:hidden flex justify-center">

        <svg viewBox="0 0 200 600" className="h-full w-[120px]" preserveAspectRatio="none">

          <defs>
            <linearGradient id="iceGradientMobile" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="transparent"/>
              <stop offset="40%" stopColor="#c9f2ff"/>
              <stop offset="60%" stopColor="#c9f2ff"/>
              <stop offset="100%" stopColor="transparent"/>
            </linearGradient>
          </defs>

          <motion.path
            d="M100 0 L40 200 L160 400 L100 600"
            stroke="url(#iceGradientMobile)"
            strokeWidth="5"
            fill="transparent"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.8, ease: "easeInOut" }}
          />
        </svg>

      </div>

      {/* CARDS */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid md:grid-cols-3 gap-12 md:gap-8 relative"
      >
        {steps.map((step) => (
          <motion.div
            key={step.number}
            variants={item}
            className="glass-card text-center p-6 relative z-10"
          >

            <div className="mx-auto flex items-center justify-center
            h-14 w-14 rounded-full bg-primary text-primary-foreground
            text-2xl font-bold mb-6 shadow-lg">
              {step.number}
            </div>

            <p className="text-foreground text-base md:text-lg font-medium leading-relaxed">
              {step.text}
            </p>

          </motion.div>
        ))}
      </motion.div>

    </div>
  </section>
);

export default HowItWorks;

