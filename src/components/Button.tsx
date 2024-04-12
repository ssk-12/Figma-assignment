import React from 'react';

type ButtonProps = {
  onClick?: () => void;  // Make onClick optional
  className?: string;
  children: React.ReactNode;
  type?: 'button' | 'submit' | 'reset';  // More specific type for button types
};

const Button: React.FC<ButtonProps> = ({ onClick, className, children, type = 'button' }) => {
  return (
    <button onClick={onClick} className={className} type={type}>
      {children}
    </button>
  );
};

export default Button;
