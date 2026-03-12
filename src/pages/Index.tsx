import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WhyWebsite from "@/components/WhyWebsite";
import WhyElyra from "@/components/WhyElyra";
import HowItWorks from "@/components/HowItWorks";
import Portfolio from "@/components/Portfolio";
import Pricing from "@/components/Pricing";
import About from "@/components/About";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import IceMountainBg from "@/components/IceMountainBg";
import SnowParticles from "@/components/SnowParticles";

const Index = () => {
  return (
    <>
      <IceMountainBg />
      <SnowParticles />
      <Navbar />
      <main>
        <Hero />
        <WhyWebsite />
        <WhyElyra />
        <HowItWorks />
        <Portfolio />
        <Pricing />
        <About />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
};

export default Index;
