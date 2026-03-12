import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Aluguel de Site",
    description: "Mensalidade acessível, tudo incluído.",
    price: "R$79",
    period: "/mês",
    featured: false,
    cta: "Começar agora",
    features: [
      "Site profissional",
      "Layout responsivo",
      "Botão de WhatsApp",
      "Hospedagem incluída",
      "Suporte e atualizações",
    ],
  },
  {
    name: "Compra de Site",
    description: "Pagamento único, o site é seu.",
    price: "R$997",
    period: " único",
    featured: true,
    cta: "Quero comprar",
    badge: "Mais popular",
    features: [
      "Site profissional completo",
      "Layout moderno e responsivo",
      "Arquivos do site entregues",
      "Propriedade total do projeto",
      "SEO básico incluso",
    ],
  },
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

const Pricing = () => {

  const openWhatsapp = (plan: string) => {
    const phone = "5551996747657"; // COLOQUE SEU NÚMERO AQUI

    const message = `Olá! Vim pelo site da Elyra e tenho interesse no plano: ${plan}. Pode me explicar melhor?`;

    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

    window.open(url, "_blank");
  };

  return (
    <section id="planos" className="py-16 md:py-24">
      <div className="container-main">

        <motion.h2
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mt-3 text-2xl sm:text-3xl md:text-4xl font-bold text-foreground text-center mb-4"
        >
          Planos
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="text-muted-foreground text-center mb-10 md:mb-16 text-base md:text-lg max-w-2xl mx-auto"
        >
          Alugue ou compre — escolha o que faz sentido para você.
        </motion.p>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto"
        >
          {plans.map((plan) => (
            <motion.div
              key={plan.name}
              variants={item}
              className={`glass-card relative p-6 md:p-8 ${plan.featured ? "ring-2 ring-primary scale-[1.02]" : ""}`}
            >

              {plan.badge && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs font-medium px-4 py-1 rounded-full">
                  {plan.badge}
                </span>
              )}

              <h3 className="text-xl md:text-2xl font-bold text-foreground mb-1">
                {plan.name}
              </h3>

              <p className="text-sm text-muted-foreground mb-4">
                {plan.description}
              </p>

              <div className="mb-6 flex items-end gap-1">
                <span className="text-3xl md:text-4xl font-bold text-foreground tabular-nums">
                  {plan.price}
                </span>
                <span className="text-muted-foreground text-sm">
                  {plan.period}
                </span>
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
                onClick={() => openWhatsapp(plan.name)}
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

