import { Link } from "react-router-dom";
import { ArrowUp, ArrowUpRight } from "lucide-react";
import Logo from "../Logo/Logo";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer" id="rodape">
      <div className="footer-inner">
        <div className="footer-grid">
          <div className="footer-brand">
            <a
              href="#inicio"
              aria-label="NexPay — voltar ao início"
              className="brand-link"
            >
              <Logo variant="white" />
            </a>
            <p>
              Gestão financeira para negócios que querem avançar com mais
              clareza.
            </p>
            <span>Contas claras. Decisões melhores.</span>
          </div>

          <nav className="footer-nav" aria-label="Produtos no rodapé">
            <h2>Produtos</h2>
            <ul>
              <li>
                <a href="#produto-cartoes">Cartão corporativo</a>
              </li>
              <li>
                <a href="#produto-despesas">Gestão de despesas</a>
              </li>
              <li>
                <a href="#produto-fluxo-de-caixa">Fluxo de caixa</a>
              </li>
            </ul>
          </nav>

          <nav className="footer-nav" aria-label="Navegação no rodapé">
            <h2>Navegação</h2>
            <ul>
              <li>
                <a href="#solucoes">Soluções</a>
              </li>
              <li>
                <a href="#empresa">Empresa</a>
              </li>
              <li>
                <a href="#visao-geral">A plataforma</a>
              </li>
              <li>
                <a href="#cartao-corporativo">NexPay Business</a>
              </li>
            </ul>
          </nav>

          <nav className="footer-nav" aria-label="Sua conta no rodapé">
            <h2>Sua conta</h2>
            <ul>
              <li>
                <Link to="/login">
                  Acessar conta
                  <ArrowUpRight size={13} aria-hidden="true" />
                </Link>
              </li>
              <li>
                <Link to="/dashboard">
                  Meu painel
                  <ArrowUpRight size={13} aria-hidden="true" />
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        <div className="footer-legal">
          <p>© {currentYear} Nexpay</p>
          <a href="#inicio" className="footer-back-to-top">
            Voltar ao topo
            <ArrowUp size={14} aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  );
}
