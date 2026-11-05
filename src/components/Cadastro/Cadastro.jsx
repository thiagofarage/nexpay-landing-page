import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, Eye, EyeOff, CheckCircle2, AlertCircle } from "lucide-react";
import Logo from "../Logo/Logo";
import CorporateCard from "../CorporateCard/CorporateCard";

export default function Cadastro() {
  const formRef = useRef(null);
  const [form, setForm] = useState({ name: "", email: "", password: "", confirmation: "" });
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [status, setStatus] = useState("");

  function handleChange(event) {
    const { name, value } = event.target;
    setForm((previous) => ({ ...previous, [name]: value }));
    setErrors({});
    setStatus("");
  }

  function handleSubmit(event) {
    event.preventDefault();
    const nextErrors = {};
    if (form.name.trim().length < 2 || form.name.trim().length > 100) {
      nextErrors.name = "Informe seu nome, entre 2 e 100 caracteres.";
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim()) || form.email.trim().length > 150) {
      nextErrors.email = "Informe um email válido.";
    }
    if (form.password.length < 8) {
      nextErrors.password = "Use pelo menos 8 caracteres na senha.";
    } else if (new TextEncoder().encode(form.password).length > 72) {
      nextErrors.password = "A senha excede o limite de 72 bytes. Use uma senha menor.";
    }
    if (!form.confirmation || form.password !== form.confirmation) {
      nextErrors.confirmation = "A confirmação deve ser igual à senha.";
    }
    setErrors(nextErrors);
    const firstField = Object.keys(nextErrors)[0];
    if (firstField) {
      setStatus("invalid");
      formRef.current.elements.namedItem(firstField)?.focus();
      return;
    }
    // Etapa visual: não envia dados, não cria conta e não inicia uma sessão.
    setStatus("valid");
  }

  return (
    <main className="signup-page">
      <header className="signup-header">
        <Link to="/" aria-label="NexPay — início" className="brand-link"><Logo variant="black" /></Link>
        <Link to="/" className="signup-back"><ArrowLeft size={14} aria-hidden="true" />Voltar ao início</Link>
      </header>

      <div className="signup-layout">
        <section className="signup-story" aria-labelledby="signup-story-title">
          <p className="eyebrow">COMECE PELA CLAREZA</p>
          <h2 id="signup-story-title">Seu negócio.<br /><span>Seu próximo passo.</span></h2>
          <p className="signup-story-copy">Uma visão mais simples das suas finanças, com espaço para o que realmente importa: fazer seu negócio avançar.</p>
          <figure className="signup-card-example">
            <div><CorporateCard compact /></div>
            <figcaption>Conceito visual do cartão NexPay Business</figcaption>
          </figure>
          <p className="signup-signature">Contas claras. Decisões melhores.</p>
        </section>

        <section className="signup-panel" aria-labelledby="signup-title">
          <p className="signup-stage">CADASTRO EM PREPARAÇÃO</p>
          <h1 id="signup-title">Criar sua conta.</h1>
          <p className="signup-description">Comece com suas informações básicas.</p>
          <p className="signup-preview-note">Prévia do cadastro: os dados não são enviados nem salvos nesta etapa.</p>

          <form ref={formRef} onSubmit={handleSubmit} noValidate className="signup-form">
            <div className="signup-field">
              <label htmlFor="signup-name">Nome completo</label>
              <input id="signup-name" name="name" autoComplete="name" required maxLength={100}
                placeholder="Como podemos chamar você?" value={form.name} onChange={handleChange}
                aria-invalid={Boolean(errors.name)} aria-describedby={errors.name ? "signup-name-error" : undefined} />
              {errors.name && <p id="signup-name-error" className="signup-field-error">{errors.name}</p>}
            </div>
            <div className="signup-field">
              <label htmlFor="signup-email">Email</label>
              <input id="signup-email" name="email" type="email" autoComplete="email" inputMode="email"
                autoCapitalize="none" spellCheck={false} required maxLength={150} placeholder="voce@empresa.com"
                value={form.email} onChange={handleChange} aria-invalid={Boolean(errors.email)}
                aria-describedby={errors.email ? "signup-email-error" : undefined} />
              {errors.email && <p id="signup-email-error" className="signup-field-error">{errors.email}</p>}
            </div>
            <div className="signup-field">
              <label htmlFor="signup-password">Senha</label>
              <div className="password-control">
                <input id="signup-password" name="password" type={showPassword ? "text" : "password"}
                  autoComplete="new-password" required placeholder="Crie sua senha" value={form.password}
                  onChange={handleChange} aria-invalid={Boolean(errors.password)}
                  aria-describedby={errors.password ? "signup-password-hint signup-password-error" : "signup-password-hint"} />
                <button type="button" className="password-toggle" onClick={() => setShowPassword((visible) => !visible)}
                  aria-label={showPassword ? "Ocultar senhas" : "Mostrar senhas"} aria-pressed={showPassword}
                  aria-controls="signup-password signup-confirmation">
                  {showPassword ? <EyeOff size={17} aria-hidden="true" /> : <Eye size={17} aria-hidden="true" />}
                </button>
              </div>
              <p id="signup-password-hint" className="signup-hint">Use pelo menos 8 caracteres.</p>
              {errors.password && <p id="signup-password-error" className="signup-field-error">{errors.password}</p>}
            </div>
            <div className="signup-field">
              <label htmlFor="signup-confirmation">Confirmar senha</label>
              <input id="signup-confirmation" name="confirmation" type={showPassword ? "text" : "password"}
                autoComplete="new-password" required placeholder="Repita sua senha" value={form.confirmation}
                onChange={handleChange} aria-invalid={Boolean(errors.confirmation)}
                aria-describedby={errors.confirmation ? "signup-confirmation-error" : undefined} />
              {errors.confirmation && <p id="signup-confirmation-error" className="signup-field-error">{errors.confirmation}</p>}
            </div>
            <div className="signup-feedback">
              {status === "invalid" && <p role="alert"><AlertCircle size={15} aria-hidden="true" />Revise os campos indicados.</p>}
              {status === "valid" && <p role="status" className="signup-valid"><CheckCircle2 size={16} aria-hidden="true" /><span>Os campos passaram pela validação. Nenhuma conta foi criada.</span></p>}
            </div>
            <button type="submit" className="primary-button signup-submit">Verificar dados<ArrowRight size={16} aria-hidden="true" /></button>
          </form>
          <p className="signup-switch">Já tem uma conta? <Link to="/login">Entrar na NexPay</Link></p>
        </section>
      </div>
      <footer className="signup-footer"><span>© {new Date().getFullYear()} NexPay</span><span>Contas claras. Decisões melhores.</span></footer>
    </main>
  );
}
