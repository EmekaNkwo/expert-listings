import React from "react";

interface HeaderIconProps {
  icon: React.ReactNode;
  tooltip?: string;
  onClick?: () => void;
  className?: string;
}

export const HeaderIcon: React.FC<HeaderIconProps> = ({
  icon,
  tooltip,
  onClick,
  className = "",
}) => {
  return (
    <button
      onClick={onClick}
      className={`relative flex items-center justify-center rounded-lg text-white transition-color ${className}`}
      title={tooltip}
      aria-label={tooltip}
    >
      {icon}
      {tooltip && (
        <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-gray-800 px-2 py-1 text-xs text-white opacity-0 transition-opacity group-hover:opacity-100">
          {tooltip}
        </span>
      )}
    </button>
  );
};
