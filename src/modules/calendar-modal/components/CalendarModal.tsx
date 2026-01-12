"use client";

import React, { useState, useCallback, useMemo } from "react";
import { CalendarHeader } from "./CalendarHeader";
import { CalendarGrid } from "./CalendarGrid";
import { Icon } from "../../shared/components/Icon";

interface CalendarModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CalendarModal: React.FC<CalendarModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());

  const handlePreviousMonth = useCallback(() => {
    setCurrentDate(
      (prev) => new Date(prev.getFullYear(), prev.getMonth() - 1, 1)
    );
  }, []);

  const handleNextMonth = useCallback(() => {
    setCurrentDate(
      (prev) => new Date(prev.getFullYear(), prev.getMonth() + 1, 1)
    );
  }, []);

  const handleDateSelect = useCallback((date: Date) => {
    setSelectedDate(date);
  }, []);

  const formattedMonthYear = useMemo(
    () =>
      currentDate.toLocaleDateString("en-US", {
        month: "long",
        year: "numeric",
      }),
    [currentDate]
  );

  if (!isOpen) return null;

  return (
    <>
      <div
        className="fixed top-0 left-0 right-0 bottom-0 bg-black/50 z-40 transition-opacity"
        onClick={onClose}
      />

      <div
        className={`
          fixed right-0 top-16 sm:top-20 h-[calc(100vh-4rem)] sm:h-[calc(100vh-5rem)] w-full sm:max-w-md bg-black z-50
          transform transition-transform duration-300 ease-in-out
          ${isOpen ? "translate-x-0" : "translate-x-full"}
          shadow-2xl overflow-y-auto
        `}
        onClick={(e) => e.stopPropagation()}
      >
        <CalendarHeader onClose={onClose} />

        <div className="flex items-center justify-between px-4 sm:px-8 py-3 sm:py-5 border-b border-gray-700">
          <button
            onClick={handlePreviousMonth}
            className="text-white hover:text-gray-300 transition-colors p-2 -ml-2 sm:ml-0"
            aria-label="Previous month"
          >
            <Icon size={18} className="sm:w-5 sm:h-5" stroke="currentColor">
              <path d="M15 18l-6-6 6-6" />
            </Icon>
          </button>
          <h3 className="text-base sm:text-lg font-semibold text-white text-center">
            {formattedMonthYear}
          </h3>
          <button
            onClick={handleNextMonth}
            className="text-white hover:text-gray-300 transition-colors p-2 -mr-2 sm:mr-0"
            aria-label="Next month"
          >
            <Icon size={18} className="sm:w-5 sm:h-5" stroke="currentColor">
              <path d="M9 18l6-6-6-6" />
            </Icon>
          </button>
        </div>

        <CalendarGrid
          currentDate={currentDate}
          selectedDate={selectedDate}
          onDateSelect={handleDateSelect}
        />
      </div>
    </>
  );
};
