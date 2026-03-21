import React from "react";

const DashboardChart = () => {
  return (
    <section className="bg-zinc-50 py-24 px-6 border-y border-zinc-100 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-400 mb-4 inline-block">
            Reconciliação via API
          </span>
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-black mb-6">
            Match automático <br />{" "}
            <span className="text-zinc-400 text-3xl md:text-5xl">
              NF-e × Extrato
            </span>
          </h2>
        </div>

        <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-2xl shadow-zinc-200/50 border border-zinc-100 p-4 md:p-8">
          <div className="grid md:grid-cols-2 gap-4 md:gap-8 relative">
            <div className="space-y-4">
              <div className="flex items-center gap-2 mb-6">
                <span className="bg-zinc-100 text-[10px] font-bold px-2 py-1 rounded">
                  ERP
                </span>
                <span className="text-[10px] font-bold text-zinc-400 uppercase">
                  Notas Fiscais
                </span>
              </div>
              {[
                { id: "#4821", val: "1.250,00", status: "ok" },
                { id: "#4822", val: "890,00", status: "ok" },
                { id: "#4823", val: "2.100,00", status: "warning" },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex justify-between items-center p-4 bg-zinc-50 rounded-xl border border-zinc-100"
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-2 h-2 rounded-full ${item.status === "ok" ? "bg-[#C1FF72]" : "bg-orange-400"}`}
                    ></div>
                    <span className="text-sm font-bold text-black">
                      NF-e {item.id}
                    </span>
                  </div>
                  <span className="text-sm font-mono font-bold text-zinc-500 text-right">
                    R$ {item.val}
                  </span>
                </div>
              ))}
            </div>

            <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white border border-zinc-100 rounded-full items-center justify-center shadow-lg z-20">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="black"
                strokeWidth="2.5"
              >
                <path d="M7 10l5 5 5-5" />
              </svg>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-2 mb-6">
                <span className="bg-zinc-100 text-[10px] font-bold px-2 py-1 rounded">
                  BCO
                </span>
                <span className="text-[10px] font-bold text-zinc-400 uppercase">
                  Extrato Bancário
                </span>
              </div>
              {[
                { label: "Crédito PIX", val: "1.250,00", status: "ok" },
                { label: "Crédito TED", val: "890,00", status: "ok" },
                { label: "Não identificado", val: "320,00", status: "error" },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex justify-between items-center p-4 bg-zinc-50 rounded-xl border border-zinc-100"
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-2 h-2 rounded-full ${item.status === "ok" ? "bg-[#C1FF72]" : "bg-red-400"}`}
                    ></div>
                    <span className="text-sm font-bold text-black">
                      {item.label}
                    </span>
                  </div>
                  <span className="text-sm font-mono font-bold text-zinc-500 text-right">
                    R$ {item.val}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4 mt-12 pt-8 border-t border-zinc-50 text-center">
            <div>
              <p className="text-2xl font-black text-black">94%</p>
              <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">
                Reconciliado
              </p>
            </div>
            <div>
              <p className="text-2xl font-black text-orange-400">4%</p>
              <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">
                Pendente
              </p>
            </div>
            <div>
              <p className="text-2xl font-black text-red-400">2%</p>
              <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">
                Divergência
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DashboardChart;
