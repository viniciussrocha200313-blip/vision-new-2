import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-smooth ${
        scrolled ? "bg-white/95 backdrop-blur-md shadow-md" : "bg-white/80 backdrop-blur-sm"
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="text-2xl font-extrabold bg-gradient-to-r from-[hsl(var(--vision-blue-light))] to-[hsl(var(--vision-blue))] bg-clip-text text-transparent">
            Vision NEW
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-6">
          <button
            onClick={() => scrollToSection("inicio")}
            className="text-sm font-medium hover:text-primary transition-smooth"
          >
            Início
          </button>
          <button
            onClick={() => scrollToSection("beneficios")}
            className="text-sm font-medium hover:text-primary transition-smooth"
          >
            Benefícios
          </button>
          <button
            onClick={() => scrollToSection("composicao")}
            className="text-sm font-medium hover:text-primary transition-smooth"
          >
            Composição
          </button>
          <button
            onClick={() => scrollToSection("depoimentos")}
            className="text-sm font-medium hover:text-primary transition-smooth"
          >
            Depoimentos
          </button>
          <button
            onClick={() => scrollToSection("comprar")}
            className="text-sm font-medium hover:text-primary transition-smooth"
          >
            Comprar
          </button>
          <button
            onClick={() => scrollToSection("suporte")}
            className="text-sm font-medium hover:text-primary transition-smooth"
          >
            Suporte
          </button>
        </nav>

        <Button
          onClick={() => scrollToSection("comprar")}
          className="bg-primary hover:bg-primary/90 text-white font-semibold px-6 py-2 rounded-full transition-smooth vision-shadow"
        >
          COMPRAR AGORA
        </Button>
      </div>
    </header>
  );
};

export default Header;
