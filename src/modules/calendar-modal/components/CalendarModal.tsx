"use client";

import React, { useState } from "react";
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

  const handlePreviousMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1)
    );
  };

  const handleNextMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1)
    );
  };

  const handleDateSelect = (date: Date) => {
    setSelectedDate(date);
  };

  const formatMonthYear = (date: Date): string => {
    return date.toLocaleDateString("en-US", { month: "long", year: "numeric" });
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop - covers entire screen including header with higher z-index */}
      <div
        className="fixed top-0 left-0 right-0 bottom-0 bg-black/50 z-40 transition-opacity"
        onClick={onClose}
      />

      {/* Calendar Modal - slides in from right, below header */}
      <div
        className={`
          fixed right-0 top-20 h-[calc(100vh-5rem)] w-full max-w-md bg-black z-50
          transform transition-transform duration-300 ease-in-out
          ${isOpen ? "translate-x-0" : "translate-x-full"}
          shadow-2xl
        `}
        onClick={(e) => e.stopPropagation()}
      >
        <CalendarHeader onClose={onClose} />

        {/* Month Navigation */}
        <div className="flex items-center justify-between px-8 py-5 border-b border-gray-700">
          <button
            onClick={handlePreviousMonth}
            className="text-white hover:text-gray-300 transition-colors"
            aria-label="Previous month"
          >
            <Icon size={20} stroke="currentColor">
              <path d="M15 18l-6-6 6-6" />
            </Icon>
          </button>
          <h3 className="text-lg font-semibold text-white">
            {formatMonthYear(currentDate)}
          </h3>
          <button
            onClick={handleNextMonth}
            className="text-white hover:text-gray-300 transition-colors"
            aria-label="Next month"
          >
            <Icon size={20} stroke="currentColor">
              <path d="M9 18l6-6-6-6" />
            </Icon>
          </button>
        </div>

        {/* Calendar Grid */}
        <CalendarGrid
          currentDate={currentDate}
          selectedDate={selectedDate}
          onDateSelect={handleDateSelect}
        />
      </div>
    </>
  );
};
