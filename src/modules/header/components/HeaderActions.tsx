import React from "react";
import { HeaderIcon } from "./HeaderIcon";

import {
  CalculatorIcon,
  CalendarIcon,
  ShoppingBagIcon,
  WalletIcon,
  SearchIcon,
} from "../../shared/components/HeaderIcons";

interface HeaderActionsProps {
  onCalculatorClick?: () => void;
  onCalendarClick?: () => void;
  onSearchClick?: () => void;
  onWalletClick?: () => void;
  onBuildingClick?: () => void;
}

export const HeaderActions: React.FC<HeaderActionsProps> = ({
  onCalculatorClick,
  onCalendarClick,
  onSearchClick,
  onWalletClick,
  onBuildingClick,
}) => {
  return (
    <div className="flex items-center gap-2 sm:gap-4 md:gap-6">
      <HeaderIcon
        icon={<CalculatorIcon className="w-7 h-7 sm:w-9 sm:h-9" />}
        tooltip="Budgeting"
        onClick={onCalculatorClick}
      />
      <HeaderIcon
        icon={<CalendarIcon className="w-7 h-7 sm:w-9 sm:h-9" />}
        tooltip="Calendar"
        onClick={onCalendarClick}
      />
      <HeaderIcon
        icon={<SearchIcon className="w-6 h-6 sm:w-8 sm:h-8" />}
        tooltip="Search Activity"
        onClick={onSearchClick}
      />
      <HeaderIcon
        icon={<WalletIcon className="w-6 h-6 sm:w-8 sm:h-8" />}
        tooltip="Wallet"
        onClick={onWalletClick}
      />
      <HeaderIcon
        icon={<ShoppingBagIcon className="w-6 h-6 sm:w-8 sm:h-8" />}
        tooltip="Building"
        onClick={onBuildingClick}
      />
    </div>
  );
};
