import React from "react";

interface NavItemProps {
  label: string;
  icon: React.ReactNode;
  isActive?: boolean;
  onClick?: () => void;
}

export const NavItem: React.FC<NavItemProps> = ({
  label,
  icon,
  isActive = false,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-2 rounded-lg px-4 py-2  font-medium text-md transition-colors ${
        isActive
          ? "bg-icon-active text-nav-icon"
          : "text-deep-gray hover:bg-gray-100"
      }`}
    >
      <span className="flex-shrink-0 ">{icon}</span>
      <span>{label}</span>
    </button>
  );
};
