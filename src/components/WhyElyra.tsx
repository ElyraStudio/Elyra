import { motion } from "framer-motion";
import { Monitor, Zap, DollarSign, Headphones } from "lucide-react";

const features = [
  { icon: Monitor, title: "Sites modernos", text: "Design profissional adaptado para celular e computador." },
  { icon: Zap, title: "Entrega rápida", text: "Seu site pode ficar pronto em poucos dias." },
  { icon: DollarSign, title: "Flexibilidade", text: "Alugue por uma mensalidade ou compre de uma vez — você escolhe." },
  { icon: Headphones, title: "Suporte incluído", text: "Atualizações e suporte técnico sempre que precisar." },
];

const container = { hidden: {}, show: { transition: { staggerChildren: 0.07 } } };

const item = {
  hidden: { opacity: 0, y: 8 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as const },
  },
};

const WhyElyra = () => (
  <section className="py-16 md:py-24">
    <div className="container-main">

      <motion.h2
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground text-center mb-12 md:mb-16"
      >
        Por que usar a Elyra?
      </motion.h2>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid grid-cols-2 gap-4 md:gap-6"
      >
        {features.map((f) => (
          <motion.div
            key={f.title}
            variants={item}
            whileHover={{ y: -4 }}
            className="group relative glass-card p-4 md:p-6 flex flex-col md:flex-row gap-3 md:gap-5 overflow-hidden"
          >

            {/* Glow effect */}
            <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500">
              <div className="absolute -inset-[100%] bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.15),transparent_60%)]"></div>
            </div>

            <div className="flex-shrink-0 inline-flex items-center justify-center h-10 w-10 md:h-12 md:w-12 rounded-xl bg-secondary">
              <f.icon className="h-5 w-5 md:h-6 md:w-6 text-secondary-foreground" />
            </div>

            <div>
              <h3 className="text-sm md:text-lg font-bold text-foreground mb-1 md:mb-2">
                {f.title}
              </h3>

              <p className="text-xs md:text-base text-muted-foreground leading-relaxed">
                {f.text}
              </p>
            </div>

          </motion.div>
        ))}
      </motion.div>

    </div>
  </section>
);

export default WhyElyra;

