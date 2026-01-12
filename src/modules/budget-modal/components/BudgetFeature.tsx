import React from "react";

interface BudgetFeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export const BudgetFeature: React.FC<BudgetFeatureProps> = ({
  icon,
  title,
  description,
}) => {
  return (
    <div className="flex items-start gap-3 sm:gap-4">
      <div className="shrink-0 mt-0.5 sm:mt-1">{icon}</div>
      <div className="flex-1 min-w-0">
        <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-1 sm:mb-1.5">
          {title}
        </h3>
        <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
};
