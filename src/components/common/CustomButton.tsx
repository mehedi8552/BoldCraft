import React from 'react';
import { Link } from 'react-router-dom';

interface CustomButtonProps {
  to: string;
  text: string;
  className?: string;
  variant?: 'primary' | 'outline';
}

const CustomButton: React.FC<CustomButtonProps> = ({ to, text, className = '', variant = 'primary' }) => {
  const baseClasses = 'inline-block rounded-lg border-2 px-[40px] py-[15px] Mulish-medium text-link uppercase tracking-wider transition duration-300 hover:-translate-y-2';
  const primaryClasses = 'bg-primary text-white border-primary hover:bg-transparent hover:text-primary';
  const outlineClasses = 'bg-transparent text-primary border-primary hover:bg-primary hover:text-white';

  const variantClasses = variant === 'outline' ? outlineClasses : primaryClasses;

  return (
    <Link
      to={to}
      className={`${baseClasses} ${variantClasses} ${className}`}
    >
      {text}
    </Link>
  );
};

export default CustomButton;
