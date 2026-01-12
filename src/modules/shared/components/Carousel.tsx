"use client";

import React, { useMemo } from "react";

interface CarouselProps {
  children: React.ReactNode[];
  currentIndex: number;
  itemsPerView?: number;
  onNext?: () => void;
  onPrevious?: () => void;
  onIndicatorClick?: (index: number) => void;
  showArrows?: boolean;
  showIndicators?: boolean;
  className?: string;
}

export const Carousel: React.FC<CarouselProps> = React.memo(
  ({
    children,
    currentIndex,
    itemsPerView = 3,
    onNext,
    onPrevious,
    onIndicatorClick,
    showArrows = true,
    showIndicators = true,
    className = "",
  }) => {
    const totalItems = children.length;
    const totalPages = useMemo(
      () => Math.ceil(totalItems / itemsPerView),
      [totalItems, itemsPerView]
    );

    const translateX = useMemo(
      () => currentIndex * (100 / itemsPerView),
      [currentIndex, itemsPerView]
    );

    return (
      <div className={`relative ${className}`}>
        <div className="relative overflow-hidden rounded-lg touch-pan-x">
          <div
            className="flex transition-transform duration-500 ease-in-out will-change-transform"
            style={{
              transform: `translateX(-${translateX}%)`,
            }}
          >
            {React.Children.map(children, (child, index) => (
              <div
                key={index}
                className="shrink-0"
                style={{ width: `${100 / itemsPerView}%` }}
              >
                <div className="h-full w-full">{child}</div>
              </div>
            ))}
          </div>
        </div>

        {showArrows && totalPages > 1 && (
          <>
            <button
              onClick={onPrevious}
              className="absolute left-1 sm:left-2 top-1/2 z-10 -translate-y-1/2 rounded-full bg-gray-200 sm:bg-gray-200 p-1.5 sm:p-2 transition-all hover:bg-gray-300 active:bg-gray-400 touch-manipulation"
              aria-label="Previous"
            >
              <svg
                className="h-4 w-4 sm:h-5 sm:w-5 text-gray-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button
              onClick={onNext}
              className="absolute right-1 sm:right-2 top-1/2 z-10 -translate-y-1/2 rounded-full bg-gray-200 sm:bg-gray-200 p-1.5 sm:p-2 transition-all hover:bg-gray-300 active:bg-gray-400 touch-manipulation"
              aria-label="Next"
            >
              <svg
                className="h-4 w-4 sm:h-5 sm:w-5 text-gray-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </>
        )}

        {showIndicators && totalPages > 1 && (
          <div className="mt-3 sm:mt-4 flex items-center justify-center gap-1.5 sm:gap-2">
            {Array.from({ length: totalPages }).map((_, index) => {
              const currentPage = Math.floor(currentIndex / itemsPerView);
              return (
                <button
                  key={index}
                  onClick={() => onIndicatorClick?.(index * itemsPerView)}
                  className={`h-1.5 sm:h-2 rounded-full transition-all touch-manipulation ${
                    currentPage === index
                      ? "w-6 sm:w-8 bg-gray-900"
                      : "w-1.5 sm:w-2 bg-gray-300 hover:bg-gray-400 active:bg-gray-500"
                  }`}
                  aria-label={`Go to page ${index + 1}`}
                />
              );
            })}
          </div>
        )}
      </div>
    );
  }
);

Carousel.displayName = "Carousel";
