import React from "react";

interface BudgetModalHeaderProps {
  icon: React.ReactNode;
}

export const BudgetModalHeader: React.FC<BudgetModalHeaderProps> = ({
  icon,
}) => {
  return (
    <div className="bg-[#0C2841] px-6 py-16 rounded-t-lg">
      <div className="flex items-center justify-center mb-3">
        <div className="text-white flex-shrink-0 flex items-center justify-center overflow-hidden">
          <div className="scale-75 origin-center">{icon}</div>
        </div>
      </div>
    </div>
  );
};
