import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Benefits from "@/components/Benefits";
import ProductHighlight from "@/components/ProductHighlight";
import Composition from "@/components/Composition";
import HowToUse from "@/components/HowToUse";
import Testimonials from "@/components/Testimonials";
import ProductKits from "@/components/ProductKits";
import Guarantee from "@/components/Guarantee";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Benefits />
      <ProductHighlight />
      <Composition />
      <HowToUse />
      <Testimonials />
      <ProductKits />
      <Guarantee />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Index;
