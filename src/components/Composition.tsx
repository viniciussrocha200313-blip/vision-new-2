import vision3Bottles from "@/assets/vision-3-bottles.png";
import { Check } from "lucide-react";

const ingredients = [
  {
    name: "Luteína",
    benefit: "Protege a retina contra danos oxidativos",
  },
  {
    name: "Zeaxantina",
    benefit: "Melhora nitidez e brilho da visão",
  },
  {
    name: "Vitamina A",
    benefit: "Essencial para a saúde visual",
  },
  {
    name: "Vitamina E",
    benefit: "Poderoso antioxidante",
  },
  {
    name: "Óleo de semente de uva",
    benefit: "Combate o envelhecimento ocular",
  },
];

const Composition = () => {
  return (
    <section id="composicao" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center order-2 md:order-1 animate-scale-in">
            <img
              src={vision3Bottles}
              alt="Vision NEW - Composição natural"
              className="w-full max-w-lg drop-shadow-2xl hover:scale-105 transition-smooth"
            />
          </div>

          <div className="order-1 md:order-2 animate-fade-in">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Fórmula exclusiva com ativos que cuidam da sua visão
            </h2>
            
            <div className="space-y-4 mb-8">
              {ingredients.map((ingredient, index) => (
                <div key={index} className="flex gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                    <Check className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground">{ingredient.name}</h3>
                    <p className="text-muted-foreground">{ingredient.benefit}</p>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-lg font-semibold text-primary">
              Vision NEW combina ciência e natureza para cuidar da sua visão de dentro para fora.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Composition;
