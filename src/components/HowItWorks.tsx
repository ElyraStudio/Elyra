import { motion } from "framer-motion";

const steps = [
  { number: "1", text: "Você nos conta sobre seu negócio." },
  { number: "2", text: "Criamos um site profissional para sua empresa." },
  { number: "3", text: "Seu site começa a atrair novos clientes." },
];

const container = { hidden: {}, show: { transition: { staggerChildren: 0.07 } } };
const item = {
  hidden: { opacity: 0, y: 8 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as const } },
};

const HowItWorks = () => (
  <section id="como-funciona" className="section-spacing">
    <div className="container-main">
      <motion.h2
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
        className="text-3xl sm:text-4xl font-bold text-foreground text-center mb-16"
      >
        Simples, rápido e sem burocracia.
      </motion.h2>
      <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }} className="grid md:grid-cols-3 gap-8">
        {steps.map((step) => (
          <motion.div key={step.number} variants={item} className="glass-card text-center">
            <div className="inline-flex items-center justify-center h-14 w-14 rounded-full bg-primary text-primary-foreground text-2xl font-bold mb-6">
              {step.number}
            </div>
            <p className="text-foreground text-lg font-medium leading-relaxed">{step.text}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default HowItWorks;
