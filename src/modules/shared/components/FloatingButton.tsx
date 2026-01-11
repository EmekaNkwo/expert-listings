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
      className={`fixed bottom-6 sm:bottom-16 right-4 sm:right-6 z-50 flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-full bg-[#242526] shadow-lg transition-all hover:scale-110 hover:shadow-xl active:scale-95 ${className}`}
      aria-label="Open chat"
    >
      <MessagesIcon className="w-5 h-5 sm:w-6 sm:h-6" />
    </button>
  );
};
