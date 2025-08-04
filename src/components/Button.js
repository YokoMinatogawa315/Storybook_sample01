import React from 'react';
import './Button.css'; // この行でButton.cssをインポート

const Button = ({ children, onClick, variant = 'primary', round = 'square', size = 'medium', ...props }) => {
  const className = `button ${variant} ${round} ${size}`;
  return (
    <button className={className} onClick={onClick} {...props}>
      {children}
    </button>
  );
};

export default Button;