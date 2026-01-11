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
        {/* Carousel Container */}
        <div className="relative overflow-hidden rounded-lg">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${translateX}%)`,
            }}
          >
            {React.Children.map(children, (child, index) => (
              <div
                key={index}
                className="flex-shrink-0"
                style={{ width: `${100 / itemsPerView}%` }}
              >
                <div className="h-full w-full">{child}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Arrows */}
        {showArrows && totalPages > 1 && (
          <>
            <button
              onClick={onPrevious}
              className="absolute left-2 top-1/2 z-10 -translate-y-1/2 rounded-full bg-gray-200 p-2 transition-all hover:bg-gray-300"
              aria-label="Previous"
            >
              <svg
                className="h-5 w-5 text-gray-600"
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
              className="absolute right-2 top-1/2 z-10 -translate-y-1/2 rounded-full bg-gray-200 p-2 transition-all hover:bg-gray-300"
              aria-label="Next"
            >
              <svg
                className="h-5 w-5 text-gray-600"
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

        {/* Indicator Dots */}
        {showIndicators && totalPages > 1 && (
          <div className="mt-4 flex items-center justify-center gap-2">
            {Array.from({ length: totalPages }).map((_, index) => {
              const currentPage = Math.floor(currentIndex / itemsPerView);
              return (
                <button
                  key={index}
                  onClick={() => onIndicatorClick?.(index * itemsPerView)}
                  className={`h-2 rounded-full transition-all ${
                    currentPage === index
                      ? "w-8 bg-gray-900"
                      : "w-2 bg-gray-300 hover:bg-gray-400"
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
