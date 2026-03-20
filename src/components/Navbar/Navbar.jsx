import React from "react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <a
          href="/"
          className="flex items-center gap-2.5 group transition-transform active:scale-95"
        >
          <div className="w-9 h-9 bg-[#171717] rounded-[10px] flex items-center justify-center shadow-sm">
            <span className="text-white font-bold text-xl font-['Space_Grotesk']">
              N
            </span>
          </div>
          <span className="text-[22px] font-extrabold text-[#171717] tracking-[-0.03em] font-['Space_Grotesk']">
            NexPay
          </span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {["Produtos", "Soluções", "Preços", "Recursos"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm font-medium text-slate-500 hover:text-[#171717] transition-colors font-['Space_Grotesk']"
            >
              {item}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <button className="hidden sm:block text-sm font-bold text-[#171717] px-4 font-['Space_Grotesk'] cursor-pointer">
            Entrar
          </button>
          <button className="bg-[#171717] text-white px-6 py-2.5 rounded-full text-sm font-bold hover:shadow-lg transition-all active:scale-95 font-['Space_Grotesk'] cursor-pointer">
            Abrir conta
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
