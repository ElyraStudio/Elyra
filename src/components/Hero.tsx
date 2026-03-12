import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import heroMockup from "@/assets/hero-mockup.png";

const benefits = [
  "Site profissional pronto em poucos dias",
  "Funciona perfeitamente no celular",
  "Pagamento mensal acessível",
  "Suporte e atualizações incluídos",
];

const Hero = () => {
  return (
    <section className="min-h-svh flex items-center pt-24 pb-16">
      <div className="container-main">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-[1.1] mb-6">
              Tenha um site profissional para seu negócio por menos de um jantar por mês.
            </h1>
            <p className="text-lg text-muted-foreground max-w-[540px] mb-8 leading-relaxed">
              Com a Elyra, você tem um site moderno, rápido e otimizado para atrair clientes — sem precisar pagar milhares de reais por desenvolvimento.
            </p>
            <ul className="space-y-3 mb-10">
              {benefits.map((b) => (
                <li key={b} className="flex items-center gap-3 text-foreground">
                  <Check className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-sm">{b}</span>
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-4">
              <Button variant="hero" size="lg">
                Quero meu site agora
              </Button>
              <Button variant="hero-secondary" size="lg">
                Ver exemplos
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
            className="flex justify-center lg:justify-end"
          >
            <img
              src={heroMockup}
              alt="Exemplo de site profissional em notebook e celular"
              className="w-full max-w-lg"
              loading="eager"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
