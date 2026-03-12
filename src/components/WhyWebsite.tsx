import { motion } from "framer-motion";
import { Users, Award, Clock } from "lucide-react";

const cards = [
  {
    icon: Users,
    title: "Mais clientes",
    text: "Apareça nas buscas e seja encontrado por novos clientes todos os dias.",
  },
  {
    icon: Award,
    title: "Mais profissionalismo",
    text: "Um site transmite confiança e fortalece sua marca.",
  },
  {
    icon: Clock,
    title: "Disponível 24 horas",
    text: "Seu negócio aberto na internet o tempo todo.",
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

const WhyWebsite = () => {
  return (
    <section id="beneficios" className="section-spacing">
      <div className="container-main">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Seu negócio precisa existir na internet.
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Hoje a maioria das pessoas pesquisa no Google antes de escolher um serviço. Um site profissional aumenta sua credibilidade e ajuda novos clientes a encontrarem sua empresa.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-3 gap-6"
        >
          {cards.map((card) => (
            <motion.div key={card.title} variants={item} className="glass-card text-center">
              <div className="inline-flex items-center justify-center h-12 w-12 rounded-xl bg-secondary mb-6">
                <card.icon className="h-6 w-6 text-secondary-foreground" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">{card.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{card.text}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyWebsite;
