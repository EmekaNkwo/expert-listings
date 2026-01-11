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
      className={`flex items-center gap-1.5 sm:gap-2 rounded-lg px-2 sm:px-4 py-1.5 sm:py-2 font-medium text-sm sm:text-md transition-colors whitespace-nowrap ${
        isActive
          ? "bg-icon-active text-nav-icon"
          : "text-deep-gray hover:bg-gray-100"
      }`}
    >
      <span className="flex-shrink-0">{icon}</span>
      <span className="hidden sm:inline">{label}</span>
    </button>
  );
};
