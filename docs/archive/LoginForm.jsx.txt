import React, { useState } from "react";

const Login = () => {
  const [isLoading, setIsLoading] = useState(false);
};

const handleLogin = async (event) => {
  event.preventDefault();
  setIsLoading(true);

  await new Promise((resolve) => setTimeout(resolve, 2000));

  setIsLoading(false);
  alert("Login bem-sucedido!");

  return (
    <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center font-sans text-zinc-200">
      <div className="w-full max-w-md p-8 border border-zinc-800 rounded-2xl bg-[#0d0d0d] shadow-2xl">
        <h2 className="text-2xl font-semibold text-white mb-6 tracking-tight">
          NexPay Principal
        </h2>

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-zinc-400 mb-1">
              E-mail
            </label>
            <input
              type="email"
              className="w-full bg-zinc-900 border border-zinc-800 rounded-lg py-2 px-3 focus:outline-none focus:border-indigo-500 transition-colors"
              placeholder="seu@email.com"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-zinc-400 mb-1">
              Senha
            </label>
            <input
              type="password"
              className="w-full bg-zinc-900 border border-zinc-800 rounded-lg py-2 px-3 focus:outline-none focus:border-indigo-500 transition-colors"
              placeholder="••••••••"
            />
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-white text-black font-semibold py-2 rounded-lg hover:bg-zinc-200 transition-all flex items-center justify-center"
          >
            {isLoading ? "Verificando..." : "Entrar"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
