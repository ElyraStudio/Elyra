import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check, ArrowRight, Sparkles } from "lucide-react";
import heroMockup from "@/assets/hero-mockup.png";

const benefits = [
  "Topo do Google: onde o lucro acontece",
  "Pare de ser invisível para seus clientes",
  "Transforme acessos em WhatsApp",
  "Estrutura completa focada em vendas",
];

const Hero = () => {
  const handleExamples = () => {
    document.getElementById("exemplos")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  const handleWhatsApp = () => {
    window.open(
      "https://wa.me/5551996747657?text=Olá,%20quero%20atrair%20mais%20clientes%20com%20a%20Elyra",
      "_blank"
    );
  };

  return (
    <section className="relative min-h-screen flex items-center pt-[100px] md:pt-[120px] pb-12 overflow-hidden bg-white z-10">

      {/* Background */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-0 left-[-10%] w-[60%] h-[40%] bg-primary/10 blur-[80px] rounded-full opacity-60" />

        <div className="absolute bottom-0 right-[-10%] w-[50%] h-[30%] bg-primary/5 blur-[70px] rounded-full opacity-60" />
      </div>

      <div className="container-main px-6 sm:px-8">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-10 lg:gap-8 items-center">

          {/* TEXTO */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="text-center lg:text-left order-1"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] md:text-xs font-bold tracking-[0.15em] uppercase mb-6"
            >
              <Sparkles className="w-3 h-3" />
              Presença Digital de Elite
            </motion.div>

            <h1 className="text-[36px] leading-[1.1] sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter mb-6 text-black">
              Sua empresa no topo, <br />

              <span className="text-primary italic font-light">
                onde os clientes estão.
              </span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-zinc-600 max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed font-light">
              Construímos ferramentas de vendas que posicionam seu negócio
              como autoridade máxima no Google. Pare de tentar vender,{" "}
              <span className="font-semibold text-black">
                comece a ser procurado.
              </span>
            </p>

            {/* BENEFÍCIOS */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3 mb-10 text-left max-w-sm mx-auto lg:mx-0">
              {benefits.map((b) => (
                <div
                  key={b}
                  className="flex items-center gap-3"
                >
                  <div className="h-5 w-5 rounded-full bg-primary flex items-center justify-center shrink-0">
                    <Check className="h-3 w-3 text-black" />
                  </div>

                  <span className="text-sm md:text-base font-bold text-zinc-800">
                    {b}
                  </span>
                </div>
              ))}
            </div>

            {/* AÇÕES */}
            <div className="flex flex-col sm:flex-row gap-4 sm:justify-center lg:justify-start">
              <Button
                className="h-16 px-10 text-xs uppercase tracking-widest font-black bg-black text-white hover:bg-zinc-800 transition-all w-full sm:w-auto rounded-2xl shadow-xl"
                onClick={handleWhatsApp}
              >
                Quero atrair clientes

                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>

              <Button
                variant="outline"
                className="h-16 px-10 text-xs uppercase tracking-widest font-black border-zinc-200 bg-white text-black hover:bg-zinc-50 w-full sm:w-auto rounded-2xl"
                onClick={handleExamples}
              >
                Ver Portfólio
              </Button>
            </div>
          </motion.div>

          {/* MOCKUP */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.7,
              delay: 0.15,
            }}
            className="relative flex justify-center lg:justify-end order-2"
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary/20 rounded-full blur-[70px] -z-10" />

            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative w-[90%] sm:w-[75%] lg:w-full"
            >
              <img
                src={heroMockup}
                alt="Exemplo de site desenvolvido pela Elyra"
                fetchPriority="high"
                decoding="async"
                className="w-full h-auto drop-shadow-[0_30px_60px_rgba(0,0,0,0.2)]"
              />
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;