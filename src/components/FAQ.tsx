import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "O que é Vision NEW?",
    answer: "Vision NEW é um suplemento alimentar em gotas com fórmula 100% natural desenvolvida para promover a saúde ocular, melhorar a nitidez visual e proteger seus olhos contra o envelhecimento.",
  },
  {
    question: "Como devo usar o Vision NEW?",
    answer: "Agite o frasco antes de usar. Pingue 10 gotas em 200ml de água e tome 2 vezes ao dia, preferencialmente pela manhã e à noite.",
  },
  {
    question: "Em quanto tempo verei resultados?",
    answer: "Os primeiros resultados podem ser percebidos em 15 a 30 dias de uso regular. Para resultados ótimos, recomendamos o uso contínuo por pelo menos 90 dias.",
  },
  {
    question: "Vision NEW é aprovado pela ANVISA?",
    answer: "Sim! Vision NEW é aprovado pela ANVISA como suplemento alimentar, garantindo segurança e qualidade.",
  },
  {
    question: "Tem contraindicações?",
    answer: "Vision NEW é feito com ingredientes naturais. No entanto, gestantes, lactantes e pessoas com condições médicas específicas devem consultar um profissional de saúde antes de iniciar o uso.",
  },
];

const FAQ = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Perguntas Frequentes
          </h2>
          <p className="text-lg text-muted-foreground">
            Tire suas dúvidas sobre o Vision NEW
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-white rounded-lg px-6 border-border/50 animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <AccordionTrigger className="text-left font-bold text-foreground hover:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
