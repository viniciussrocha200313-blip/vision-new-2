import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Maria Silva",
    location: "São Paulo, SP",
    text: "Minha visão ficou mais nítida em apenas 15 dias de uso. Estou muito satisfeita com os resultados!",
    rating: 5,
  },
  {
    name: "João Pedro",
    location: "Rio de Janeiro, RJ",
    text: "Produto natural e realmente eficaz. Recomendo para todos que buscam cuidar da saúde ocular.",
    rating: 5,
  },
  {
    name: "Ana Lucia",
    location: "Belo Horizonte, MG",
    text: "Melhorei significativamente minha visão noturna. Não tenho mais tanto cansaço nos olhos.",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section id="depoimentos" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Resultados que falam por si
          </h2>
          <p className="text-lg text-muted-foreground">
            Veja o que nossos clientes estão dizendo sobre Vision NEW
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="p-8 hover:vision-shadow transition-smooth hover:-translate-y-1 animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[hsl(var(--vision-gold))] text-[hsl(var(--vision-gold))]" />
                ))}
              </div>
              <p className="text-foreground mb-6 leading-relaxed italic">"{testimonial.text}"</p>
              <div className="border-t pt-4">
                <p className="font-bold text-foreground">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.location}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
