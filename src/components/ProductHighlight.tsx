import vision5Bottles from "@/assets/vision-5-bottles.png";

const ProductHighlight = () => {
  return (
    <section className="py-20 bg-accent/30">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center animate-scale-in">
            <img
              src={vision5Bottles}
              alt="Vision NEW - Kits de tratamento completo"
              className="w-full max-w-2xl drop-shadow-2xl hover:scale-105 transition-smooth"
            />
          </div>

          <div className="text-center md:text-left animate-fade-in">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
              Cada gota foi pensada para proteger, nutrir e restaurar sua visão de forma natural.
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Com uma fórmula exclusiva e cientificamente desenvolvida, Vision NEW oferece o cuidado que seus olhos merecem.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductHighlight;
