import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import heroVideo from "@/assets/hero-mockup1.mp4"; // seu MP4

const FinalCTA = () => {
  return (
    <section
      id="contato"
      className="section-spacing min-h-screen flex flex-col items-center relative overflow-hidden"
    >
      <div className="container-main md:max-w-3xl relative z-10">

        {/* fluxo azul */}
        <motion.div
          className="absolute inset-0 -z-10 blur-3xl opacity-40"
          animate={{
            background: [
              "radial-gradient(circle at 20% 40%, #60a5fa, transparent 60%)",
              "radial-gradient(circle at 80% 60%, #60a5fa, transparent 60%)",
              "radial-gradient(circle at 30% 70%, #60a5fa, transparent 60%)",
              "radial-gradient(circle at 20% 40%, #60a5fa, transparent 60%)"
            ]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear"
          }}
        />

        {/* Caixa principal */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="glass-card text-center p-8 md:p-10 relative -mt-16 sm:-mt-20"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Seu negócio merece um site profissional.
          </h2>

          <p className="text-muted-foreground text-lg mb-10 leading-relaxed">
            Comece hoje mesmo e tenha seu site pronto em poucos dias.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button variant="hero" size="lg">
              Criar meu site
            </Button>

            <Button variant="hero-secondary" size="lg">
              <MessageCircle className="h-5 w-5" />
              Falar no WhatsApp
            </Button>
          </div>
        </motion.div>

        {/* Aba de vídeo abaixo da caixa */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="w-full mt-10 sm:mt-16 flex justify-center"
        >
          <video
            src={heroVideo}
            autoPlay
            loop
            muted
            playsInline
            className="w-full max-w-3xl rounded-xl shadow-lg"
          />
        </motion.div>

      </div>
    </section>
  );
};

export default FinalCTA;