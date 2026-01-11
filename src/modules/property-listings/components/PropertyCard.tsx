"use client";

import React, { useState, useMemo, useCallback } from "react";
import Image from "next/image";

interface PropertyCardProps {
  title: string;
  badge: string;
  images?: string[];
  imageAlt?: string;
  className?: string;
}

export const PropertyCard: React.FC<PropertyCardProps> = React.memo(
  ({ title, badge, images = [], imageAlt, className = "" }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const hasMultipleImages = useMemo(() => images.length > 1, [images.length]);
    const currentImage = useMemo(
      () => images[currentIndex] || "",
      [images, currentIndex]
    );
    const showPlaceholder = useMemo(
      () => !currentImage || currentImage.trim() === "",
      [currentImage]
    );

    const handleIndicatorClick = useCallback((index: number) => {
      setCurrentIndex(index);
    }, []);

    return (
      <div className={`relative h-80 overflow-hidden rounded-lg ${className}`}>
        {showPlaceholder ? (
          <div className="h-full w-full bg-gradient-to-b from-gray-200 via-gray-300 to-gray-400" />
        ) : (
          <Image
            width={800}
            height={640}
            src={currentImage}
            alt={imageAlt || `${title} - Image ${currentIndex + 1}`}
            className="h-full w-full object-cover"
          />
        )}

        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent pointer-events-none" />

        <div className="absolute bottom-0 left-0 right-0 p-4 z-10">
          <div className="pointer-events-none">
            <span className="text-lg uppercase text-white">{badge}</span>
            <h3 className="text-lg font-semibold text-white">{title}</h3>
          </div>

          {hasMultipleImages && (
            <div className="mt-3 flex items-center justify-center gap-2">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleIndicatorClick(index)}
                  className={`h-2 rounded-full transition-all ${
                    currentIndex === index
                      ? "w-8 bg-white"
                      : "w-2 bg-white/50 hover:bg-white/75"
                  }`}
                  aria-label={`Go to image ${index + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    );
  }
);

PropertyCard.displayName = "PropertyCard";
