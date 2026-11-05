import Logo from "../components/Logo/Logo";
import { useEffect, useState } from "react";
import { Link, useNavigate, useOutletContext } from "react-router-dom";
import { logout } from "../services/auth";
import { api } from "../services/api";

export default function Dashboard() {
  const user = useOutletContext();
  const navigate = useNavigate();
  const [accounts, setAccounts] = useState(null);
  const [error, setError] = useState("");
  const [isLeaving, setIsLeaving] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    api("/accounts", { signal: controller.signal }).then(setAccounts).catch((error) => {
      if (error.name === "AbortError") return;
      if (error.status === 401) navigate("/login", { replace: true });
      else setError(error.message);
    });
    return () => controller.abort();
  }, [navigate]);

  async function handleLogout() {
    setIsLeaving(true);
    setError("");
    try {
      await logout();
      navigate("/login", { replace: true });
    } catch (error) { setError(error.message); }
    finally { setIsLeaving(false); }
  }

  return (
    <main className="min-h-screen bg-[#0b0d0d] px-6 py-10 text-white">
      <div className="mx-auto max-w-4xl">
        <header className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-6">
          <div>
            <Link to="/" aria-label="NexPay — início" className="brand-link"><Logo variant="white" /></Link>
            <h1 className="mt-2 text-3xl font-semibold">Visão geral</h1>
          </div>
          <button onClick={handleLogout} disabled={isLeaving} className="rounded-xl border border-white/20 px-4 py-2 disabled:opacity-50">
            {isLeaving ? "Saindo..." : "Sair"}
          </button>
        </header>
        <p className="mt-8 text-lg">Olá, {user.name}.</p>
        <p className="mt-1 text-sm text-[#D9D9D9]">{user.email}</p>
        {error && <p role="alert" className="mt-6 text-red-300">{error}</p>}
        <section className="mt-8" aria-labelledby="accounts-title">
          <h2 id="accounts-title" className="text-xl font-medium">Suas contas</h2>
          {!accounts && !error && <p role="status" className="mt-4 text-[#D9D9D9]">Carregando contas...</p>}
          {accounts?.length === 0 && <p className="mt-4 text-[#D9D9D9]">Você ainda não possui contas cadastradas.</p>}
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            {accounts?.map((account) => (
              <article key={account.id} className="rounded-2xl border border-white/10 bg-[#141717] p-6">
                <h3 className="text-[#D9D9D9]">{account.account_name}</h3>
                <p className="mt-3 text-2xl font-semibold">{new Intl.NumberFormat("pt-BR", {
                  style: "currency", currency: account.currency || "BRL",
                }).format(Number(account.balance || 0))}</p>
              </article>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
