import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import vision1Bottle from "@/assets/vision-1-bottle.png";

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

        <div className="max-w-3xl mx-auto">
          <Card className="overflow-hidden hover:vision-shadow-lg transition-smooth hover:-translate-y-2 animate-scale-in">
            <div className="bg-gradient-to-br from-accent/30 to-accent/10 p-8 flex justify-center">
              <img
                src={vision1Bottle}
                alt="Tratamento de 1 mês Vision NEW"
                className="w-full max-w-[220px] h-auto drop-shadow-xl hover:scale-110 transition-smooth"
              />
            </div>

            <div className="p-8">
              <p className="uppercase tracking-[0.3em] text-xs font-semibold text-primary mb-3">
                Tratamento de 1 mês
              </p>
              <h3 className="text-3xl font-bold text-foreground mb-4">Plano Essencial</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Perfeito para iniciar seu cuidado ocular. Um frasco garante 30 dias de uso contínuo,
                desenvolvendo o hábito diário e permitindo sentir os primeiros resultados.
              </p>

              <ul className="space-y-3 mb-8 text-sm text-foreground/80">
                <li>• 1 frasco Vision NEW (30 doses)</li>
                <li>• Indicado para o primeiro ciclo de tratamento</li>
                <li>• Garantia de satisfação e suporte dedicado</li>
              </ul>

              <Button
                className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-6 rounded-full transition-smooth hover:scale-105"
                size="lg"
                asChild
              >
                <a
                  href="https://ev.braip.com/checkout/plawojdw/chemxvdk"
                  target="_blank"
                  rel="noreferrer"
                >
                  Comprar Agora
                </a>
              </Button>

              <p className="mt-4 text-center text-sm text-muted-foreground">
                Envio rápido para todo o Brasil com rastreio incluso.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ProductKits;
