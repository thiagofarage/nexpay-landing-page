import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import Logo from "../Logo/Logo";

export default function Navbar() {
  return (
    <header className="site-header">
      <nav className="site-nav" aria-label="Navegação principal">
        <Link to="/" aria-label="NexPay — início" className="brand-link">
          <Logo variant="black" />
        </Link>
        <div className="home-section-links">
          <a href="#produtos" className="quiet-link">Produtos</a>
          <a href="#solucoes" className="quiet-link">Soluções</a>
          <a href="#empresa" className="quiet-link">Empresa</a>
        </div>
        <Link to="/login" className="nav-login">
          Acessar conta<ArrowUpRight size={15} aria-hidden="true" />
        </Link>
      </nav>
    </header>
  );
}
