import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MessageCircle, ArrowRight } from "lucide-react";
import heroVideo from "@/assets/hero-mockup1.mp4";

const FinalCTA = () => {
  const handlePlanos = () => {
    document.getElementById("planos")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="contato"
      className="py-24 md:py-32 bg-black min-h-screen flex flex-col items-center relative overflow-hidden"
    >
      <div className="container-main px-6 relative z-10">
        
        {/* Fluxo Dourado Animado (Substituindo o azul) */}
        <motion.div
          className="absolute inset-0 -z-10 blur-[120px] opacity-30"
          animate={{
            background: [
              "radial-gradient(circle at 20% 40%, #EAB308, transparent 50%)",
              "radial-gradient(circle at 80% 60%, #EAB308, transparent 50%)",
              "radial-gradient(circle at 30% 70%, #EAB308, transparent 50%)",
              "radial-gradient(circle at 20% 40%, #EAB308, transparent 50%)"
            ]
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* Caixa Principal de Conversão */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative text-center max-w-4xl mx-auto"
        >
          <h2 className="text-4xl md:text-7xl font-extrabold text-white tracking-tighter mb-8">
            Pronto para ser a <br />
            <span className="text-primary italic font-light">próxima autoridade</span> do seu nicho?
          </h2>

          <p className="text-zinc-400 text-lg md:text-xl mb-12 leading-relaxed max-w-2xl mx-auto font-light">
            Não deixe sua presença digital ao acaso. Estruturamos o caminho para você dominar as buscas e converter curiosos em clientes fiéis.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-6 mb-20">
            {/* Botão Planos */}
            <Button
              onClick={handlePlanos}
              className="h-16 px-10 rounded-2xl bg-white text-black hover:bg-zinc-200 font-black uppercase tracking-widest text-xs transition-all duration-300"
            >
              Ver planos e preços
            </Button>

            {/* Botão WhatsApp */}
            <a
              href="https://wa.me/5551996747657?text=Olá,%20vim%20pelo%20site%20da%20Elyra%20e%20quero%20atrair%20mais%20clientes"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <Button 
                variant="outline" 
                className="h-16 px-10 rounded-2xl border-white/10 bg-white/5 text-white hover:bg-white/10 font-black uppercase tracking-widest text-xs gap-3 transition-all duration-300"
              >
                <MessageCircle className="h-5 w-5 text-primary" />
                Falar com consultor
              </Button>
            </a>
          </div>
        </motion.div>

        {/* Showcase de Produto (Mockup em Vídeo) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative max-w-5xl mx-auto"
        >
          {/* Efeito de brilho atrás do vídeo */}
          <div className="absolute inset-0 bg-primary/10 blur-[100px] -z-10 rounded-full" />
          
          <div className="relative p-2 rounded-[32px] border border-white/10 bg-zinc-900/50 backdrop-blur-3xl shadow-2xl">
            <video
              src={heroVideo}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-auto rounded-[24px] shadow-2xl grayscale-[0.2] hover:grayscale-0 transition-all duration-1000"
            />
            
            {/* Badge flutuante sobre o vídeo */}
            <div className="absolute -bottom-6 -right-6 md:right-12 bg-zinc-950 border border-white/10 p-6 rounded-2xl shadow-2xl hidden sm:block">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                  <ArrowRight className="text-primary h-6 w-6" />
                </div>
                <div className="text-left">
                  <p className="text-[10px] text-zinc-500 uppercase font-black tracking-[0.2em]">Status do Projeto</p>
                  <p className="text-white font-bold">Pronto para escala</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Rodapé sutil de copyright */}
        <div className="mt-32 text-center border-t border-white/5 pt-12">
          <p className="text-zinc-600 text-[10px] uppercase tracking-[0.5em] font-medium">
            © 2026 Elyra Digital • Crafted for Excellence
          </p>
        </div>

      </div>
    </section>
  );
};

export default FinalCTA;