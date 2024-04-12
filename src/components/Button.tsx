import React from 'react';

type ButtonProps = {
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;  
  className?: string;
  children: React.ReactNode;
  type?: 'button' | 'submit' | 'reset'; 
};

const Button: React.FC<ButtonProps> = ({ onClick, className, children, type = 'button' }) => {
  return (
    <button onClick={onClick} className={className} type={type}>
      {children}
    </button>
  );
};

export default Button;
