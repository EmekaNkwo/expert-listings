import React from "react";

interface IconBaseProps {
  size?: number | string;
  className?: string;
  stroke?: string;
  strokeWidth?: number;
}

export const ShoppingBagIcon: React.FC<IconBaseProps> = ({
  size = 31,
  className = "",
  stroke = "#F4F4F5",
  strokeWidth = 1.5,
}) => {
  const sizeStyle =
    typeof size === "number" ? { width: `${size}px`, height: `${size}px` } : {};
  const sizeClass = typeof size === "string" ? size : "";

  return (
    <svg
      className={`${sizeClass} ${className}`.trim()}
      style={sizeStyle}
      viewBox="0 0 31 31"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3.87012 14.4258V20.1986C3.87012 25.9715 6.1844 28.2858 11.9573 28.2858H18.8873C24.6601 28.2858 26.9744 25.9715 26.9744 20.1986V14.4258"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15.4286 15.4294C17.7815 15.4294 19.5172 13.5137 19.2858 11.1608L18.4372 2.57227H12.4329L11.5715 11.1608C11.3401 13.5137 13.0758 15.4294 15.4286 15.4294Z"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M23.5415 15.4294C26.1386 15.4294 28.0415 13.3208 27.7843 10.7366L27.4243 7.20084C26.9615 3.85798 25.6757 2.57227 22.3072 2.57227H18.3857L19.2857 11.5851C19.5043 13.7066 21.42 15.4294 23.5415 15.4294Z"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.25149 15.4294C9.37292 15.4294 11.2886 13.7066 11.4943 11.5851L11.7772 8.74369L12.3943 2.57227H8.47292C5.10434 2.57227 3.81863 3.85798 3.35577 7.20084L3.00863 10.7366C2.75149 13.3208 4.65434 15.4294 7.25149 15.4294Z"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15.4282 21.8574C13.281 21.8574 12.2139 22.9246 12.2139 25.0717V28.286H18.6424V25.0717C18.6424 22.9246 17.5753 21.8574 15.4282 21.8574Z"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const CalculatorIcon: React.FC<IconBaseProps> = ({
  size = 36,
  className = "",
  stroke = "white",
  strokeWidth = 1.5,
}) => {
  const sizeStyle =
    typeof size === "number" ? { width: `${size}px`, height: `${size}px` } : {};
  const sizeClass = typeof size === "string" ? size : "";

  return (
    <svg
      className={`${sizeClass} ${className}`.trim()}
      style={sizeStyle}
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15 33H21C28.5 33 31.5 30 31.5 22.5V13.5C31.5 6 28.5 3 21 3H15C7.5 3 4.5 6 4.5 13.5V22.5C4.5 30 7.5 33 15 33Z"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M24.75 11.3691V12.8691C24.75 14.0991 23.745 15.1191 22.5 15.1191H13.5C12.27 15.1191 11.25 14.1141 11.25 12.8691V11.3691C11.25 10.1391 12.255 9.11914 13.5 9.11914H22.5C23.745 9.11914 24.75 10.1241 24.75 11.3691Z"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.2042 21H12.2215"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17.9932 21H18.0106"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M23.7803 21H23.7977"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.2042 26.25H12.2215"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17.9932 26.25H18.0106"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M23.7803 26.25H23.7977"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const CalendarIcon: React.FC<IconBaseProps> = ({
  size = 36,
  className = "",
  stroke = "white",
  strokeWidth = 1.5,
}) => {
  const sizeStyle =
    typeof size === "number" ? { width: `${size}px`, height: `${size}px` } : {};
  const sizeClass = typeof size === "string" ? size : "";

  return (
    <svg
      className={`${sizeClass} ${className}`.trim()}
      style={sizeStyle}
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 3V7.5"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M24 3V7.5"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.25 13.6348H30.75"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M31.5 12.75V25.5C31.5 30 29.25 33 24 33H12C6.75 33 4.5 30 4.5 25.5V12.75C4.5 8.25 6.75 5.25 12 5.25H24C29.25 5.25 31.5 8.25 31.5 12.75Z"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M23.5425 20.5508H23.556"
        stroke={stroke}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M23.5425 25.0508H23.556"
        stroke={stroke}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17.9937 20.5508H18.0072"
        stroke={stroke}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17.9937 25.0508H18.0072"
        stroke={stroke}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.441 20.5508H12.4545"
        stroke={stroke}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.441 25.0508H12.4545"
        stroke={stroke}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const WalletIcon: React.FC<IconBaseProps> = ({
  size = 32,
  className = "",
  stroke = "#F4F4F5",
  strokeWidth = 1.5,
}) => {
  const sizeStyle =
    typeof size === "number" ? { width: `${size}px`, height: `${size}px` } : {};
  const sizeClass = typeof size === "string" ? size : "";

  return (
    <svg
      className={`${sizeClass} ${className}`.trim()}
      style={sizeStyle}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M17.333 12H9.33301"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M29.333 14.6275V17.3743C29.333 18.1076 28.7463 18.7075 27.9996 18.7342H25.3863C23.9463 18.7342 22.6263 17.6809 22.5063 16.2409C22.4263 15.4009 22.7463 14.6142 23.3063 14.0675C23.7996 13.5609 24.4796 13.2676 25.2263 13.2676H27.9996C28.7463 13.2942 29.333 13.8942 29.333 14.6275Z"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M23.307 14.066C22.747 14.6127 22.427 15.3993 22.507 16.2393C22.627 17.6793 23.947 18.7327 25.387 18.7327H28.0003V20.666C28.0003 24.666 25.3337 27.3327 21.3337 27.3327H9.33366C5.33366 27.3327 2.66699 24.666 2.66699 20.666V11.3327C2.66699 7.70602 4.85366 5.17268 8.25366 4.74601C8.60033 4.69268 8.96033 4.66602 9.33366 4.66602H21.3337C21.6803 4.66602 22.0137 4.67933 22.3337 4.73267C25.7737 5.13267 28.0003 7.67935 28.0003 11.3327V13.266H25.227C24.4803 13.266 23.8003 13.5593 23.307 14.066Z"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const SearchIcon: React.FC<IconBaseProps> = ({
  size = 32,
  className = "",
  stroke = "white",
  strokeWidth = 1.7,
}) => {
  const sizeStyle =
    typeof size === "number" ? { width: `${size}px`, height: `${size}px` } : {};
  const sizeClass = typeof size === "string" ? size : "";

  return (
    <svg
      className={`${sizeClass} ${className}`.trim()}
      style={sizeStyle}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18.667 6.66602H26.667"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18.667 10.666H22.667"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M28.0003 15.3327C28.0003 22.3327 22.3337 27.9993 15.3337 27.9993C8.33366 27.9993 2.66699 22.3327 2.66699 15.3327C2.66699 8.33268 8.33366 2.66602 15.3337 2.66602"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M29.3337 29.3327L26.667 26.666"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const SettingIcon: React.FC<IconBaseProps> = ({
  size = 32,
  className = "",
  strokeWidth = 1.7,
}) => {
  const sizeStyle =
    typeof size === "number" ? { width: `${size}px`, height: `${size}px` } : {};
  const sizeClass = typeof size === "string" ? size : "";

  return (
    <svg
      className={`${sizeClass} ${className}`.trim()}
      style={sizeStyle}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M22 6.5H16"
        stroke="#52525B"
        strokeWidth={strokeWidth}
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M6 6.5H2"
        stroke="#52525B"
        stroke-width="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10 10C11.933 10 13.5 8.433 13.5 6.5C13.5 4.567 11.933 3 10 3C8.067 3 6.5 4.567 6.5 6.5C6.5 8.433 8.067 10 10 10Z"
        stroke="#52525B"
        stroke-width="1.5"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M22 17.5H18"
        stroke="#52525B"
        stroke-width="1.5"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M8 17.5H2"
        stroke="#292D32"
        stroke-width="1.5"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M14 21C15.933 21 17.5 19.433 17.5 17.5C17.5 15.567 15.933 14 14 14C12.067 14 10.5 15.567 10.5 17.5C10.5 19.433 12.067 21 14 21Z"
        stroke="#52525B"
        stroke-width="1.5"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export const TrendUpIcon: React.FC<IconBaseProps> = ({
  size = 32,
  className = "",
}) => {
  const sizeStyle =
    typeof size === "number" ? { width: `${size}px`, height: `${size}px` } : {};
  const sizeClass = typeof size === "string" ? size : "";

  return (
    <svg
      className={`${sizeClass} ${className}`.trim()}
      style={sizeStyle}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16.5 9.5L12.3 13.7L10.7 11.3L7.5 14.5"
        stroke="#52525B"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M14.5 9.5H16.5V11.5"
        stroke="#52525B"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z"
        stroke="#52525B"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export const AdjustFiguresIcon: React.FC<IconBaseProps> = ({
  size = 32,
  className = "",
}) => {
  const sizeStyle =
    typeof size === "number" ? { width: `${size}px`, height: `${size}px` } : {};
  const sizeClass = typeof size === "string" ? size : "";

  return (
    <svg
      className={`${sizeClass} ${className}`.trim()}
      style={sizeStyle}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M19.2598 18.9V7.1C19.2598 5.6 18.6198 5 17.0298 5H15.9898C14.3998 5 13.7598 5.6 13.7598 7.1V18.9"
        stroke="#52525B"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M5.25977 18.9V12.1C5.25977 10.6 5.89977 10 7.48977 10H8.52977C10.1198 10 10.7598 10.6 10.7598 12.1V18.9"
        stroke="#52525B"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M2 19H22"
        stroke="#52525B"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export const MessagesIcon: React.FC<IconBaseProps> = ({
  size = 32,
  className = "",
}) => {
  const sizeStyle =
    typeof size === "number" ? { width: `${size}px`, height: `${size}px` } : {};
  const sizeClass = typeof size === "string" ? size : "";

  return (
    <svg
      className={`${sizeClass} ${className}`.trim()}
      style={sizeStyle}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15.59 12.4V16.47C15.59 16.83 15.55 17.17 15.46 17.48C15.09 18.95 13.87 19.87 12.19 19.87H9.47L6.45 21.88C6 22.19 5.4 21.86 5.4 21.32V19.87C4.38 19.87 3.53 19.53 2.94 18.94C2.34 18.34 2 17.49 2 16.47V12.4C2 10.5 3.18 9.19 5 9.02C5.13 9.01 5.26 9 5.4 9H12.19C14.23 9 15.59 10.36 15.59 12.4Z"
        fill="white"
      />
      <path
        d="M17.75 15.6C19.02 15.6 20.09 15.18 20.83 14.43C21.58 13.69 22 12.62 22 11.35V6.25C22 3.9 20.1 2 17.75 2H9.25C6.9 2 5 3.9 5 6.25V7C5 7.28 5.22 7.5 5.5 7.5H12.19C14.9 7.5 17.09 9.69 17.09 12.4V15.1C17.09 15.38 17.31 15.6 17.59 15.6H17.75Z"
        fill="white"
      />
    </svg>
  );
};
