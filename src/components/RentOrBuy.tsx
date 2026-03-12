import { motion } from "framer-motion";
import { RefreshCw, ShoppingBag, Check } from "lucide-react";

const plans = [
  {
    icon: RefreshCw,
    title: "Alugar um site",
    subtitle: "Indicado para quem quer começar rápido.",
    benefits: [
      "Mensalidade acessível",
      "Sem investimento alto inicial",
      "Suporte contínuo",
      "Atualizações incluídas",
    ],
  },
  {
    icon: ShoppingBag,
    title: "Comprar um site",
    subtitle: "Indicado para quem quer ter o site como propriedade.",
    benefits: [
      "Pagamento único",
      "Site totalmente seu",
      "Liberdade total de uso",
      "Ideal para empresas maiores",
    ],
  },
];

const container = { hidden: {}, show: { transition: { staggerChildren: 0.1 } } };
const item = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as const } },
};

const RentOrBuy = () => (
  <section className="section-spacing">
    <div className="container-main">
      <motion.h2
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
        className="text-3xl sm:text-4xl font-bold text-foreground text-center mb-4"
      >
        Alugar ou comprar um site: qual é melhor para você?
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5, delay: 0.05, ease: [0.25, 0.1, 0.25, 1] }}
        className="text-muted-foreground text-center mb-12 text-lg max-w-2xl mx-auto"
      >
        Escolha o modelo que faz mais sentido para o momento do seu negócio.
      </motion.p>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto"
      >
        {plans.map((plan) => (
          <motion.div
            key={plan.title}
            variants={item}
            className="glass-card relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary/40 to-primary/10" />
            <div className="inline-flex items-center justify-center h-12 w-12 rounded-xl bg-secondary mb-5">
              <plan.icon className="h-6 w-6 text-secondary-foreground" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-2">{plan.title}</h3>
            <p className="text-muted-foreground mb-6">{plan.subtitle}</p>
            <ul className="space-y-3">
              {plan.benefits.map((b) => (
                <li key={b} className="flex items-center gap-3 text-sm text-foreground">
                  <Check className="h-4 w-4 text-primary flex-shrink-0" />
                  {b}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default RentOrBuy;
