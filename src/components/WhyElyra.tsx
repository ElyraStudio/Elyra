import { motion } from "framer-motion";
import { Monitor, Zap, TrendingUp, Headphones, ArrowUpRight } from "lucide-react";

const features = [
  {
    icon: Monitor,
    title: "Design de Impacto",
    text: "Não entregamos apenas beleza, mas autoridade. Seu negócio ganha uma vitrine que transmite confiança imediata.",
    size: "lg:col-span-2",
    color: "from-blue-500/20",
  },
  {
    icon: Zap,
    title: "Velocidade",
    text: "Estrutura pronta em tempo recorde para você não perder clientes.",
    size: "lg:col-span-1",
    color: "from-amber-500/20",
  },
  {
    icon: TrendingUp,
    title: "Foco em ROI",
    text: "Tudo é desenhado para um único objetivo: transformar visitantes em dinheiro no seu caixa via WhatsApp.",
    size: "lg:col-span-1",
    color: "from-emerald-500/20",
  },
  {
    icon: Headphones,
    title: "Suporte VIP",
    text: "Esqueça o 'falar com o robô'. Na Elyra você foca no seu lucro enquanto nós cuidamos de toda a tecnologia.",
    size: "lg:col-span-2",
    color: "from-purple-500/20",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.8, 
      ease: [0.16, 1, 0.3, 1] as const // O "as const" resolve o erro
    } 
  },
};
const WhyElyra = () => (
  <section className="py-24 md:py-32 bg-black relative overflow-hidden">
    {/* Efeito de luz ambiente no fundo */}
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(var(--primary-rgb),0.03),transparent_70%)] pointer-events-none" />

    <div className="container-main px-6">
      
      {/* HEADER DA SEÇÃO */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-3xl mb-16 md:mb-24"
      >
        <h2 className="text-sm font-black uppercase tracking-[0.3em] text-primary mb-4">
          O Padrão Elyra
        </h2>
        <h3 className="text-4xl md:text-6xl font-extrabold text-white tracking-tighter leading-none mb-8">
          Engenharia digital <br /> 
          <span className="text-white/40 font-light italic">feita para converter.</span>
        </h3>
        <p className="text-lg md:text-xl text-zinc-400 max-w-xl font-light">
          A Elyra não é uma fábrica de sites. Somos o braço tecnológico de negócios locais que decidiram dominar o mercado digital.
        </p>
      </motion.div>

      {/* BENTO GRID */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid grid-cols-1 lg:grid-cols-3 gap-4"
      >
        {features.map((f, i) => (
          <motion.div
            key={f.title}
            variants={item}
            className={`group relative overflow-hidden rounded-[32px] border border-white/5 bg-zinc-950 p-8 md:p-10 transition-all duration-500 hover:border-white/20 ${f.size}`}
          >
            {/* Gradiente Interno Sutil no Hover */}
            <div className={`absolute inset-0 bg-gradient-to-br ${f.color} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />

            <div className="relative z-10 h-full flex flex-col">
              <div className="flex justify-between items-start mb-12">
                <div className="h-12 w-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:scale-110 group-hover:bg-primary group-hover:text-black transition-all duration-500">
                  <f.icon className="h-6 w-6" />
                </div>
                <ArrowUpRight className="h-5 w-5 text-white/20 group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
              </div>

              <div className="mt-auto">
                <h4 className="text-2xl font-bold text-white mb-4 tracking-tight">
                  {f.title}
                </h4>
                <p className="text-zinc-400 text-base md:text-lg leading-relaxed font-light">
                  {f.text}
                </p>
              </div>
            </div>

            {/* Linha de brilho inferior (Border Beam) */}
            <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-primary/40 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
          </motion.div>
        ))}
      </motion.div>

    </div>
  </section>
);

export default WhyElyra;