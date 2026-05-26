import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { useState } from "react";

// --- DADOS DOS PLANOS PRINCIPAIS ---
const plans = [
  {
    id: "p-starter",
    name: "Aura Starter",
    type: "Modelo Assinatura",
    description: "Presença profissional imediata com baixo investimento.",
    price: "R$60",
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
    id: "p-one",
    name: "Aura One",
    type: "Propriedade Única",
    description: "Seu site é um ativo permanente do seu negócio.",
    oldPrice: "R$990",
    price: "R$750",
    cta: "Comprar site",
    features: [
      "Site completo profissional",
      "Design de Alta Conversão",
      "WhatsApp integrated",
      { text: "Domínio incluso (1 ano)", included: true },
      { text: "Propriedade total do código", included: true },
    ],
    details: ["Sem mensalidades", "Liberdade total de hospedagem", "Base sólida para escalar"],
  },
  {
    id: "p-presenca",
    name: "Presença Digital",
    type: "Venda + Estratégia",
    description: "Dominando as buscas locais no Google.",
    oldPrice: "R$1100",
    price: "R$900",
    monthly: "ou R$169 mensais",
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
    id: "p-crescimento",
    name: "Crescimento Pro",
    type: "Venda + SEO Avançado",
    description: "Autoridade máxima no seu segmento.",
    oldPrice: "R$1799",
    price: "R$1490",
    monthly: "ou R$ 199 mensais",
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

// --- NOVOS PLANOS DEFINITIVOS ---
const advancedSolutions = [
  {
    id: "p-saas",
    name: "SaaS Elyra",
    type: "Plataforma Tech",
    description: "Sistema inteligente para gestão de leads e controle comercial.",
    oldPrice: "R$590",
    price: "R$450",
    monthly: "ou R$99 mensais",
    cta: "Testar Plataforma",
    features: [
      "Painel de controle de Leads",
      "Histórico de interações automático",
      "Métricas de conversão em tempo real",
      "Suporte para até 3 usuários",
    ],
    details: ["Sem taxa de instalação", "Backup diário na nuvem", "Exportação de relatórios"],
  },
  {
    id: "p-automacao",
    name: "Elyra Automação",
    type: "Ecossistema & IA",
    description: "A experiência e os fluxos da sua marca rodando no piloto automático.",
    oldPrice: "R$990",
    price: "R$750",
    monthly: "ou R$149 mensais",
    cta: "Implementar Automação",
    features: [
      "Integração do Site com CRMs e Planilhas",
      "Disparos automáticos no WhatsApp",
      "Notificações de vendas em tempo real",
      "Suporte prioritário para adjustments",
    ],
    details: ["Configuração inicial assistida", "Otimização de processos", "Estabilidade garantida"],
  },
];

interface PlanProps {
  id: string;
  name: string;
  type: string;
  description: string;
  price: string;
  oldPrice?: string;
  period?: string;
  monthly?: string;
  featured?: boolean;
  badge?: string;
  cta: string;
  features: (string | { text: string; included: boolean })[];
  details: string[];
}

const PricingCard = ({ plan, openWhatsapp }: { plan: PlanProps; openWhatsapp: (name: string) => void }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      animate={{
        backgroundColor: isHovered ? "rgba(24, 24, 27, 0.95)" : plan.featured ? "rgba(24, 24, 27, 0.5)" : "rgba(255, 255, 255, 0.02)",
        borderColor: isHovered ? "rgba(255, 255, 255, 0.2)" : plan.featured ? "rgba(var(--primary-rgb), 0.4)" : "rgba(255, 255, 255, 0.05)",
        y: isHovered ? -8 : 0
      }}
      whileTap={{ scale: 0.98 }} /* Animação suave de clique/toque no mobile */
      transition={{ duration: 0.2, ease: "easeOut" }}
      className={`relative p-4 md:p-8 rounded-[24px] md:rounded-[32px] border flex flex-col justify-between cursor-pointer select-none w-full h-full
        ${plan.featured ? "shadow-[0_0_50px_-12px_rgba(var(--primary-rgb),0.3)]" : ""}
      `}
    >
      {plan.badge && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary px-3 py-1 rounded-full shadow-[0_0_20px_rgba(var(--primary-rgb),0.5)] z-20 whitespace-nowrap">
          <span className="text-[8px] md:text-[10px] font-black uppercase tracking-widest text-black">
            {plan.badge}
          </span>
        </div>
      )}

      <div>
        <div className="mb-4 md:mb-8">
          <h3 className="text-base md:text-xl font-bold text-white mb-1 break-words">{plan.name}</h3>
          <p className="text-[9px] md:text-[10px] text-primary font-black uppercase tracking-[0.15em] md:tracking-[0.2em]">{plan.type}</p>
        </div>

        <div className="mb-6 md:mb-8 h-20 md:h-24 flex flex-col justify-end text-white">
          {plan.oldPrice && <span className="line-through text-[10px] md:text-xs text-zinc-600 mb-1">{plan.oldPrice}</span>}
          <div className="flex items-baseline gap-0.5 md:gap-1 flex-wrap">
            <span className="text-2xl md:text-4xl font-black">{plan.price}</span>
            {plan.period && <span className="text-xs md:text-sm text-zinc-500 font-light">{plan.period}</span>}
          </div>
          {plan.monthly && <p className="text-[9px] md:text-[10px] text-primary/80 mt-1 md:mt-2 font-bold uppercase tracking-tighter">{plan.monthly}</p>}
        </div>

        <ul className="space-y-3 md:space-y-4 mb-6 md:mb-8">
          <ul className="space-y-3 md:space-y-4 mb-6 md:mb-8">
  {plan.features.map((f: any, i: number) => {
    const isText = typeof f === "string";
    const isIncluded = isText || f.included;
    return (
      <li key={`feat-${plan.id}-${i}`} className={`flex gap-2 md:gap-3 text-xs md:text-sm items-start ${!isIncluded ? "opacity-30" : ""}`}>
        <Check className={`w-3.5 h-3.5 md:w-4 md:h-4 shrink-0 mt-0.5 ${isIncluded ? "text-primary" : "text-zinc-800"}`} />
        <span className="text-zinc-300 font-light tracking-tight line-clamp-3 md:line-clamp-none">{isText ? f : f.text}</span>
      </li> // <-- Corrigido aqui de </td> para </li>
    );
  })}
</ul>
        
        </ul>

        <motion.div
          style={{ overflow: "hidden" }}
          animate={{
            height: isHovered ? "auto" : 0,
            opacity: isHovered ? 1 : 0
          }}
          transition={{ duration: 0.25, ease: "easeInOut" }}
          className="hidden md:block"
        >
          <div className="pt-6 border-t border-white/5 mb-6">
            {plan.details.map((d: string, i: number) => (
              <div key={`det-${plan.id}-${i}`} className="flex gap-2 text-[11px] text-zinc-500 items-center mb-2">
                <div className="w-1 h-1 rounded-full bg-primary/40" />
                {d}
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      <Button
        className={`w-full h-10 md:h-14 px-2 rounded-xl md:rounded-2xl font-black uppercase tracking-widest text-[9px] md:text-xs transition-all duration-300 mt-auto whitespace-normal text-center leading-tight ${
          plan.featured ? "bg-primary text-black hover:scale-[1.02]" : "bg-white/5 text-white hover:bg-white/10"
        }`}
        onClick={(e) => {
          e.stopPropagation();
          openWhatsapp(plan.name);
        }}
      >
        {plan.cta}
      </Button>
    </motion.div>
  );
};

// --- COMPONENTE PRINCIPAL ---
export default function Pricing() {
  const openWhatsapp = (plan: string) => {
    const phone = "5551996747657";
    const message = `Olá! Gostaria de saber mais sobre o plano ${plan} da Elyra.`;
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, "_blank");
  };

  return (
    <section id="planos" className="py-16 md:py-32 bg-black text-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        
        <div className="text-center mb-12 md:mb-20 text-white">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-6xl font-extrabold tracking-tighter mb-4 md:mb-6"
          >
            Invista no seu <br />
            <span className="text-white/40 italic font-light">próximo nível.</span>
          </motion.h2>
          <p className="text-zinc-400 max-w-2xl mx-auto text-sm md:text-lg font-light">
            Modelos de negócio flexíveis para acompanhar a evolução da sua empresa.
          </p>
        </div>

        {/* Grid de Planos Principais */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 items-stretch mb-16 md:mb-24">
          {plans.map((plan) => (
            <div key={plan.id} className="h-full">
              <PricingCard plan={plan} openWhatsapp={openWhatsapp} />
            </div>
          ))}
        </div>

        {/* Seção de Soluções Avançadas */}
        <div className="relative pt-12 md:pt-20 border-t border-white/5">
          <div className="text-center mb-8 md:mb-12">
            <h3 className="text-[10px] md:text-xs font-black uppercase tracking-[0.3em] md:tracking-[0.4em] text-zinc-500">Soluções Avançadas</h3>
          </div>

          {/* Grid de Soluções Avançadas */}
          <div className="grid grid-cols-2 gap-4 md:gap-8 max-w-4xl mx-auto items-stretch">
            {advancedSolutions.map((plan) => (
              <div key={plan.id} className="h-full">
                <PricingCard plan={plan} openWhatsapp={openWhatsapp} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}