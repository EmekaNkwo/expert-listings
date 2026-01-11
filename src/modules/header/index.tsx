"use client";

import React from "react";

import { UserAvatar } from "./components/UserAvatar";
import { useHeader } from "./hooks/useHeader";

import { Logo } from "./components/Logo";
import { HeaderActions } from "./components/HeaderActions";

interface HeaderProps {
  onOpenBudgetModal?: () => void;
  onOpenCalendarModal?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  onOpenBudgetModal,
  onOpenCalendarModal,
}) => {
  const {
    user,
    handleCalculatorClick,
    handleCalendarClick,
    handleSearchClick,
    handleWalletClick,
    handleBuildingClick,
  } = useHeader({ onOpenBudgetModal, onOpenCalendarModal });

  return (
    <header className="relative z-30 flex h-16 sm:h-20 items-center justify-between bg-primary px-4 sm:px-6">
      <Logo />
      <div className="flex items-center gap-2 sm:gap-4">
        <HeaderActions
          onCalculatorClick={handleCalculatorClick}
          onCalendarClick={handleCalendarClick}
          onSearchClick={handleSearchClick}
          onWalletClick={handleWalletClick}
          onBuildingClick={handleBuildingClick}
        />
        <UserAvatar
          initial={user.initial}
          name={user.name}
          email={user.email}
        />
      </div>
    </header>
  );
};
