import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import Logo from "../Logo/Logo";

export default function FinalCTA() {
  return (
    <section className="closing-cta" aria-labelledby="closing-title">
      <Logo variant="white" symbolOnly decorative className="closing-watermark" />
      <div className="closing-inner">
        <p className="eyebrow">CONTAS CLARAS. DECISÕES MELHORES.</p>
        <h2 id="closing-title">Seu próximo passo<br />começa com mais clareza.</h2>
        <p>Acesse sua conta e veja suas informações financeiras em um só lugar.</p>
        <div className="closing-actions">
          <Link to="/login" className="primary-button">Acessar a plataforma<ArrowRight size={16} aria-hidden="true" /></Link>
          <a href="#produtos">Explorar os produtos<ArrowUpRight size={15} aria-hidden="true" /></a>
        </div>
      </div>
    </section>
  );
}
