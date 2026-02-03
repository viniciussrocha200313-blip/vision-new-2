const Support = () => {
  return (
    <section id="suporte" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="uppercase tracking-[0.3em] text-xs font-semibold text-primary mb-3">
            Suporte e Envio
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Estamos sempre ao seu lado
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Tire suas dúvidas sobre o Vision NEW, confirme seu pedido ou acompanhe sua entrega
            com a nossa equipe especializada.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="p-8 rounded-3xl border border-primary/10 bg-primary/5 shadow-sm">
            <h3 className="text-xl font-semibold text-foreground mb-2">Canal de suporte</h3>
            <p className="text-muted-foreground mb-4">
              Fale diretamente com a equipe Vision NEW e receba orientação completa durante o seu tratamento.
            </p>
            <a
              href="mailto:equipenutra1@gmail.com"
              className="inline-block font-semibold text-primary hover:text-primary/80 transition-smooth"
            >
              equipenutra1@gmail.com
            </a>
          </div>

          <div className="p-8 rounded-3xl border border-primary/10 bg-accent/5 shadow-sm">
            <h3 className="text-xl font-semibold text-foreground mb-2">Informações de envio</h3>
            <p className="text-muted-foreground">
              Todos os pedidos são despachados via <strong>PAC dos Correios</strong>, com rastreamento
              atualizado e prazo médio conforme a sua região.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Support;

