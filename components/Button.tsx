import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost';
}

export const Button: React.FC<ButtonProps> = ({ variant = 'primary', className = '', children, ...props }) => {
  const baseStyles = "relative px-6 py-3 font-mono text-sm uppercase tracking-widest transition-all duration-300 ease-out focus:outline-none group overflow-hidden";
  
  const variants = {
    primary: "bg-white text-black hover:bg-primary hover:text-black border border-white hover:border-primary hover:shadow-[0_0_20px_rgba(0,240,255,0.5)]",
    secondary: "bg-transparent text-white border border-white/20 hover:border-white/80 hover:bg-white/5",
    ghost: "text-gray-400 hover:text-white hover:bg-white/5",
  };

  return (
    <button className={`${baseStyles} ${variants[variant]} ${className}`} {...props}>
      <span className="relative z-10 flex items-center justify-center gap-2">
        {children}
      </span>
    </button>
  );
};