import { Link, useNavigate } from "react-router-dom";
import { useRef, useState } from "react";
import { AlertCircle, ArrowLeft, ArrowRight, Eye, EyeOff, LoaderCircle, Clock3 } from "lucide-react";
import { login } from "../services/auth";
import Logo from "../components/Logo/Logo";
import BrandAtmosphere from "../components/BrandAtmosphere/BrandAtmosphere";

export default function Login() {
  const navigate = useNavigate();
  const submitting = useRef(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  async function handleSubmit(event) {
    event.preventDefault();
    if (submitting.current) return;
    setError(null);
    if (!email.trim() || !password) {
      setError({ message: "Preencha seu email e sua senha.", status: 400 });
      return;
    }
    if (new TextEncoder().encode(password).length > 72) {
      setError({ message: "A senha deve ter no máximo 72 bytes.", status: 400 });
      return;
    }
    submitting.current = true;
    setIsLoading(true);
    try {
      await login(email.trim(), password);
      setPassword("");
      navigate("/dashboard", { replace: true });
    } catch (error) {
      setError({ message: error.message, status: error.status });
    } finally {
      submitting.current = false;
      setIsLoading(false);
    }
  }

  return (
    <main className="auth-page">
      <BrandAtmosphere />
      <header className="auth-header">
        <Link to="/" aria-label="NexPay — início" className="brand-link"><Logo variant="white" /></Link>
        <Link to="/" className="quiet-link"><ArrowLeft size={14} aria-hidden="true" /> Voltar ao início</Link>
      </header>

      <div className="auth-main">
        <section className="login-panel" aria-labelledby="login-title">
          <div className="login-intro">
            <Logo variant="white" symbolOnly decorative className="login-symbol" />
            <p className="eyebrow">SUA CONTA NEXPAY</p>
            <h1 id="login-title">Bem-vindo de volta.</h1>
            <p className="login-description">Mais clareza para o seu próximo passo.</p>
          </div>

          <form onSubmit={handleSubmit} className="login-form" aria-busy={isLoading}>
            <div className="form-field">
              <label htmlFor="email">Email</label>
              <input id="email" name="email" type="email" autoComplete="username" inputMode="email"
                autoCapitalize="none" spellCheck={false} required maxLength={150}
                placeholder="voce@empresa.com" value={email} disabled={isLoading}
                aria-invalid={error?.status === 401 || undefined} aria-describedby={error ? "login-error" : undefined}
                onChange={(event) => { setEmail(event.target.value); if (error) setError(null); }} />
            </div>
            <div className="form-field">
              <label htmlFor="password">Senha</label>
              <div className="password-control">
                <input id="password" name="password" type={showPassword ? "text" : "password"}
                  autoComplete="current-password" required placeholder="Sua senha" value={password}
                  disabled={isLoading} aria-invalid={error?.status === 401 || undefined}
                  aria-describedby={error ? "login-error" : undefined}
                  onChange={(event) => { setPassword(event.target.value); if (error) setError(null); }} />
                <button type="button" className="password-toggle" disabled={isLoading}
                  onClick={() => setShowPassword((visible) => !visible)}
                  aria-label={showPassword ? "Ocultar senha" : "Mostrar senha"}
                  aria-pressed={showPassword} aria-controls="password">
                  {showPassword ? <EyeOff size={17} aria-hidden="true" /> : <Eye size={17} aria-hidden="true" />}
                </button>
              </div>
            </div>
            <div className="login-feedback" aria-live="polite" aria-atomic="true">
              {error && <p id="login-error" role="alert"><AlertCircle size={15} aria-hidden="true" /><span>{error.message}</span></p>}
            </div>
            <button type="submit" className="primary-button login-submit" disabled={isLoading}>
              {isLoading ? <><LoaderCircle size={17} className="loading-spinner" aria-hidden="true" /> Entrando...</> : <>Entrar na minha conta <ArrowRight size={16} aria-hidden="true" /></>}
            </button>
          </form>
          <p className="session-note"><Clock3 size={13} aria-hidden="true" />Sua sessão permanece ativa por 1 hora.</p>
          <p className="auth-switch">Ainda não tem conta? <Link to="/cadastro">Criar conta</Link></p>
        </section>
      </div>

      <footer className="auth-footer"><span>© 2026 NexPay</span><span>Contas claras. Decisões melhores.</span></footer>
    </main>
  );
}
