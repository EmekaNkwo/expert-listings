import React from "react";
import { Icon } from "../../shared/components/Icon";

interface CalendarHeaderProps {
  onBack?: () => void;
  onClose: () => void;
}

export const CalendarHeader: React.FC<CalendarHeaderProps> = ({
  onBack,
  onClose,
}) => {
  return (
    <div className="flex bg-[#171717] items-center justify-between px-6 py-4 border-b border-gray-700">
      <div className="flex items-center gap-3">
        <button
          onClick={onBack}
          className="text-white hover:text-gray-300 transition-colors"
          aria-label="Back"
        >
          <Icon size={20} stroke="currentColor">
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </Icon>
        </button>

        <h2 className="text-lg font-semibold text-white">Calendar</h2>
      </div>
      <button
        onClick={onClose}
        className="text-white hover:text-gray-300 transition-colors"
        aria-label="Close"
      >
        <Icon size={20} stroke="currentColor">
          <path d="M18 6L6 18M6 6l12 12" />
        </Icon>
      </button>
    </div>
  );
};
