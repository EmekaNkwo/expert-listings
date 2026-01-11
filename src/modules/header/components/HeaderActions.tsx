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
    <div className="flex items-center gap-6">
      <HeaderIcon
        icon={<CalculatorIcon />}
        tooltip="Budgeting"
        onClick={onCalculatorClick}
      />
      <HeaderIcon
        icon={<CalendarIcon />}
        tooltip="Calendar"
        onClick={onCalendarClick}
      />
      <HeaderIcon
        icon={<SearchIcon />}
        tooltip="Search Activity"
        onClick={onSearchClick}
      />
      <HeaderIcon
        icon={<WalletIcon />}
        tooltip="Wallet"
        onClick={onWalletClick}
      />
      <HeaderIcon
        icon={<ShoppingBagIcon />}
        tooltip="Building"
        onClick={onBuildingClick}
      />
    </div>
  );
};
