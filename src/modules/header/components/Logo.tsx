import { LogoIcon } from "@icons";
import Image from "next/image";
import React from "react";

interface LogoProps {
  className?: string;
}

export const Logo: React.FC<LogoProps> = () => {
  return (
    <Image
      src={LogoIcon}
      alt="Expert Listing Logo"
      height={32}
      className="h-6 sm:h-8 w-auto"
    />
  );
};
