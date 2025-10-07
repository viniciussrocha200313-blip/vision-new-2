import { Package, Droplets, Clock } from "lucide-react";
import { Card } from "@/components/ui/card";

const steps = [
  {
    icon: Package,
    number: "1",
    title: "Agite antes de usar",
    description: "Garanta que todos os ingredientes estejam bem misturados",
  },
  {
    icon: Droplets,
    number: "2",
    title: "Pingue 10 gotas em 200ml de água",
    description: "Misture bem para uma melhor absorção",
  },
  {
    icon: Clock,
    number: "3",
    title: "Tome 2x por dia",
    description: "Uma dose pela manhã e outra à noite",
  },
];

const HowToUse = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Como usar Vision NEW
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Simples, rápido e eficaz — resultados reais com apenas alguns segundos por dia
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <Card
              key={index}
              className="p-8 text-center hover:vision-shadow transition-smooth hover:-translate-y-1 animate-slide-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="relative mb-6 inline-block">
                <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                  <step.icon className="w-10 h-10 text-primary" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white font-bold text-sm">
                  {step.number}
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3 text-foreground">{step.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{step.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowToUse;
