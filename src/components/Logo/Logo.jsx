import React from "react";

const Logo = () => {
  return (
    <div className="flex items-center gap-3 select-none animate-fade-up">
      <div className="w-8 h-8 bg-[#171717] rounded-lg flex items-center justify-center shadow-sm">
        <span className="text-white font-bold text-lg">N</span>
      </div>

      <span className="text-xl font-extrabold tracking-tight text-[#171717] font-['Space_Grotesk']">
        NexPay
      </span>
    </div>
  );
};

export default Logo;
