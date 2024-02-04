import { Button } from "antd";
import React from "react";
import "./CustomButton.scss";

interface CustomButtonProps {
  title?: string;
  onClick?: () => void;
  icon?: React.ReactNode;
  type?: "primary" | "dashed" | "link" | "text" | "default";
  disabled?: boolean;
  className?: string;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  title = "Save",
  onClick,
  icon,
  type = "primary",
  disabled = false,
  className = "button-save",
}) => {
  return (
    <Button
      className={className}
      type={type}
      icon={icon}
      disabled={disabled}
      onClick={onClick}
    >
      {title}
    </Button>
  );
};

export default CustomButton;
