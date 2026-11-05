import { ArrowUpRight, Check, FileText, ArrowDownLeft, ArrowUpRight as ExpenseArrow } from "lucide-react";

const expenses = [
  { id: "software", name: "Ferramentas de trabalho", category: "Software", amount: "R$ 1.290,00" },
  { id: "services", name: "Serviços da empresa", category: "Operação", amount: "R$ 750,00" },
  { id: "team", name: "Despesas da equipe", category: "Equipe", amount: "R$ 420,00" },
];

const documents = [
  { id: "invoice", name: "Nota fiscal de serviço", detail: "Serviços da empresa", status: "Anexado" },
  { id: "receipt", name: "Comprovante de pagamento", detail: "Ferramentas de trabalho", status: "Anexado" },
  { id: "pending", name: "Comprovante da despesa", detail: "Despesas da equipe", status: "Pendente" },
];

export default function Solutions() {
  return (
    <section id="solucoes" className="solutions-section" aria-labelledby="solutions-title">
      <div className="solutions-inner">
        <header className="solutions-heading">
          <p className="eyebrow">DA ROTINA À PRÓXIMA DECISÃO</p>
          <h2 id="solutions-title">Uma plataforma.<br />Diferentes formas de avançar.</h2>
          <p>Uma proposta para quem está construindo uma empresa e precisa de mais clareza sobre suas finanças.</p>
        </header>

        <article className="solution-row" aria-labelledby="small-business-title">
          <div className="solution-copy">
            <span className="solution-number">01 / PEQUENAS EMPRESAS</span>
            <h3 id="small-business-title">Menos planilhas.<br />Mais visão do negócio.</h3>
            <p>Entender o que entra e o que sai é o primeiro passo. A proposta da NexPay é reunir essas informações em uma visão fácil de acompanhar.</p>
            <ul>
              <li><Check size={15} aria-hidden="true" />Contas e saldos em um mesmo lugar</li>
              <li><Check size={15} aria-hidden="true" />Movimentações organizadas por contexto</li>
              <li><Check size={15} aria-hidden="true" />Uma visão para apoiar a rotina financeira</li>
            </ul>
            <a href="#visao-geral" className="solution-link">Conhecer a proposta <ArrowUpRight size={16} aria-hidden="true" /></a>
          </div>
          <figure className="solution-figure solution-figure--spend">
            <div className="solution-demo" aria-label="Exemplo ilustrativo de visão de despesas">
              <div className="demo-heading"><span>VISÃO DE DESPESAS</span><span className="demo-badge">Ilustrativo</span></div>
              <p className="demo-total">R$ 2.460<span>,00</span></p>
              <p className="demo-caption">Distribuição das despesas do exemplo</p>
              <div className="demo-distribution" aria-hidden="true"><span /><span /><span /></div>
              <div className="demo-expenses">
                {expenses.map((expense) => (
                  <div key={expense.id} className="demo-expense">
                    <span className="demo-expense-icon"><ExpenseArrow size={15} aria-hidden="true" /></span>
                    <div><p>{expense.name}</p><span>{expense.category}</span></div>
                    <strong>{expense.amount}</strong>
                  </div>
                ))}
              </div>
            </div>
            <figcaption>Exemplo visual · valores fictícios</figcaption>
          </figure>
        </article>

        <article className="solution-row solution-row--reverse" aria-labelledby="teams-title">
          <div className="solution-copy">
            <span className="solution-number">02 / EQUIPES EM CRESCIMENTO</span>
            <h3 id="teams-title">Cada despesa,<br />com seu contexto.</h3>
            <p>Uma movimentação conta só parte da história. Categorias e comprovantes ajudam a entender o motivo de cada gasto e a organizar informações para a contabilidade.</p>
            <ul>
              <li><Check size={15} aria-hidden="true" />Categorias para entender os gastos</li>
              <li><Check size={15} aria-hidden="true" />Comprovantes junto das movimentações</li>
              <li><Check size={15} aria-hidden="true" />Pendências visíveis para a equipe</li>
            </ul>
            <a href="#produtos" className="solution-link">Explorar os produtos <ArrowUpRight size={16} aria-hidden="true" /></a>
          </div>
          <figure className="solution-figure solution-figure--documents">
            <div className="solution-demo">
              <div className="demo-heading"><span>DOCUMENTOS E COMPROVANTES</span><ArrowDownLeft size={16} aria-hidden="true" /></div>
              <p className="demo-document-title">Tudo com seu contexto.</p>
              <p className="demo-caption">Uma proposta para organizar a rotina.</p>
              <div className="demo-documents">
                {documents.map((document) => (
                  <div key={document.id} className="demo-document">
                    <FileText size={19} strokeWidth={1.4} aria-hidden="true" />
                    <div><p>{document.name}</p><span>{document.detail}</span></div>
                    <span className={"document-status" + (document.status === "Pendente" ? " document-status--pending" : "")}>{document.status}</span>
                  </div>
                ))}
              </div>
            </div>
            <figcaption>Experiência planejada · prévia demonstrativa</figcaption>
          </figure>
        </article>
      </div>
    </section>
  );
}
