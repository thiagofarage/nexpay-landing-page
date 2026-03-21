import React from "react";

const DashboardPreview = () => {
  return (
    <div className="w-full bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden font-['Space_Grotesk']">
      <div className="px-6 py-4 border-b border-slate-50 flex justify-between items-center">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-slate-200" />
          <div className="w-3 h-3 rounded-full bg-slate-200" />
          <div className="w-3 h-3 rounded-full bg-slate-200" />
        </div>
        <div className="h-4 w-32 bg-slate-50 rounded-full" />
      </div>

      <div className="p-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <div className="col-span-2 p-6 rounded-2xl bg-[#FAFAFA] border border-slate-100">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
              Saldo Total
            </span>
            <div className="flex items-baseline gap-2 mt-2">
              <span className="text-3xl font-extrabold text-[#171717]">
                R$ 42.890,00
              </span>
              <span className="text-sm font-bold text-emerald-500">+12%</span>
            </div>

            <div className="mt-6 h-12 w-full flex items-end gap-1">
              {[40, 70, 45, 90, 65, 80, 30, 95].map((h, i) => (
                <div
                  key={i}
                  className="flex-1 bg-slate-200 rounded-t-sm transition-all hover:bg-[#171717]"
                  style={{ height: `${h}%` }}
                />
              ))}
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-[#171717] text-white flex flex-col justify-between">
            <div className="flex justify-between items-start">
              <div className="w-10 h-6 bg-white/20 rounded-md" />
              <span className="text-[10px] font-bold opacity-50 uppercase">
                NexPay Platinum
              </span>
            </div>
            <div>
              <span className="text-sm font-medium tracking-widest">
                •••• 8829
              </span>
              <p className="text-[10px] opacity-50 mt-1">THIAGO OLIVEIRA</p>
            </div>
          </div>
        </div>

        <div>
          <h4 className="text-sm font-extrabold text-[#171717] mb-4">
            Transações Recentes
          </h4>
          <div className="space-y-4">
            {[
              {
                label: "Assinatura Adobe",
                date: "22 Out",
                value: "- R$ 124,00",
                color: "bg-orange-100",
              },
              {
                label: "Venda via Pix",
                date: "21 Out",
                value: "+ R$ 2.450,00",
                color: "bg-emerald-100",
              },
              {
                label: "AWS Cloud",
                date: "20 Out",
                value: "- R$ 89,90",
                color: "bg-blue-100",
              },
            ].map((t, i) => (
              <div
                key={i}
                className="flex justify-between items-center p-2 hover:bg-slate-50 rounded-xl transition-colors"
              >
                <div className="flex items-center gap-4">
                  <div className={`w-10 h-10 ${t.color} rounded-full`} />
                  <div>
                    <p className="text-sm font-bold text-[#171717]">
                      {t.label}
                    </p>
                    <p className="text-[11px] text-slate-400 font-medium">
                      {t.date}
                    </p>
                  </div>
                </div>
                <span
                  className={`text-sm font-bold ${t.value.includes("+") ? "text-emerald-600" : "text-[#171717]"}`}
                >
                  {t.value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPreview;
