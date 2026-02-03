import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import vision1Bottle from "@/assets/vision-1-bottle.png";
import vision3Bottles from "@/assets/vision-3-bottles.png";

const ProductKits = () => {
  const kits = [
    {
      id: "essential",
      name: "Plano Essencial",
      treatment: "Tratamento de 1 mês",
      description: "Perfeito para iniciar seu cuidado ocular. Um frasco garante 30 dias de uso contínuo, permitindo sentir os primeiros resultados.",
      price: "199,90",
      image: vision1Bottle,
      link: "https://ev.braip.com/checkout/plaj91wr/cherkv8n",
      features: [
        "1 frasco Vision NEW (30 doses)",
        "Primeiro ciclo de tratamento",
        "Garantia de satisfação"
      ]
    },
    {
      id: "recommended",
      name: "Plano Recomendado",
      treatment: "Tratamento de 2 meses",
      description: "O equilíbrio ideal para quem busca resultados sólidos. Dois frascos garantem a continuidade necessária para a regeneração ocular.",
      price: "300,00",
      image: vision3Bottles,
      link: "https://ev.braip.com/checkout/planjqrz/cherkv8n",
      features: [
        "2 frascos Vision NEW (60 doses)",
        "Tratamento intermediário",
        "Suporte prioritário"
      ],
      popular: true
    }
  ];

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

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {kits.map((kit) => (
            <Card key={kit.id} className={`flex flex-col overflow-hidden hover:vision-shadow-lg transition-smooth hover:-translate-y-2 animate-scale-in relative ${kit.popular ? 'border-primary ring-1 ring-primary' : ''}`}>
              {kit.popular && (
                <div className="absolute top-4 right-4 bg-primary text-white text-[10px] font-bold px-3 py-1 rounded-full z-10">
                  MAIS VENDIDO
                </div>
              )}
              
              <div className="bg-gradient-to-br from-accent/30 to-accent/10 p-8 flex justify-center">
                <img
                  src={kit.image}
                  alt={kit.name}
                  className="w-full max-w-[200px] h-[200px] object-contain drop-shadow-xl hover:scale-110 transition-smooth"
                />
              </div>

              <div className="p-8 flex-1 flex flex-col">
                <p className="uppercase tracking-[0.3em] text-xs font-semibold text-primary mb-3">
                  {kit.treatment}
                </p>
                <div className="mb-4">
                  <h3 className="text-2xl font-bold text-foreground">{kit.name}</h3>
                  <div className="flex items-baseline gap-1 mt-2">
                    <span className="text-sm font-semibold text-muted-foreground">R$</span>
                    <span className="text-4xl font-extrabold text-foreground">{kit.price}</span>
                  </div>
                </div>
                
                <p className="text-muted-foreground mb-6 leading-relaxed flex-1">
                  {kit.description}
                </p>

                <ul className="space-y-3 mb-8 text-sm text-foreground/80">
                  {kit.features.map((feature, index) => (
                    <li key={index}>• {feature}</li>
                  ))}
                </ul>

                <Button
                  className={`w-full font-bold py-6 rounded-full transition-smooth hover:scale-105 ${kit.popular ? 'bg-primary hover:bg-primary/95' : 'bg-primary/90 hover:bg-primary'}`}
                  size="lg"
                  asChild
                >
                  <a
                    href={kit.link}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Comprar Agora
                  </a>
                </Button>

                <p className="mt-4 text-center text-[10px] text-muted-foreground">
                  Garantia blindada de 90 dias inclusa.
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductKits;
