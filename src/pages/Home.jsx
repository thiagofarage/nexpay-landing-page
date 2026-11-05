import { Wallet, ArrowLeftRight, LayoutDashboard } from "lucide-react";
import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import Products from "../components/Products/Products";
import Solutions from "../components/Solutions/Solutions";
import Company from "../components/Company/Company";
import FinalCTA from "../components/FinalCTA/FinalCTA";
import DashboardFrame from "../components/DashboardFrame/DashboardFrame";
import Footer from "../components/Footer/Footer";

const features = [
  { icon: <Wallet size={21} strokeWidth={1.5} aria-hidden="true" />, title: "Cada conta, no seu lugar.", description: "Acompanhe seus saldos em uma visão organizada." },
  { icon: <ArrowLeftRight size={21} strokeWidth={1.5} aria-hidden="true" />, title: "O detalhe faz diferença.", description: "Consulte as movimentações das suas contas." },
  { icon: <LayoutDashboard size={21} strokeWidth={1.5} aria-hidden="true" />, title: "Menos ruído. Mais contexto.", description: "Encontre as informações que importam para você." },
];

export default function Home() {
  return (
    <div id="inicio" className="home-page">
      <Navbar />
      <main>
        <Hero />
        <Products />
        <Solutions />
        <section id="visao-geral" className="product-overview" aria-labelledby="overview-title">
          <div className="overview-inner">
            <div className="overview-heading"><p className="eyebrow">UMA VISÃO MAIS SIMPLES</p><h2 id="overview-title">Seu dinheiro.<br />Uma perspectiva melhor.</h2><p>Uma interface feita para acompanhar suas finanças com tranquilidade.</p></div>
            <div className="product-preview"><div className="preview-label"><span className="accent-dot" />Prévia da plataforma <span>Dados ilustrativos</span></div><DashboardFrame /></div>
            <div className="feature-grid">{features.map(({ icon, title, description }) => (
              <article key={title}>{icon}<h3>{title}</h3><p>{description}</p></article>
            ))}</div>
          </div>
        </section>
        <Company />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
