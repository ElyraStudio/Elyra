import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check, Lock } from "lucide-react";
import { useState } from "react";

// --- DADOS DOS PLANOS ---
const plans = [
  {
    name: "Aura Starter",
    type: "Modelo Assinatura",
    description: "Presença profissional imediata com baixo investimento.",
    price: "R$120",
    period: "/mês",
    cta: "Começar agora",
    features: [
      "Site profissional de elite",
      "Otimização Mobile total",
      "WhatsApp flutuante",
      { text: "Domínio próprio", included: false },
      { text: "Propriedade do código", included: false },
    ],
    details: ["Hospedagem Premium inclusa", "Suporte técnico contínuo", "Atualizações de segurança"],
  },
  {
    name: "Aura One",
    type: "Propriedade Única",
    description: "Seu site é um ativo permanente do seu negócio.",
    oldPrice: "R$990",
    price: "R$750",
    cta: "Comprar site",
    features: [
      "Site completo profissional",
      "Design de Alta Conversão",
      "WhatsApp integrado",
      { text: "Domínio incluso (1 ano)", included: true },
      { text: "Propriedade total do código", included: true },
    ],
    details: ["Sem mensalidades", "Liberdade total de hospedagem", "Base sólida para escalar"],
  },
  {
    name: "Presença Digital",
    type: "Venda + Estratégia",
    description: "Dominando as buscas locais no Google.",
    oldPrice: "R$1100",
    price: "R$900",
    monthly: "ou 12x de R$89",
    featured: true,
    badge: "Ouro: Mais escolhido",
    cta: "Quero dominar o mercado",
    features: [
      "Tudo do Aura One",
      "Configuração Google Meu Negócio",
      "SEO Local Estratégico",
      { text: "Indexação prioritária Google", included: true },
    ],
    details: ["Atração de clientes orgânicos", "Foco total em vendas", "Consultoria de conversão"],
  },
  {
    name: "Crescimento Pro",
    type: "Venda + SEO Avançado",
    description: "Autoridade máxima no seu segmento.",
    oldPrice: "R$1799",
    price: "R$1490",
    monthly: "ou 12x de R$147",
    cta: "Quero crescer",
    features: [
      "Tudo do Presença Digital",
      "SEO Técnico Avançado",
      "Gestão de Avaliações",
      { text: "Suporte VIP Prioritário", included: true },
    ],
    details: ["Relatórios trimestrais", "Análise de concorrência", "Escalabilidade de tráfego"],
  },
];

const comingSoon = [
  { name: "SaaS Elyra", desc: "Sistema inteligente para gestão de leads e automação de vendas." },
  { name: "Elyra Mobile", desc: "A experiência da sua marca direto na palma da mão do cliente." },
];

