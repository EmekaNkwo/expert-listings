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
    <div className="flex bg-[#171717] items-center justify-between px-4 sm:px-6 py-3 sm:py-4 border-b border-gray-700">
      <div className="flex items-center gap-2 sm:gap-3">
        {onBack && (
          <button
            onClick={onBack}
            className="text-white hover:text-gray-300 transition-colors p-1.5 -ml-1.5 sm:ml-0"
            aria-label="Back"
          >
            <Icon size={18} className="sm:w-5 sm:h-5" stroke="currentColor">
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </Icon>
          </button>
        )}

        <h2 className="text-base sm:text-lg font-semibold text-white">
          Calendar
        </h2>
      </div>
      <button
        onClick={onClose}
        className="text-white hover:text-gray-300 transition-colors p-1.5 -mr-1.5 sm:mr-0"
        aria-label="Close"
      >
        <Icon size={18} className="sm:w-5 sm:h-5" stroke="currentColor">
          <path d="M18 6L6 18M6 6l12 12" />
        </Icon>
      </button>
    </div>
  );
};
