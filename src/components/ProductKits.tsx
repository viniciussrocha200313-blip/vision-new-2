import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import vision1Bottle from "@/assets/vision-1-bottle.png";
import vision3Bottles from "@/assets/vision-3-bottles.png";
import vision5Bottles from "@/assets/vision-5-bottles.png";

const kits = [
  {
    image: vision1Bottle,
    title: "Kit 1 Frasco",
    subtitle: "Início do Tratamento",
    description: "Ideal para experimentar os benefícios do Vision NEW",
    badge: null,
  },
  {
    image: vision3Bottles,
    title: "Kit 3 Frascos",
    subtitle: "Tratamento Completo",
    description: "A escolha mais popular para resultados consistentes",
    badge: "Mais Vendido",
  },
  {
    image: vision5Bottles,
    title: "Kit 5 Frascos",
    subtitle: "Resultados Máximos",
    description: "O melhor custo-benefício para um tratamento prolongado",
    badge: "Melhor Oferta",
  },
];

const ProductKits = () => {
  return (
    <section id="comprar" className="py-20 bg-primary/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Escolha seu kit Vision NEW
          </h2>
          <p className="text-lg text-muted-foreground">
            Invista na saúde dos seus olhos com segurança e qualidade
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {kits.map((kit, index) => (
            <Card
              key={index}
              className="overflow-hidden hover:vision-shadow-lg transition-smooth hover:-translate-y-2 animate-scale-in relative"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {kit.badge && (
                <Badge className="absolute top-4 right-4 z-10 bg-[hsl(var(--vision-gold))] text-foreground font-bold px-3 py-1">
                  {kit.badge}
                </Badge>
              )}
              
              <div className="bg-gradient-to-br from-accent/30 to-accent/10 p-8 flex justify-center">
                <img
                  src={kit.image}
                  alt={kit.title}
                  className="w-full max-w-[200px] h-auto drop-shadow-xl hover:scale-110 transition-smooth"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-bold text-foreground mb-2">{kit.title}</h3>
                <p className="text-primary font-semibold mb-3">{kit.subtitle}</p>
                <p className="text-muted-foreground mb-6 leading-relaxed">{kit.description}</p>
                
                <Button
                  className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-6 rounded-full transition-smooth hover:scale-105"
                  size="lg"
                >
                  Comprar Agora
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductKits;