// --- COMPONENTE DE CARD ISOLADO ---
const PricingCard = ({ plan, openWhatsapp }: { plan: any, openWhatsapp: any }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`relative p-8 rounded-[32px] border transition-all duration-500 flex flex-col cursor-pointer
        ${plan.featured 
          ? "bg-zinc-900/50 border-primary/40 shadow-[0_0_50px_-12px_rgba(var(--primary-rgb),0.3)]" 
          : "bg-white/[0.02] border-white/5"}
        ${isHovered ? "border-white/20 -translate-y-2 bg-zinc-900/80" : ""}
      `}
    >
      {plan.badge && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary px-4 py-1 rounded-full shadow-[0_0_20px_rgba(var(--primary-rgb),0.5)] z-20">
          <span className="text-[10px] font-black uppercase tracking-widest text-black">
            {plan.badge}
          </span>
        </div>
      )}

      <div className="mb-8">
        <h3 className="text-xl font-bold text-white mb-1">{plan.name}</h3>
        <p className="text-[10px] text-primary font-black uppercase tracking-[0.2em]">{plan.type}</p>
      </div>

      <div className="mb-8 h-24 flex flex-col justify-end text-white">
        {plan.oldPrice && <span className="line-through text-xs text-zinc-600 mb-1">{plan.oldPrice}</span>}
        <div className="flex items-baseline gap-1">
          <span className="text-4xl font-black">{plan.price}</span>
          {plan.period && <span className="text-sm text-zinc-500 font-light">{plan.period}</span>}
        </div>
        {plan.monthly && <p className="text-[10px] text-primary/80 mt-2 font-bold uppercase tracking-tighter">{plan.monthly}</p>}
      </div>

      <ul className="space-y-4 mb-8 flex-grow">
        {plan.features.map((f: any, i: number) => {
          const isText = typeof f === "string";
          const isIncluded = isText || f.included;
          return (
            <li key={i} className={`flex gap-3 text-sm items-start ${!isIncluded ? "opacity-30" : ""}`}>
              <Check className={`w-4 h-4 shrink-0 mt-0.5 ${isIncluded ? "text-primary" : "text-zinc-800"}`} />
              <span className="text-zinc-300 font-light tracking-tight">{isText ? f : f.text}</span>
            </li>
          );
        })}
      </ul>

      {/* Área de expansão controlada individualmente */}
      <div className="overflow-hidden">
        <AnimatePresence initial={false}>
          {isHovered && (
            <motion.div
              key="content"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <div className="pt-6 border-t border-white/5 mb-6">
                {plan.details.map((d: string, i: number) => (
                  <div key={i} className="flex gap-2 text-[11px] text-zinc-500 items-center mb-2">
                    <div className="w-1 h-1 rounded-full bg-primary/40" />
                    {d}
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <Button 
        className={`w-full h-14 rounded-2xl font-black uppercase tracking-widest text-xs transition-all duration-300 ${
          plan.featured ? "bg-primary text-black hover:scale-[1.02]" : "bg-white/5 text-white hover:bg-white/10"
        }`}
        onClick={(e) => {
          e.stopPropagation();
          openWhatsapp(plan.name);
        }}
      >
        {plan.cta}
      </Button>
    </div>
  );
};

// --- COMPONENTE PRINCIPAL ---
const Pricing = () => {
  const openWhatsapp = (plan: string) => {
    const phone = "5551996747657";
    const message = `Olá! Gostaria de saber mais sobre o plano ${plan} da Elyra.`;
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, "_blank");
  };

  return (
    <section id="planos" className="py-24 md:py-32 bg-black text-white overflow-hidden">
      <div className="container mx-auto px-6">
        
        <div className="text-center mb-20 text-white">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-extrabold tracking-tighter mb-6"
          >
            Invista no seu <br />
            <span className="text-white/40 italic font-light">próximo nível.</span>
          </motion.h2>
          <p className="text-zinc-400 max-w-2xl mx-auto text-lg font-light">
            Modelos de negócio flexíveis para acompanhar a evolução da sua empresa.
          </p>
        </div>

        {/* items-start impede que os cards estiquem para baixo juntos */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 items-start mb-20">
          {plans.map((plan, index) => (
            <PricingCard key={index} plan={plan} openWhatsapp={openWhatsapp} />
          ))}
        </div>

        <div className="relative pt-20 border-t border-white/5">
          <div className="text-center mb-12">
            <h3 className="text-xs font-black uppercase tracking-[0.4em] text-zinc-600">The Future Ecosystem</h3>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto text-white">
            {comingSoon.map((item, idx) => (
              <div 
                key={idx}
                className="group relative p-10 rounded-[32px] border border-white/5 bg-zinc-950/50 overflow-hidden"
              >
                <div className="blur-[4px] group-hover:blur-[2px] transition-all duration-1000 opacity-20">
                  <h4 className="text-2xl font-bold mb-3">{item.name}</h4>
                  <p className="text-zinc-400 font-light">{item.desc}</p>
                </div>

                <div className="absolute inset-0 flex flex-col items-center justify-center backdrop-blur-[2px] bg-black/40 group-hover:bg-black/20 transition-all duration-700">
                  <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-4">
                    <Lock className="w-5 h-5 text-zinc-500" />
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-[0.3em] px-4 py-1.5 bg-white text-black rounded-full shadow-xl">
                    Coming Soon
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;