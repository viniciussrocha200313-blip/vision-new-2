import { Button } from "@/components/ui/button";
import { Check, Shield, Leaf, Lock } from "lucide-react";
import visionBottle from "@/assets/vision-1-bottle.png";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="inicio" className="pt-32 pb-20 vision-gradient relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(255,255,255,0.3)_0%,_transparent_50%)]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight">
              Enxergue a vida com mais nitidez e conforto com Vision NEW
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed">
              Suplemento alimentar em gotas com fórmula natural para saúde ocular, foco e bem-estar visual.
            </p>
            
            <Button
              onClick={() => scrollToSection("comprar")}
              size="lg"
              className="bg-white text-primary hover:bg-white/95 font-bold text-lg px-8 py-6 rounded-full vision-shadow-lg transition-smooth hover:scale-105 mb-8"
            >
              QUERO EXPERIMENTAR AGORA
            </Button>

            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                <Check className="w-5 h-5 text-white" />
                <span className="text-white text-sm font-medium">Aprovado pela ANVISA</span>
              </div>
              <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                <Leaf className="w-5 h-5 text-white" />
                <span className="text-white text-sm font-medium">100% Natural</span>
              </div>
              <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                <Lock className="w-5 h-5 text-white" />
                <span className="text-white text-sm font-medium">Compra Segura</span>
              </div>
            </div>
          </div>

          <div className="flex justify-center animate-scale-in">
            <img
              src={visionBottle}
              alt="Vision NEW 30ml - Suplemento para Saúde Ocular"
              className="w-full max-w-md drop-shadow-2xl hover:scale-105 transition-smooth"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
