import { Nfc } from "lucide-react";
import Logo from "../Logo/Logo";

export default function CorporateCard({ compact = false }) {
  return (
    <div className={["corporate-card", compact ? "corporate-card--compact" : ""].join(" ")}
      role="img" aria-label="Conceito visual do cartão corporativo NexPay, com dados ilustrativos">
      <Logo variant="white" symbolOnly decorative className="card-watermark" />
      <div className="card-top"><Logo variant="white" decorative /><span>CORPORATIVO</span></div>
      <div className="card-chip-row">
        <svg className="card-chip" viewBox="0 0 40 30" fill="none" aria-hidden="true">
          <rect x=".5" y=".5" width="39" height="29" rx="5" fill="#c7bc9c" stroke="#e8dec1" />
          <path d="M14 0v9l-5 6 5 6v9M26 0v9l5 6-5 6v9M0 10h13M0 20h13M27 10h13M27 20h13M14 9h12v12H14z" stroke="#8c836e" strokeWidth=".8" />
        </svg>
        <Nfc size={20} strokeWidth={1.2} aria-hidden="true" />
      </div>
      <div className="card-bottom"><div><p className="card-digits">•••• &nbsp; 4820</p><p className="card-holder">SUA EMPRESA</p></div><span className="card-category">business</span></div>
    </div>
  );
}
