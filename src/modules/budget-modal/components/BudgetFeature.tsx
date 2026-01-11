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
    <div className="flex items-start gap-4">
      <div className="flex-shrink-0 mt-1">{icon}</div>
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-1">{title}</h3>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
    </div>
  );
};
