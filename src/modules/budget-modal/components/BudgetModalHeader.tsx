import React from "react";

interface BudgetModalHeaderProps {
  icon: React.ReactNode;
}

export const BudgetModalHeader: React.FC<BudgetModalHeaderProps> = ({
  icon,
}) => {
  return (
    <div className="bg-[#0C2841] px-4 sm:px-6 py-12 sm:py-20 rounded-t-lg">
      <div className="flex items-center justify-center mb-2 sm:mb-3">
        <div className="text-white shrink-0 flex items-center justify-center overflow-hidden">
          <div className="scale-50 sm:scale-75 origin-center">{icon}</div>
        </div>
      </div>
    </div>
  );
};
