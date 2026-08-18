import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { useState } from "react";

// --- PLANOS PRINCIPAIS ---
const plans = [
  {
    id: "p-start",
    name: "Elyra Start",
    type: "Presença Digital",
    description:
      "O essencial para colocar seu negócio na internet com um site profissional, responsivo e conectado ao WhatsApp.",
    price: "R$60",
    period: "/mês",
    cta: "Começar agora",
    features: [
      "Site profissional",
      "Design responsivo",
      "WhatsApp integrado",
      "Hospedagem inclusa",
      "Manutenção básica",
    ],
    details: [
      "Estrutura otimizada para celular",
      "Atualizações básicas",
      "Suporte técnico",
    ],
  },
  {
    id: "p-pro",
    name: "Elyra Pro",
    type: "Site Profissional",
    description:
      "Um site completo e personalizado para apresentar sua marca, conquistar confiança e transformar visitantes em clientes.",
    oldPrice: "R$1.190",
    price: "R$950",
    monthly: "ou R$149 mensais",
    featured: true,
    badge: "Mais escolhido",
    cta: "Quero meu site",
    features: [
      "Tudo do Elyra Start",
      "Design personalizado",
      "Domínio próprio",
      "SEO básico",
      "Google Meu Negócio",
      "Analytics",
      "Formulário de contato",
      { text: "Propriedade total do código", included: true },
    ],
    details: [
      "Sem limitações de personalização",
      "Estrutura pensada para conversão",
      "Base preparada para crescimento",
    ],
  },
  {
    id: "p-growth",
    name: "Elyra Growth",
    type: "Presença + Aquisição",
    description:
      "Uma estrutura digital completa para negócios que querem aumentar sua visibilidade, atrair clientes e acompanhar seus resultados.",
    price: "R$1.590",
    monthly: "ou R$199 mensais",
    cta: "Quero crescer",
    features: [
      "Tudo do Elyra Pro",
      "SEO local avançado",
      "Otimização do Google",
      "Estratégia de conversão",
      "Gestão de avaliações",
      "Monitoramento de métricas",
      "Domínio incluso",
      { text: "Suporte prioritário", included: true },
    ],
    details: [
      "Estratégia focada em aquisição",
      "Acompanhamento de resultados",
      "Estrutura preparada para escalar",
    ],
  },
];

