import React, { ButtonHTMLAttributes } from 'react';
import './CustomButton.css';

interface CustomButtonProps {
  type?: ButtonHTMLAttributes<HTMLButtonElement>['type'];
  title?: string;
  icon?: React.ReactNode;
  titleColor?: string;
  iconColor?: string;
  backgroundColor?: string;
  width?: string;
  onClick?: () => void;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  type = 'button',
  title,
  icon,
  titleColor = '#ffffff',
  iconColor = '#ffffff',
  backgroundColor = '#000000',
  width,
  onClick,
}) => {
  return (
    <button
      type={type}
      className="custom-button"
      onClick={onClick}
      style={{ backgroundColor, width }}
    >
      {icon && <span className="icon" style={{ color: iconColor }}>{icon}</span>}
      {title && <span className="title" style={{ color: titleColor }}>{title}</span>}
    </button>
  );
};

export { CustomButton };
