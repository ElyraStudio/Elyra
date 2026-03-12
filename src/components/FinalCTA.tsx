import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

const FinalCTA = () => {
  return (
    <section id="contato" className="section-spacing">
      <div className="container-main max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
          className="glass-card text-center"
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
      </div>
    </section>
  );
};

export default FinalCTA;
