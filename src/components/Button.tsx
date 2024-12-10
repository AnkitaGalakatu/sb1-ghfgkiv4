import React from 'react';

interface ButtonProps {
  value: string;
  onClick: () => void;
  variant?: 'primary' | 'secondary' | 'operator';
}

export function Button({ value, onClick, variant = 'primary' }: ButtonProps) {
  const baseStyles = "w-14 h-14 rounded-full text-xl font-semibold transition-all duration-200 active:scale-95";
  
  const variantStyles = {
    primary: "bg-gray-200 hover:bg-gray-300 text-gray-800",
    secondary: "bg-gray-700 hover:bg-gray-600 text-white",
    operator: "bg-amber-500 hover:bg-amber-400 text-white"
  };

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${variantStyles[variant]}`}
    >
      {value}
    </button>
  );
}