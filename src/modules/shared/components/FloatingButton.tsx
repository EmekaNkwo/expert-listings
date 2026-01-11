"use client";

import React from "react";

import { MessagesIcon } from "./HeaderIcons";

interface FloatingButtonProps {
  onClick?: () => void;
  className?: string;
}

export const FloatingButton: React.FC<FloatingButtonProps> = ({
  onClick,
  className = "",
}) => {
  return (
    <button
      onClick={onClick}
      className={`fixed bottom-60 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#242526] shadow-lg transition-all hover:scale-110 hover:shadow-xl active:scale-95 ${className}`}
      aria-label="Open chat"
    >
      <MessagesIcon size={24} />
    </button>
  );
};
