import React from "react";

interface IconProps {
  children: React.ReactNode;
  size?: number | string;
  className?: string;
  strokeWidth?: number;
  fill?: "none" | "currentColor" | string;
  stroke?: "currentColor" | string;
  viewBox?: string;
}

export const Icon: React.FC<IconProps> = ({
  children,
  size = 20,
  className = "",
  strokeWidth = 2,
  fill = "none",
  stroke = "currentColor",
  viewBox = "0 0 24 24",
}) => {
  const sizeStyle =
    typeof size === "number" ? { width: `${size}px`, height: `${size}px` } : {};
  const sizeClass = typeof size === "string" ? size : "";

  const defaultSizeClass =
    typeof size === "number"
      ? size === 16
        ? "h-4 w-4"
        : size === 20
        ? "h-5 w-5"
        : size === 24
        ? "h-6 w-6"
        : ""
      : "";

  return (
    <svg
      className={`${defaultSizeClass} ${sizeClass} ${className}`}
      style={sizeStyle}
      fill={fill}
      stroke={stroke}
      viewBox={viewBox}
      xmlns="http://www.w3.org/2000/svg"
    >
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child) && child.type === "path") {
          const childProps = (
            child as React.ReactElement<React.SVGProps<SVGPathElement>>
          ).props;
          return React.cloneElement(
            child as React.ReactElement<React.SVGProps<SVGPathElement>>,
            {
              strokeLinecap: childProps.strokeLinecap || "round",
              strokeLinejoin: childProps.strokeLinejoin || "round",
              strokeWidth: childProps.strokeWidth || strokeWidth,
            }
          );
        }
        return child;
      })}
    </svg>
  );
};
