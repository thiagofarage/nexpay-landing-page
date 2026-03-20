import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-slate-100 pt-24 pb-12 font-['Space_Grotesk']">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-2 md:col-span-1">
            <a href="/" className="flex items-center gap-2.5 mb-6">
              <div className="w-8 h-8 bg-[#171717] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">N</span>
              </div>
              <span className="text-xl font-extrabold text-[#171717] tracking-[-0.03em]">
                NexPay
              </span>
            </a>
            <p className="text-sm text-slate-500 leading-relaxed max-w-50">
              A infraestrutura financeira que você precisa.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-bold text-[#171717] mb-6">
              Plataforma
            </h4>
            <ul className="space-y-4 text-sm text-slate-500">
              <li>
                <a href="#" className="hover:text-[#171717] transition-colors">
                  Funcionalidades
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#171717] transition-colors">
                  Segurança
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#171717] transition-colors">
                  API
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold text-[#171717] mb-6">Empresa</h4>
            <ul className="space-y-4 text-sm text-slate-500">
              <li>
                <a href="#" className="hover:text-[#171717] transition-colors">
                  Sobre
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#171717] transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#171717] transition-colors">
                  Carreiras
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold text-[#171717] mb-6">Suporte</h4>
            <ul className="space-y-4 text-sm text-slate-500">
              <li>
                <a href="#" className="hover:text-[#171717] transition-colors">
                  Ajuda
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#171717] transition-colors">
                  Contato
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#171717] transition-colors">
                  Status
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-50 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[12px] text-slate-400 font-medium">
            © 2026 NexPay Financial Technologies.
          </p>
          <div className="flex gap-6 text-[12px] font-medium text-slate-400">
            <a href="#" className="hover:text-[#171717]">
              Privacidade
            </a>
            <a href="#" className="hover:text-[#171717]">
              Termos
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
