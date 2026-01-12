import React from "react";

interface ArrowIconProps {
  direction?: "up" | "down";
  size?: number | string;
  className?: string;
  fill?: string;
}

export const ArrowIcon: React.FC<ArrowIconProps> = ({
  direction = "up",
  size = 12,
  className = "",
  fill = "currentColor",
}) => {
  const fullPath =
    "M5.83366 11.666C2.61366 11.666 0.000326157 9.05268 0.000326157 5.83268C0.000326157 2.61268 2.61366 -0.000650406 5.83366 -0.000650406C9.05366 -0.000650406 11.667 2.61268 11.667 5.83268C11.667 9.05268 9.05366 11.666 5.83366 11.666ZM5.25033 5.83268H3.50033L5.83366 8.16602L8.16699 5.83268L6.41699 5.83268V3.49935H5.25033V5.83268Z";

  const rotation = direction === "down" ? "rotate-180" : "";
  const sizeValue = typeof size === "number" ? `${size}px` : size;

  return (
    <svg
      width={sizeValue}
      height={sizeValue}
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${rotation} ${className}`}
    >
      <path d={fullPath} fill={fill} />
    </svg>
  );
};
