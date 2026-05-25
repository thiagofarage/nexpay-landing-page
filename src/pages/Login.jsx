import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (event) => {
    event.preventDefault();
    setError("");

    if (!email || !password) {
      setError("Por favor, preencha todos os campos.");
    }

    setError("");
    console.log("Fazendo login...");
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-6 font-inter">
      <div className="w-full max-w-112.5 bg-[#09090b] border border-zinc-800 p-10 rounded-2xl shadow-2xl">
        <div className="mb-10 text-left">
          <h1 className="text-3xl font-semibold text-white tracking-tight">
            Entrar
          </h1>
          <p className="text-zinc-400 mt-2 text-sm">
            Acesse sua conta para acompanhar saldo, recebimento e transações
          </p>
        </div>

        <form className="space-y-6">
          <div className="space-y-2">
            <label className="text-sm font-medium text-zinc-200">E-mail</label>
            <input
              type="email"
              placeholder="m@exemplo.com"
              className="w-full h-11 bg-transparent border border-zinc-800 rounded-md px-3 text-sm text-white focus:ring-1 focus:ring-zinc-400 outline-none transition-all placeholder:text-zinc-600"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between">
              <label className="text-sm font-medium text-zinc-200">Senha</label>
              <a
                href="#"
                className="text-sm text-zinc-400 hover:text-white transition-colors"
              >
                Esqueceu?
              </a>
            </div>
            <input
              type="password"
              className="w-full h-11 bg-transparent border border-zinc-800 rounded-md px-3 text-white focus:ring-1 focus:ring-zinc-400 outline-none transition-all"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button className="w-full h-11 bg-white hover:bg-zinc-200 text-black font-medium rounded-md transition-colors text-sm">
            Entrar com E-mail
          </button>
        </form>

        <div className="relative my-8">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t border-zinc-800"></span>
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-[#09090b] px-2 text-zinc-500 font-medium tracking-widest">
              Ou continue com
            </span>
          </div>
        </div>

        <button className="w-full h-11 bg-transparent border border-zinc-800 hover:bg-zinc-900 text-white rounded-md transition-colors text-sm flex items-center justify-center gap-2">
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12.48 10.92v3.28h7.84c-.24 1.84-1.96 5.36-7.84 5.36-5.08 0-9.2-4.2-9.2-9.36s4.12-9.36 9.2-9.36c2.88 0 4.8.12 6 .12 1.48.12 2.64 1.28 2.64 2.76 0 1.28-1.04 2.32-2.32 2.32-.4 0-.8-.12-1.12-.24-.48-.24-1.08-.36-1.68-.36-1.6 0-2.88 1.28-2.88 2.88z" />
          </svg>
          Google
        </button>

        <p className="mt-8 text-center text-sm text-zinc-500">
          Não tem uma conta?{" "}
          <Link
            to="/signup"
            className="text-white hover:underline underline-offset-4"
          >
            Criar conta
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
