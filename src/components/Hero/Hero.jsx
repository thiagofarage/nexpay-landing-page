import { Link } from "react-router-dom";
import { ArrowRight, ArrowDown } from "lucide-react";
import CorporateCard from "../CorporateCard/CorporateCard";
import Logo from "../Logo/Logo";

export default function Hero() {
  return (
    <section className="home-hero" aria-labelledby="hero-title">
      <div className="hero-content">
        <div className="hero-copy">
          <p className="eyebrow"><span className="accent-dot" />SUAS FINANÇAS, POR INTEIRO</p>
          <h1 id="hero-title">Mais clareza.<br /><span>Em cada movimento.</span></h1>
          <p className="hero-description">Contas, saldos e transações em um só lugar. Um jeito mais simples de acompanhar o que entra e o que sai da sua empresa.</p>
          <div className="hero-actions">
            <Link to="/login" className="primary-button">Acessar minha conta <ArrowRight size={17} aria-hidden="true" /></Link>
            <a href="#visao-geral" className="quiet-link">Conhecer a plataforma <ArrowDown size={15} aria-hidden="true" /></a>
          </div>
        </div>
        <figure id="cartao-corporativo" className="hero-card-figure">
          <div className="hero-card-stage">
            <div className="card-orbit" aria-hidden="true" />
            <div className="card-backplate" aria-hidden="true"><Logo symbolOnly decorative /></div>
            <div className="hero-card-front"><CorporateCard /></div>
          </div>
          <figcaption><span className="card-caption-line" />NEXPAY BUSINESS<span>Conceito do cartão corporativo</span></figcaption>
        </figure>
      </div>
    </section>
  );
}