// --- SOLUÇÕES AVANÇADAS ---
const advancedSolutions = [
  {
    id: "p-saas",
    name: "SaaS Elyra",
    type: "Plataforma Tech",
    description:
      "Ferramentas personalizadas para organizar leads, acompanhar vendas e gerenciar seu negócio.",
    oldPrice: "R$2.200",
    price: "R$1.190",
    monthly: "ou a partir de R$99 mensais",
    cta: "Conhecer plataforma",
    features: [
      "Painel de controle de leads",
      "Histórico de interações automático",
      "Métricas de conversão",
      "Suporte para até 3 usuários",
    ],
    details: [
      "Sem taxa de instalação",
      "Backup diário na nuvem",
      "Exportação de relatórios",
    ],
  },
  {
    id: "p-automacao",
    name: "Elyra Automação",
    type: "Automação & IA",
    description:
      "Automatize processos, conecte ferramentas e economize tempo no dia a dia do seu negócio.",
    oldPrice: "R$1.890",
    price: "R$1.490",
    monthly: "ou R$149 mensais",
    cta: "Implementar automação",
    features: [
      "Integração do site com CRMs e planilhas",
      "Disparos automáticos no WhatsApp",
      "Notificações de vendas em tempo real",
      "Suporte prioritário para ajustes",
    ],
    details: [
      "Configuração inicial assistida",
      "Otimização de processos",
      "Integrações personalizadas",
    ],
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

interface PricingCardProps {
  plan: PlanProps;
  openWhatsapp: (name: string) => void;
  isHovered: boolean;
  onHoverStart: () => void;
  onHoverEnd: () => void;
}

const PricingCard = ({
  plan,
  openWhatsapp,
  isHovered,
  onHoverStart,
  onHoverEnd,
}: PricingCardProps) => {
  return (
    <motion.div
      onHoverStart={onHoverStart}
      onHoverEnd={onHoverEnd}
      animate={{
        backgroundColor: isHovered
          ? "rgba(24, 24, 27, 0.95)"
          : plan.featured
            ? "rgba(24, 24, 27, 0.5)"
            : "rgba(255, 255, 255, 0.02)",
        borderColor: isHovered
          ? "rgba(255, 255, 255, 0.2)"
          : plan.featured
            ? "rgba(var(--primary-rgb), 0.4)"
            : "rgba(255, 255, 255, 0.05)",
        y: isHovered ? -8 : 0,
        scale: isHovered ? 1.02 : 1,
      }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className={`relative p-3.5 sm:p-5 md:p-8 rounded-[20px] sm:rounded-[24px] md:rounded-[32px] border flex flex-col cursor-pointer select-none w-full h-full min-h-0 md:h-auto md:min-h-[720px] origin-center will-change-transform
        ${
          plan.featured
            ? "shadow-[0_0_50px_-12px_rgba(var(--primary-rgb),0.3)]"
            : ""
        }
      `}
    >
      {plan.badge && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary px-3 py-1 rounded-full shadow-[0_0_20px_rgba(var(--primary-rgb),0.5)] z-20 whitespace-nowrap">
          <span className="text-[8px] md:text-[10px] font-black uppercase tracking-widest text-black">
            {plan.badge}
          </span>
        </div>
      )}

      <div className="flex-1">
        {/* CABEÇALHO */}
        <div className="mb-4 md:mb-6">
          <h3 className="text-[14px] sm:text-lg md:text-xl font-bold text-white mb-1 leading-tight">
            {plan.name}
          </h3>

          <p className="text-[7px] sm:text-[9px] md:text-[10px] text-primary font-black uppercase tracking-[0.12em] sm:tracking-[0.15em] md:tracking-[0.2em] mb-3 md:mb-4 leading-tight">
            {plan.type}
          </p>

          <p className="text-[9px] sm:text-xs md:text-sm text-zinc-400 font-light leading-[1.55] md:leading-relaxed md:min-h-[52px]">
            {plan.description}
          </p>
        </div>

        {/* PREÇO */}
        <div className="mb-4 sm:mb-6 md:mb-8 flex flex-col justify-end text-white md:min-h-[76px]">
          {plan.oldPrice && (
            <span className="line-through text-[10px] md:text-xs text-zinc-600 mb-1">
              {plan.oldPrice}
            </span>
          )}

          <div className="flex items-baseline gap-0.5 md:gap-1 flex-wrap">
            <span className="text-[22px] sm:text-3xl md:text-4xl font-black leading-none">
              {plan.price}
            </span>

            {plan.period && (
              <span className="text-[9px] sm:text-xs md:text-sm text-zinc-500 font-light">
                {plan.period}
              </span>
            )}
          </div>

          {plan.monthly && (
            <p className="text-[7px] sm:text-[9px] md:text-[10px] text-primary/80 mt-1 md:mt-2 font-bold uppercase tracking-tighter leading-tight">
              {plan.monthly}
            </p>
          )}
        </div>

        {/* FEATURES */}
        <ul className="space-y-2 sm:space-y-3 md:space-y-4 mb-4 sm:mb-6 md:mb-8">
          {plan.features.map((f, i) => {
            const isText = typeof f === "string";
            const isIncluded = isText || f.included;

            return (
              <li
                key={`feat-${plan.id}-${i}`}
                className={`flex gap-1.5 sm:gap-2 md:gap-3 text-[8px] sm:text-xs md:text-sm items-start leading-[1.35] ${
                  !isIncluded ? "opacity-30" : ""
                }`}
              >
                <Check
                  className={`w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 shrink-0 mt-[1px] sm:mt-0.5 ${
                    isIncluded ? "text-primary" : "text-zinc-800"
                  }`}
                />

                <span className="text-zinc-300 font-light tracking-tight">
                  {isText ? f : f.text}
                </span>
              </li>
            );
          })}
        </ul>

        {/* DETALHES NO HOVER */}
        <motion.div
          style={{ overflow: "hidden" }}
          animate={{
            height: isHovered ? "auto" : 0,
            opacity: isHovered ? 1 : 0,
          }}
          transition={{ duration: 0.25, ease: "easeInOut" }}
          className="hidden md:block"
        >
          <div className="pt-6 border-t border-white/5 mb-6">
            {plan.details.map((d, i) => (
              <div
                key={`det-${plan.id}-${i}`}
                className="flex gap-2 text-[11px] text-zinc-500 items-center mb-2"
              >
                <div className="w-1 h-1 rounded-full bg-primary/40" />
                {d}
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* CTA */}
      <Button
        className={`w-full h-9 sm:h-11 md:h-14 px-1.5 sm:px-2 rounded-[10px] sm:rounded-xl md:rounded-2xl font-black uppercase tracking-[0.05em] sm:tracking-widest text-[7px] sm:text-[9px] md:text-xs transition-all duration-300 mt-3 md:mt-auto shrink-0 whitespace-normal text-center leading-tight ${
          plan.featured
            ? "bg-primary text-black hover:scale-[1.02]"
            : "bg-white/5 text-white hover:bg-white/10"
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
  const [hoveredTopPlanId, setHoveredTopPlanId] = useState<string | null>(
    null
  );

  const [hoveredBottomPlanId, setHoveredBottomPlanId] =
    useState<string | null>(null);

  const openWhatsapp = (plan: string) => {
    const phone = "5551998202893";

    const message = `Olá! Gostaria de saber mais sobre o plano ${plan} da Elyra.`;

    window.open(
      `https://wa.me/${phone}?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  return (
    <section
      id="planos"
      className="py-10 sm:py-16 md:py-32 bg-black text-white overflow-hidden"
    >
      <div className="container mx-auto px-3 sm:px-4 md:px-6">
        {/* HEADER */}
        <div className="text-center mb-9 sm:mb-12 md:mb-20 text-white">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-6xl font-extrabold tracking-tighter mb-4 md:mb-6"
          >
            Escolha como quer <br />
            <span className="text-white/40 italic font-light">
              começar.
            </span>
          </motion.h2>

          <p className="text-zinc-400 max-w-2xl mx-auto text-sm md:text-lg font-light">
            Soluções digitais pensadas para acompanhar o crescimento do seu
            negócio.
          </p>
        </div>

        {/* --- PLANOS PRINCIPAIS --- */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-2.5 sm:gap-4 md:gap-6 items-stretch lg:items-start max-w-6xl mx-auto mb-12 md:mb-24">
          {plans.map((plan, index) => (
            <div
              key={plan.id}
              className={`w-full h-full lg:h-auto ${
                index === 2
                  ? "col-span-2 w-[calc(50%-0.3125rem)] sm:w-[calc(50%-0.5rem)] justify-self-center lg:col-span-1 lg:w-full"
                  : ""
              }`}
            >
              <PricingCard
                plan={plan}
                openWhatsapp={openWhatsapp}
                isHovered={hoveredTopPlanId === plan.id}
                onHoverStart={() => setHoveredTopPlanId(plan.id)}
                onHoverEnd={() => setHoveredTopPlanId(null)}
              />
            </div>
          ))}
        </div>

        {/* --- SOLUÇÕES AVANÇADAS --- */}
        <div className="relative pt-12 md:pt-20 border-t border-white/5">
          <div className="text-center mb-8 md:mb-12">
            <h3 className="text-[10px] md:text-xs font-black uppercase tracking-[0.3em] md:tracking-[0.4em] text-zinc-500">
              Soluções Avançadas
            </h3>

            <p className="text-zinc-600 text-xs md:text-sm mt-3 max-w-xl mx-auto">
              Para empresas que precisam ir além de um site.
            </p>
          </div>

          {/* --- GRID INFERIOR --- */}
          <div className="grid grid-cols-2 gap-2.5 sm:gap-4 md:gap-8 max-w-4xl mx-auto items-stretch md:items-start">
            {advancedSolutions.map((plan) => (
              <div key={plan.id} className="w-full h-full md:h-auto">
                <PricingCard
                  plan={plan}
                  openWhatsapp={openWhatsapp}
                  isHovered={hoveredBottomPlanId === plan.id}
                  onHoverStart={() => setHoveredBottomPlanId(plan.id)}
                  onHoverEnd={() => setHoveredBottomPlanId(null)}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}