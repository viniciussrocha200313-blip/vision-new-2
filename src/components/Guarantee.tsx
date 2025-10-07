import { Lock, Truck, DollarSign } from "lucide-react";

const guarantees = [
  {
    icon: Lock,
    title: "Compra 100% segura",
    description: "Seus dados protegidos",
  },
  {
    icon: Truck,
    title: "Entrega rápida",
    description: "Para todo o Brasil",
  },
  {
    icon: DollarSign,
    title: "Satisfação garantida",
    description: "Ou seu dinheiro de volta",
  },
];

const Guarantee = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {guarantees.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <item.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">{item.title}</h3>
              <p className="text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Guarantee;
