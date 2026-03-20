import React from "react";

const Features = () => {
  const cards = [
    {
      title: "Fluxo de Caixa",
      desc: "Veja seu fluxo de caixa atualizado automaticamente. Sem planilhas, sem cálculos manuais.",
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
          <line x1="8" y1="21" x2="16" y2="21" />
          <line x1="12" y1="17" x2="12" y2="21" />
        </svg>
      ),
    },
    {
      title: "Cálculo de Impostos (DAS)",
      desc: "Cálculo de DAS, IR e contribuições feito automaticamente. Sempre em dia com o fisco.",
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <polyline points="14 2 14 8 20 8" />
          <line x1="16" y1="13" x2="8" y2="13" />
          <line x1="16" y1="17" x2="8" y2="17" />
          <polyline points="10 9 9 9 8 9" />
        </svg>
      ),
    },
    {
      title: "Previsão de Burn Rate",
      desc: "Saiba exatamente quanto seu caixa dura. Projeções inteligentes baseadas no seu histórico de gastos.",
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
        </svg>
      ),
    },
  ];

  return (
    <section className="bg-white py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-black mb-4 font-['Space_Grotesk']">
            Gestão inteligente.
            <span className="text-zinc-400"> Em um só lugar.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {cards.map((card, index) => {
            <div
              key={index}
              className="p-10 rounded-b-3xl border border-zinc-100 bg-[#fafafa] hover:border-zinc-200 transition-all group "
            >
              <div className="text-black mb-6 group-hover:scale-110 transition-transform duration-300">
                {card.icon}
              </div>

              <h3 className="text-xl font-bold text-black mb-3">
                {card.title}
              </h3>
              <p className="text-zinc-500 leading-relaxed text-sm">
                {card.desc}
              </p>
            </div>;
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
