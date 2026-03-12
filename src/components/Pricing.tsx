import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Plano Essencial",
    price: "R$79",
    featured: false,
    cta: "Começar agora",
    features: [
      "Site profissional",
      "Layout responsivo",
      "Botão de WhatsApp",
      "Hospedagem",
      "Suporte básico",
    ],
  },
  {
    name: "Plano Profissional",
    price: "R$129",
    featured: true,
    cta: "Quero esse plano",
    badge: "Recomendado",
    features: [
      "Tudo do plano essencial",
      "SEO básico",
      "Integração com Google",
      "Atualizações incluídas",
      "Suporte prioritário",
    ],
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

const Pricing = () => {
  return (
    <section id="planos" className="section-spacing">
      <div className="container-main">
        <motion.h2
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-3xl sm:text-4xl font-bold text-foreground text-center mb-16"
        >
          Planos
        </motion.h2>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto"
        >
          {plans.map((plan) => (
            <motion.div
              key={plan.name}
              variants={item}
              className={`glass-card relative ${plan.featured ? "ring-2 ring-primary" : ""}`}
            >
              {plan.badge && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs font-medium px-4 py-1 rounded-full">
                  {plan.badge}
                </span>
              )}
              <h3 className="text-xl font-bold text-foreground mb-2">{plan.name}</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold text-foreground tabular-nums">{plan.price}</span>
                <span className="text-muted-foreground text-sm"> /mês</span>
              </div>
              <ul className="space-y-3 mb-8">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-3 text-sm text-foreground">
                    <Check className="h-4 w-4 text-primary flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <Button
                variant={plan.featured ? "hero" : "hero-secondary"}
                size="lg"
                className="w-full"
              >
                {plan.cta}
              </Button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;
