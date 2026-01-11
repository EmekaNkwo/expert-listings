"use client";

import React, { useState } from "react";
import { UserInfoPopover } from "./UserInfoPopover";

interface UserAvatarProps {
  initial: string;
  name: string;
  email: string;
  className?: string;
}

export const UserAvatar: React.FC<UserAvatarProps> = ({
  initial,
  name,
  email,
  className = "",
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={`flex h-10 w-10 items-center justify-center rounded-full bg-white text-lg font-semibold text-primary transition-all duration-300 hover:scale-110 hover:shadow-lg hover:bg-gray-50 cursor-pointer ${className}`}
      >
        {initial}
      </div>

      {/* Hover Popover */}
      {isHovered && <UserInfoPopover name={name} email={email} />}
    </div>
  );
};
