import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import heroMockup from "@/assets/hero-mockup.png";

const benefits = [
  "Site profissional pronto em poucos dias",
  "Funciona perfeitamente no celular",
  "Alugue ou compre — você escolhe",
  "Suporte e atualizações incluídos",
];

const Hero = () => {
  const handleExamples = () => {
    document
      .getElementById("exemplos")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  const handleWhatsApp = () => {
    window.open(
      "https://wa.me/5551996747657?text=Olá,%20quero%20criar%20um%20site%20com%20a%20Elyra",
      "_blank"
    );
  };

  return (
    <section className="min-h-[90vh] flex items-center pt-16 sm:pt-20 pb-12 sm:pb-16">
      <div className="container-main px-4 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-12 lg:gap-16 items-center">

          {/* Texto Hero */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <h1 className="mt-3 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-snug sm:leading-tight mb-5 sm:mb-6">
              Seu negócio merece um site profissional.
            </h1>

            <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-full sm:max-w-md mb-6 sm:mb-8 leading-relaxed">
              Com a Elyra, você tem um site moderno, rápido e otimizado para atrair clientes — alugue por uma mensalidade acessível ou compre de uma vez.
            </p>

            <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-10">
              {benefits.map((b) => (
                <li key={b} className="flex items-start gap-3 text-foreground">
                  <Check className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                  <span className="text-sm sm:text-base">{b}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Button
                variant="hero"
                size="lg"
                className="w-full sm:w-auto"
                onClick={handleWhatsApp}
              >
                Quero meu site agora
              </Button>

              <Button
                variant="hero-secondary"
                size="lg"
                className="w-full sm:w-auto"
                onClick={handleExamples}
              >
                Ver exemplos
              </Button>
            </div>
          </motion.div>

          {/* Imagem Hero flutuante sem borda */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
            className="flex justify-center md:justify-end mt-8 md:mt-0"
          >
            <motion.img
              src={heroMockup}
              alt="Exemplo de site profissional em notebook e celular"
              className="w-full max-w-sm sm:max-w-md lg:max-w-lg"
              loading="eager"
              animate={{ y: [0, -10, 0] }}  // flutuação
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;