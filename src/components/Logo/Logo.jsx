import blackLogo from "../../assets/logo/nexpay-logo.svg";
import whiteLogo from "../../assets/logo/nexpay-logo-white.svg";
import blackSymbol from "../../assets/logo/nexpay-symbol-black.svg";
import whiteSymbol from "../../assets/logo/nexpay-symbol-white.svg";

export default function Logo({ variant = "black", symbolOnly = false, className = "", decorative = false }) {
  const source = symbolOnly
    ? (variant === "white" ? whiteSymbol : blackSymbol)
    : (variant === "white" ? whiteLogo : blackLogo);
  return <img src={source} alt={decorative ? "" : "NexPay"} aria-hidden={decorative || undefined}
    className={[symbolOnly ? "brand-symbol" : "brand-logo", className].join(" ")} />;
}
