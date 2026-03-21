import React from "react";
import Button from "../Button/Button";
import DashboardPreview from "../DashboardPreview/DashboardPreview";

const Hero = () => {
  return (
    <section className="relative pt-36 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-white font-['Space_Grotesk']">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-225 h-125 bg-slate-50 rounded-full blur-[120px] pointer-events-none opacity-60" />

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="animate-fade-up text-5xl md:text-[82px] font-extrabold tracking-[-0.04em] text-[#171717] leading-[1.05] mb-8">
            Infraestrutura <br /> financeira para MEIs.
          </h1>

          <p className="animate-fade-up [animation-delay:200ms] text-lg md:text-xl text-slate-500 max-w-2xl mx-auto mb-12 leading-relaxed">
            Reconciliação automática, cálculo de Burn Rate e automação fiscal.{" "}
            <br className="hidden md:block" />
            Abra sua conta em 10 minutos e foque no seu negócio.
          </p>

          <div className="animate-fade-up [animation-delay:400ms] flex flex-col sm:flex-row gap-3 justify-center items-center max-w-lg mx-auto mb-20  ">
            <input
              type="email"
              placeholder="Seu e-mail"
              className="w-full sm:flex-1 h-12 px-5 rounded-full bg-slate-50 border border-slate-200 text-[#171717] placeholder:text-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-[#171717]/5 transition-all"
            />
            <Button
              variant="default"
              size="lg"
              className="w-full sm:w-auto shadow-xl hover:shadow-[#171717]/20 transition-shadow"
            >
              Entrar na Lista de Espera
            </Button>
          </div>

          <div class="flex items-center justify-center gap-6 mb-20">
            <button class="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1.5 group cursor-pointer  ">
              Ver demonstração
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-arrow-up-right w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
              >
                <path d="M7 7h10v10"></path>
                <path d="M7 17 17 7"></path>
              </svg>
            </button>
          </div>

          <div className="animate-fade-up [animation-delay:600ms] relative mx-auto max-w-5xl">
            <DashboardPreview />
            <div className="glass rounded-4xl p-3 border border-slate-100 shadow-2xl overflow-hidden">
              <div className="relative rounded-[22px] overflow-hidden bg-white border border-slate-50 shadow-inner">
                <div className="absolute inset-x-0 bottom-0 h-24 bg-linear-to-t from-white/80 to-transparent pointer-events-none" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
