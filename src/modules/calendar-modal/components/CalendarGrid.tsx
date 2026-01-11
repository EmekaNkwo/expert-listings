"use client";

import React from "react";

interface CalendarGridProps {
  currentDate: Date;
  selectedDate: Date | null;
  onDateSelect: (date: Date) => void;
}

const DAYS_OF_WEEK = ["SUN", "MON", "TUE", "WED", "THURS", "FRI", "SAT"];

export const CalendarGrid: React.FC<CalendarGridProps> = ({
  currentDate,
  selectedDate,
  onDateSelect,
}) => {
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  const firstDayOfMonth = new Date(year, month, 1);
  const lastDayOfMonth = new Date(year, month + 1, 0);
  const daysInMonth = lastDayOfMonth.getDate();
  const startingDayOfWeek = firstDayOfMonth.getDay();

  const prevMonth = new Date(year, month, 0);
  const daysInPrevMonth = prevMonth.getDate();

  const dates: Date[] = [];

  for (let i = startingDayOfWeek - 1; i >= 0; i--) {
    dates.push(new Date(year, month - 1, daysInPrevMonth - i));
  }

  for (let day = 1; day <= daysInMonth; day++) {
    dates.push(new Date(year, month, day));
  }

  while (dates.length < 42) {
    dates.push(
      new Date(
        year,
        month + 1,
        dates.length - daysInMonth - startingDayOfWeek + 1
      )
    );
  }

  const isSameDay = (a?: Date | null, b?: Date | null) =>
    a &&
    b &&
    a.getDate() === b.getDate() &&
    a.getMonth() === b.getMonth() &&
    a.getFullYear() === b.getFullYear();

  const isCurrentMonth = (date: Date) => date.getMonth() === month;

  const isFirstDay = (date: Date) => date.getDate() === 1;

  const monthLabel = (date: Date) =>
    date.toLocaleDateString("en-US", { month: "short" }).toUpperCase();

  return (
    <div className="bg-black text-white">
      {/* Days header */}
      <div className="grid grid-cols-7 border-b border-neutral-800">
        {DAYS_OF_WEEK.map((day) => (
          <div
            key={day}
            className="py-3 text-center text-xs text-neutral-400 border-r border-neutral-800 last:border-r-0"
          >
            {day}
          </div>
        ))}
      </div>

      {/* Calendar grid */}
      <div className="grid grid-cols-7">
        {dates.map((date, index) => {
          const selected = isSameDay(date, selectedDate);
          const currentMonth = isCurrentMonth(date);

          return (
            <div
              key={index}
              className="h-28 border-r border-b border-neutral-800 last:border-r-0 p-3"
            >
              <button
                onClick={() => onDateSelect(date)}
                className="flex items-start gap-1 text-sm"
              >
                {isFirstDay(date) && !currentMonth && (
                  <span className="text-neutral-500 text-xs">
                    {monthLabel(date)}
                  </span>
                )}

                <span
                  className={`
                    px-3 py-1
                    ${
                      selected
                        ? "bg-blue-600 text-white rounded-full"
                        : currentMonth
                        ? "text-white"
                        : "text-neutral-600"
                    }
                  `}
                >
                  {date.getDate()}
                </span>
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};
