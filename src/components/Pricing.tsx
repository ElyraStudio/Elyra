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

// --- NOVOS PLANOS DEFINITIVOS (CORRIGIDOS COM PREÇOS DA ELYRA) ---
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
      transition={{ duration: 0.2, ease: "easeOut" }}
      className={`relative p-8 rounded-[32px] border flex flex-col cursor-pointer select-none w-full
        ${plan.featured ? "shadow-[0_0_50px_-12px_rgba(var(--primary-rgb),0.3)]" : ""}
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
            <li key={`feat-${plan.id}-${i}`} className={`flex gap-3 text-sm items-start ${!isIncluded ? "opacity-30" : ""}`}>
              <Check className={`w-4 h-4 shrink-0 mt-0.5 ${isIncluded ? "text-primary" : "text-zinc-800"}`} />
              <span className="text-zinc-300 font-light tracking-tight">{isText ? f : f.text}</span>
            </li>
          );
        })}
      </ul>

      <motion.div 
        style={{ overflow: "hidden" }}
        animate={{ 
          height: isHovered ? "auto" : 0, 
          opacity: isHovered ? 1 : 0 
        }}
        transition={{ duration: 0.25, ease: "easeInOut" }}
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

      <Button 
        className={`w-full h-14 rounded-2xl font-black uppercase tracking-widest text-xs transition-all duration-300 mt-6 ${
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

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 items-start mb-24">
          {plans.map((plan) => (
            <PricingCard key={plan.id} plan={plan} openWhatsapp={openWhatsapp} />
          ))}
        </div>

        {/* Seção de Soluções Avançadas */}
        <div className="relative pt-20 border-t border-white/5">
          <div className="text-center mb-12">
            <h3 className="text-xs font-black uppercase tracking-[0.4em] text-zinc-500">Soluções Avançadas</h3>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto items-start">
            {advancedSolutions.map((plan) => (
              <PricingCard key={plan.id} plan={plan} openWhatsapp={openWhatsapp} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}