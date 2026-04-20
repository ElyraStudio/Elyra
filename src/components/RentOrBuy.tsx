import { motion } from "framer-motion";
import { RefreshCw, ShoppingBag, Check, ArrowRight } from "lucide-react";

const plans = [
  {
    icon: RefreshCw,
    title: "Modelo de Assinatura",
    subtitle: "Agilidade & Baixo Risco",
    description:
      "Ideal para quem quer validar o negócio no digital sem descapitalizar o caixa agora.",
    pros: [
      "Baixo investimento inicial",
      "Site no ar em tempo recorde",
      "Suporte e Manutenção inclusos",
      "Hospedagem de alta performance",
    ],
    cons: "O site é um serviço prestado.",
    highlight: false,
  },
  {
    icon: ShoppingBag,
    title: "Ativo Digital Próprio",
    subtitle: "Liberdade & Patrimônio",
    description:
      "Ideal para empresas que buscam consolidar marca e ter controle total sobre seu patrimônio digital.",
    pros: [
      "Propriedade vitalícia do código",
      "Sem mensalidade de serviço",
      "Liberdade total para expansão",
      "Valorização do seu negócio",
    ],
    cons: "Investimento inicial conforme projeto.",
    highlight: true,
  },
];

const RentOrBuy = () => {
  // Função para scroll suave até a seção de preços
  const scrollToPricing = () => {
    const pricingSection = document.getElementById("planos");
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="py-24 md:py-32 bg-black relative">
      {/* Decoração de fundo */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="container-main px-6 relative text-white">
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold tracking-tighter mb-6"
          >
            Qual o melhor caminho para <br />
            <span className="text-white/40 italic font-light">o seu momento atual?</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-zinc-400 text-lg font-light leading-relaxed"
          >
            A escolha entre alugar ou comprar não é apenas sobre preço, mas sobre a velocidade que você precisa e o controle que você deseja ter.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, idx) => (
            <motion.div
              key={plan.title}
              initial={{ opacity: 0, x: idx === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className={`relative group p-1 rounded-[40px] transition-all duration-500 ${
                plan.highlight 
                  ? "bg-gradient-to-b from-primary/20 to-transparent" 
                  : "bg-white/5"
              }`}
            >
              <div className="bg-zinc-950 rounded-[38px] p-8 md:p-12 h-full flex flex-col border border-white/5 group-hover:border-primary/20 transition-all">
                
                {/* Header do Card */}
                <div className="flex items-start justify-between mb-10 text-white">
                  <div>
                    <div className={`h-14 w-14 rounded-2xl flex items-center justify-center mb-6 ${
                      plan.highlight ? "bg-primary text-black" : "bg-white/5 text-primary"
                    }`}>
                      <plan.icon className="h-7 w-7" />
                    </div>
                    <h3 className="text-2xl font-bold mb-2">{plan.title}</h3>
                    <p className="text-primary text-sm font-black uppercase tracking-widest">{plan.subtitle}</p>
                  </div>
                </div>

                {/* Descrição */}
                <p className="text-zinc-400 text-lg font-light leading-relaxed mb-10">
                  {plan.description}
                </p>

                {/* Lista de Prós */}
                <div className="space-y-4 mb-12 flex-grow">
                  {plan.pros.map((pro) => (
                    <div key={pro} className="flex items-center gap-3 text-zinc-300">
                      <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Check className="h-3 w-3 text-primary" />
                      </div>
                      <span className="text-base font-light">{pro}</span>
                    </div>
                  ))}
                </div>

                {/* Nota de rodapé */}
                <div className="pt-8 border-t border-white/5">
                  <p className="text-xs text-zinc-500 uppercase tracking-tighter">Nota importante:</p>
                  <p className="text-sm text-zinc-400 italic mt-1">{plan.cons}</p>
                </div>

                {/* CTA - AGORA LEVA PARA O PRICING */}
                <button 
                  onClick={scrollToPricing}
                  className="mt-8 flex items-center gap-2 text-white font-bold group/btn w-fit hover:text-primary transition-colors"
                >
                  Ver planos e preços <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform text-primary" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Fechamento Estratégico */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-20 text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-zinc-400 text-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Consultoria gratuita disponível para te ajudar a decidir.
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default RentOrBuy;