import React from "react";

const Button = ({
  variant = "default",
  size = "default",
  children,
  className = "",
  ...props
}) => {
  const baseStyles =
    "inline-flex items-center justify-center rounded-full font-bold transition-all duration-300 active:scale-95 font-['Space_Grotesk'] cursor-pointer";

  const variants = {
    default: "bg-[#171717] text-white hover:bg-black shadow-md hover:shadow-xl",

    secondary: "bg-slate-100 text-slate-600 hover:bg-slate-200",

    outline:
      "border-2 border-[#171717] text-[#171717] bg-transparent hover:bg-slate-50",

    ghost:
      "text-slate-500 hover:text-[#171717] bg-transparent hover:bg-slate-50",

    neon: "bg-[#C1FF72] text-[#171717] hover:shadow-[0_0_20px_rgba(193,255,114,0.4)]",
  };

  // Tamanhos
  const sizes = {
    default: "h-11 px-6 py-2 text-sm",
    lg: "h-14 px-10 py-4 text-base",
    sm: "h-9 px-4 py-1 text-xs",
  };

  const combinedClasses = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  return (
    <button className={combinedClasses} {...props}>
      {children}
    </button>
  );
};

export default Button;
