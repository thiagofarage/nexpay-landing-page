const principles = [
  { id: "clareza", number: "01", title: "Clareza no essencial.", description: "Informações organizadas para entender o que acontece com o dinheiro da empresa." },
  { id: "contexto", number: "02", title: "Contexto para decidir.", description: "Uma proposta que conecta contas, despesas e documentos à rotina de quem empreende." },
  { id: "experiencia", number: "03", title: "Simplicidade em cada passo.", description: "Menos ruído na interface. Mais espaço para encontrar o que importa e seguir em frente." },
];

export default function Company() {
  return (
    <section id="empresa" className="company-section" aria-labelledby="company-title">
      <div className="company-inner">
        <div className="company-intro">
          <div>
            <p className="eyebrow">A IDEIA POR TRÁS DA NEXPAY</p>
            <h2 id="company-title">Clareza para quem<br />faz acontecer.</h2>
          </div>
          <div className="company-story">
            <p>A NexPay começou com uma ideia: tornar a rotina financeira dos pequenos negócios mais simples.</p>
            <p>Essa visão cresceu. Hoje, a proposta reúne gestão financeira, despesas e o conceito de cartões corporativos para pequenas empresas e startups. O propósito continua o mesmo: dar mais clareza para o próximo passo.</p>
          </div>
        </div>
        <div className="company-principles">
          {principles.map((principle) => (
            <article key={principle.id}>
              <span>{principle.number}</span>
              <h3>{principle.title}</h3>
              <p>{principle.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
