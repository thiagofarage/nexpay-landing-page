import { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { getSession } from "../../services/auth";

export default function ProtectedRoute() {
  const [session, setSession] = useState({ loading: true });
  const [attempt, setAttempt] = useState(0);
  useEffect(() => {
    const controller = new AbortController();
    getSession(controller.signal)
      .then(({ user }) => setSession({ user }))
      .catch((error) => {
        if (error.name !== "AbortError") setSession({ error });
      });
    return () => controller.abort();
  }, [attempt]);

  if (session.loading) return <main className="min-h-screen bg-[#0B0B0B] p-8 text-white" role="status">Verificando sessão...</main>;
  if (session.error?.status === 401) return <Navigate to="/login" replace />;
  if (session.error) return (
    <main className="min-h-screen bg-[#0B0B0B] p-8 text-white">
      <p role="alert">{session.error.message}</p>
      <button className="mt-4 rounded-xl bg-[#4F8F83] px-4 py-2 text-black" onClick={() => {
        setSession({ loading: true });
        setAttempt((value) => value + 1);
      }}>Tentar novamente</button>
    </main>
  );
  return <Outlet context={session.user} />;
}
