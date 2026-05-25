import React, { useState } from "react";

const FormValidacao = () => {
  const [enviado, setEnviado] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setEnviado(true);
  };

  if (enviado) {
    return (
      <section className="bg-white py-32 px-6 text-center">
        <div className="max-w-md mx-auto p-12 rounded-3xl bg-zinc-50 border border-zinc-100">
          <div className="w-16 h-16 bg-[#C1FF72] rounded-full flex items-center justify-center mx-auto mb-6">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="black"
              strokeWidth="3"
            >
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </div>
          <h2 className="text-2xl font-black tracking-tighter mb-2">
            RECEBEMOS!
          </h2>
          <p className="text-zinc-500 text-sm">
            Obrigado por ajudar a moldar a NexPay. Entraremos em contato em
            breve.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-white py-32 px-6 border-t border-zinc-50 font-['Space_Grotesk']">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black tracking-tighter text-black uppercase italic mb-4 font-['Space_Grotesk'] ">
            Valide sua empresa
          </h2>
          <p className="text-zinc-500 font-medium">
            Ajude-nos a entender suas necessidades e seja um dos primeiros a
            testar a NexPay.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          <div className="md:col-span-2 space-y-2">
            <label className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest ml-1">
              E-mail Profissional
            </label>
            <input
              required
              type="email"
              placeholder="exemplo@suaempresa.com"
              className="w-full bg-zinc-50 border border-zinc-100 p-4 rounded-xl outline-none focus:border-black transition-all"
            />
          </div>

          <div className="md:col-span-2 space-y-2">
            <label className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest ml-1">
              Qual seu maior desafio financeiro hoje?
            </label>
            <select className="w-full bg-zinc-50 border border-zinc-100 p-4 rounded-xl outline-none focus:border-black transition-all appearance-none cursor-pointer text-zinc-600">
              <option>Reconciliação de Notas Fiscais</option>
              <option>Gestão de Fluxo de Caixa / Burn Rate</option>
              <option>Pagamento de Impostos e Tributos</option>
              <option>Outros</option>
            </select>
          </div>

          <div className="space-y-2">
            <label className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest ml-1">
              Quanto você fatura/mês?
            </label>
            <select className="w-full bg-zinc-50 border border-zinc-100 p-4 rounded-xl outline-none focus:border-black transition-all text-zinc-600">
              <option>Até R$ 10k</option>
              <option>R$ 10k - R$ 50k</option>
              <option>Acima de R$ 50k</option>
            </select>
          </div>

          <div className="space-y-2">
            <label className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest ml-1">
              Pagaria R$150/mês por isso?
            </label>
            <div className="flex gap-4 pt-2">
              <label className="flex items-center gap-2 cursor-pointer text-sm font-bold">
                <input type="radio" name="pagaria" className="accent-black" />{" "}
                Sim
              </label>
              <label className="flex items-center gap-2 cursor-pointer text-sm font-bold">
                <input type="radio" name="pagaria" className="accent-black" />{" "}
                Não
              </label>
            </div>
          </div>

          <button className="md:col-span-2 w-full bg-black text-white font-black py-5 rounded-2xl uppercase text-xs tracking-[0.2em] hover:bg-[#C1FF72] hover:text-black transition-all mt-4 font-['Space_Grotesk']">
            Enviar Validação
          </button>
        </form>
      </div>
    </section>
  );
};

export default FormValidacao;
