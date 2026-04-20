import { motion } from "framer-motion";

const items = [
  {
    num: "01",
    title: "Você vira a resposta exata",
    text: "No exato segundo em que seu cliente busca uma solução no Google, sua empresa aparece. Sem depender do algoritmo do Instagram, sem dancinhas. Apenas demanda real e quente sendo capturada.",
  },
  {
    num: "02",
    title: "Filtro de Alto Valor",
    text: "Um posicionamento premium não é apenas estética, é um filtro. Ele afasta clientes que buscam apenas o 'mais barato' e atrai aqueles que estão dispostos a pagar pelo melhor serviço da sua região.",
  },
  {
    num: "03",
    title: "A Conversão Silenciosa",
    text: "Enquanto você dorme, foca na gestão ou atende alguém, sua estrutura continua trabalhando. Qualificando acessos e enviando clientes decididos direto para o seu WhatsApp.",
  },
];

const WhyWebsite = () => {
  return (
    <section id="beneficios" className="py-20 md:py-32 relative overflow-hidden bg-white">
      {/* Brilho de fundo sutil - Ajustado para fundo claro */}
      <div className="absolute top-0 right-0 w-[50%] h-[50%] bg-primary/10 blur-[150px] pointer-events-none -z-10" />

      <div className="container-main px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">
          
          {/* Lado Esquerdo - Título Fixo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 lg:sticky lg:top-32"
          >
            <div className="inline-flex items-center gap-2 mb-6">
              <div className="w-8 h-[1px] bg-primary" />
              <span className="text-primary text-xs font-bold tracking-[0.2em] uppercase">
                A Realidade do Mercado
              </span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-6 leading-[1.1] text-black">
              Se você não está no Google, <br />
              <span className="text-zinc-400 font-light italic">
                seu concorrente agradece.
              </span>
            </h2>
            
            <p className="text-base md:text-lg text-zinc-600 leading-relaxed font-light">
              Mais de 90% das decisões de compra começam com uma busca. Ter uma estrutura digital construída pela Elyra é o que separa negócios que sobrevivem de negócios que dominam o mercado.
            </p>
          </motion.div>

          {/* Lado Direito - Tópicos Editoriais */}
          <div className="lg:col-span-7 flex flex-col">
            {items.map((item, index) => (
              <motion.div
                key={item.num}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: index * 0.15 }}
                className="group relative border-t border-zinc-200 py-10 md:py-14 first:border-t-0 lg:first:border-t"
              >
                {/* Linha de Hover (Apenas Desktop) */}
                <div className="absolute top-0 left-0 w-0 h-[1.5px] bg-primary transition-all duration-700 ease-out group-hover:w-full hidden md:block" />

                <div className="flex flex-col md:flex-row gap-6 md:gap-12">
                  {/* Número */}
                  <div className="shrink-0">
                    <span className="text-4xl md:text-5xl font-light text-zinc-300 md:group-hover:text-primary transition-colors duration-500 tabular-nums">
                      {item.num}
                    </span>
                  </div>

                  {/* Conteúdo */}
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-black mb-4 md:group-hover:translate-x-2 transition-transform duration-500 ease-out">
                      {item.title}
                    </h3>
                    <p className="text-base md:text-lg text-zinc-600 leading-relaxed font-light">
                      {item.text}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
            
            <div className="border-t border-zinc-200 w-full" />
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyWebsite;