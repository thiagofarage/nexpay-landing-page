import {
  ArrowUpRight,
  CreditCard,
  ReceiptText,
  ChartNoAxesCombined,
} from "lucide-react";

const products = [
  {
    id: "cartoes",
    icon: <CreditCard size={25} strokeWidth={1.5} aria-hidden="true" />,
    title: "Cartão corporativo",
    description:
      "Uma identidade para os gastos da sua empresa. Conheça o conceito do cartão NexPay Business.",
    status: "Conceito visual",
    href: "#cartao-corporativo",
    action: "Conhecer o cartão",
  },
  {
    id: "despesas",
    icon: <ReceiptText size={25} strokeWidth={1.5} aria-hidden="true" />,
    title: "Gestão de despesas",
    description:
      "Movimentações, categorias e comprovantes em um mesmo fluxo. Essa experiência está em desenvolvimento.",
    status: "Em desenvolvimento",
    href: "#visao-geral",
    action: "Ver a proposta da plataforma",
  },
  {
    id: "fluxo-de-caixa",
    icon: (
      <ChartNoAxesCombined size={25} strokeWidth={1.5} aria-hidden="true" />
    ),
    title: "Fluxo de caixa",
    description:
      "Uma visão das entradas e saídas para acompanhar seu negócio. Explore a prévia com dados ilustrativos.",
    status: "Prévia demonstrativa",
    href: "#visao-geral",
    action: "Explorar a prévia",
  },
];

export default function Products() {
  return (
    <section
      id="produtos"
      className="products-section products-section--dark"
      aria-labelledby="products-title"
    >
      <div className="products-inner">
        <div className="products-heading">
          <div>
            <p className="eyebrow">O QUE MOVE A NEXPAY</p>
            <h2 id="products-title">
              Ferramentas para
              <br />
              seu negócio avançar.
            </h2>
          </div>
          <p>
            Do cartão à visão financeira, cada parte tem um papel: deixar suas
            decisões mais claras.
          </p>
        </div>
        <div className="products-grid">
          {products.map((product) => (
            <article
              key={product.id}
              id={"produto-" + product.id}
              className={"product-tile product-tile--" + product.id}
            >
              <span className="product-status">{product.status}</span>
              <div className="product-icon">{product.icon}</div>
              <h3>{product.title}</h3>
              <p>{product.description}</p>
              <a href={product.href} className="product-link">
                {product.action}
                <ArrowUpRight size={16} aria-hidden="true" />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
