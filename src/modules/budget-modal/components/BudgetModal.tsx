"use client";

import React from "react";
import { BudgetModalHeader } from "./BudgetModalHeader";
import { BudgetFeature } from "./BudgetFeature";
import {
  AdjustFiguresIcon,
  CalculatorIcon,
  SettingIcon,
  TrendUpIcon,
} from "../../shared/components/HeaderIcons";

interface BudgetModalProps {
  isOpen: boolean;
  onClose: () => void;
  onCreateBudget: () => void;
}

export const BudgetModal: React.FC<BudgetModalProps> = ({
  isOpen,
  onClose,
  onCreateBudget,
}) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-lg shadow-2xl w-full max-w-xl mx-4 max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <BudgetModalHeader icon={<CalculatorIcon size={104} />} />

        <div className="px-6 py-6 space-y-6">
          <BudgetFeature
            icon={<SettingIcon size={24} />}
            title="Set up annual budgets by account category"
            description="Allocate funds across income and expense lines with full visibility."
          />
          <BudgetFeature
            icon={<TrendUpIcon size={24} />}
            title="Track actuals vs budget in real time"
            description="See how your community is performing against plan, month by month."
          />
          <BudgetFeature
            icon={<AdjustFiguresIcon size={24} />}
            title="Adjust figures and forecast with ease"
            description="Edit amounts, apply percentage changes, or roll forward last year's data-all in one place."
          />
        </div>

        <div className="px-6 py-4 border-t border-gray-200">
          <button
            onClick={onCreateBudget}
            className="w-full bg-gray-900 text-white font-semibold py-3 px-6 rounded-lg hover:bg-gray-800 transition-colors"
          >
            Create Budget
          </button>
        </div>
      </div>
    </div>
  );
};
