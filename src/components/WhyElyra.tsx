import { motion } from "framer-motion";
import { Monitor, Zap, DollarSign, Headphones } from "lucide-react";

const features = [
  {
    icon: Monitor,
    title: "Sites modernos",
    text: "Design profissional adaptado para celular e computador.",
  },
  {
    icon: Zap,
    title: "Entrega rápida",
    text: "Seu site pode ficar pronto em poucos dias.",
  },
  {
    icon: DollarSign,
    title: "Sem investimento alto",
    text: "Em vez de pagar milhares por um site, você paga apenas uma mensalidade.",
  },
  {
    icon: Headphones,
    title: "Suporte incluído",
    text: "Atualizações e suporte técnico sempre que precisar.",
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07 } },
};

const item = {
  hidden: { opacity: 0, y: 8 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] } },
};

const WhyElyra = () => {
  return (
    <section className="section-spacing">
      <div className="container-main">
        <motion.h2
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-3xl sm:text-4xl font-bold text-foreground text-center mb-16"
        >
          Por que usar a Elyra?
        </motion.h2>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid sm:grid-cols-2 gap-6"
        >
          {features.map((f) => (
            <motion.div key={f.title} variants={item} className="glass-card flex gap-5">
              <div className="flex-shrink-0 inline-flex items-center justify-center h-12 w-12 rounded-xl bg-secondary">
                <f.icon className="h-6 w-6 text-secondary-foreground" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-foreground mb-2">{f.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{f.text}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyElyra;
