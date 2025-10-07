import { Eye, Leaf, Zap, Droplets, Brain, Heart } from "lucide-react";
import { Card } from "@/components/ui/card";

const benefits = [
  {
    icon: Eye,
    title: "Protege sua visão naturalmente",
    description: "Fortalece a retina e reduz o cansaço ocular",
  },
  {
    icon: Leaf,
    title: "100% natural",
    description: "Ingredientes seguros e eficazes",
  },
  {
    icon: Zap,
    title: "Ação rápida e visível",
    description: "Resultados em poucas semanas",
  },
  {
    icon: Droplets,
    title: "Fácil de usar",
    description: "Apenas algumas gotas por dia",
  },
  {
    icon: Brain,
    title: "Mais foco e concentração",
    description: "Benefícios além da visão",
  },
  {
    icon: Heart,
    title: "Aprovado por milhares",
    description: "Suplemento confiável e eficaz",
  },
];

const Benefits = () => {
  return (
    <section id="beneficios" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Por que Vision NEW é diferente?
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <Card
              key={index}
              className="p-6 hover:vision-shadow transition-smooth hover:-translate-y-1 border-border/50 animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-14 h-14 rounded-full bg-accent flex items-center justify-center mb-4">
                <benefit.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-foreground">{benefit.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
