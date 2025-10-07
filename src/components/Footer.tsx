const Footer = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-foreground text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="text-2xl font-extrabold bg-gradient-to-r from-[hsl(var(--vision-blue-light))] to-[hsl(var(--vision-blue))] bg-clip-text text-transparent mb-4">
              Vision NEW
            </div>
            <p className="text-white/70 text-sm leading-relaxed">
              Cuidando da sua visão com a força da natureza e o poder da ciência.
            </p>
          </div>

          <div>
            <h3 className="font-bold mb-4">Links Rápidos</h3>
            <nav className="space-y-2">
              <button
                onClick={() => scrollToSection("inicio")}
                className="block text-white/70 hover:text-white text-sm transition-smooth"
              >
                Início
              </button>
              <button
                onClick={() => scrollToSection("beneficios")}
                className="block text-white/70 hover:text-white text-sm transition-smooth"
              >
                Benefícios
              </button>
              <button
                onClick={() => scrollToSection("comprar")}
                className="block text-white/70 hover:text-white text-sm transition-smooth"
              >
                Comprar
              </button>
            </nav>
          </div>

          <div>
            <h3 className="font-bold mb-4">Informações</h3>
            <p className="text-white/70 text-sm leading-relaxed">
              Vision NEW é um suplemento alimentar. Consulte sempre um profissional de saúde antes de iniciar o uso.
            </p>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center">
          <p className="text-white/50 text-sm">
            © 2025 Vision NEW. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
