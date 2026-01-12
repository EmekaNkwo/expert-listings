"use client";

import React, { useMemo, useCallback } from "react";

interface CalendarGridProps {
  currentDate: Date;
  selectedDate: Date | null;
  onDateSelect: (date: Date) => void;
}

const DAYS_OF_WEEK = ["SUN", "MON", "TUE", "WED", "THURS", "FRI", "SAT"];

const isSameDay = (a?: Date | null, b?: Date | null) =>
  a &&
  b &&
  a.getDate() === b.getDate() &&
  a.getMonth() === b.getMonth() &&
  a.getFullYear() === b.getFullYear();

const monthLabel = (date: Date) =>
  date.toLocaleDateString("en-US", { month: "short" }).toUpperCase();

export const CalendarGrid: React.FC<CalendarGridProps> = React.memo(
  ({ currentDate, selectedDate, onDateSelect }) => {
    const dates = useMemo(() => {
      const year = currentDate.getFullYear();
      const month = currentDate.getMonth();

      const firstDayOfMonth = new Date(year, month, 1);
      const lastDayOfMonth = new Date(year, month + 1, 0);
      const daysInMonth = lastDayOfMonth.getDate();
      const startingDayOfWeek = firstDayOfMonth.getDay();

      const prevMonth = new Date(year, month, 0);
      const daysInPrevMonth = prevMonth.getDate();

      const datesArray: Date[] = [];

      for (let i = startingDayOfWeek - 1; i >= 0; i--) {
        datesArray.push(new Date(year, month - 1, daysInPrevMonth - i));
      }

      for (let day = 1; day <= daysInMonth; day++) {
        datesArray.push(new Date(year, month, day));
      }

      while (datesArray.length < 42) {
        datesArray.push(
          new Date(
            year,
            month + 1,
            datesArray.length - daysInMonth - startingDayOfWeek + 1
          )
        );
      }

      return datesArray;
    }, [currentDate]);

    const month = useMemo(() => currentDate.getMonth(), [currentDate]);

    const isCurrentMonth = useCallback(
      (date: Date) => date.getMonth() === month,
      [month]
    );

    const isFirstDay = useCallback((date: Date) => date.getDate() === 1, []);

    return (
      <div className="bg-black text-white">
        <div className="grid grid-cols-7 border-b border-neutral-800">
          {DAYS_OF_WEEK.map((day) => (
            <div
              key={day}
              className="py-2 sm:py-3 text-center text-[10px] sm:text-xs text-neutral-400 border-r border-neutral-800 last:border-r-0"
            >
              {day}
            </div>
          ))}
        </div>

        <div className="grid grid-cols-7">
          {dates.map((date, index) => {
            const selected = isSameDay(date, selectedDate);
            const currentMonth = isCurrentMonth(date);

            return (
              <div
                key={index}
                className="h-16 sm:h-20 md:h-28 border-r border-b border-neutral-800 last:border-r-0 p-1.5 sm:p-2 md:p-3"
              >
                <button
                  onClick={() => onDateSelect(date)}
                  className="flex items-start gap-0.5 sm:gap-1 w-full h-full"
                >
                  {isFirstDay(date) && !currentMonth && (
                    <span className="text-neutral-500 text-[9px] sm:text-xs">
                      {monthLabel(date)}
                    </span>
                  )}

                  <span
                    className={`
                    px-1.5 sm:px-2 md:px-3 py-0.5 sm:py-1 text-xs sm:text-sm
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
  }
);

CalendarGrid.displayName = "CalendarGrid";
