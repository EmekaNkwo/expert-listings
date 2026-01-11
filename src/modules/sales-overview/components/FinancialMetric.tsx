import React, { useMemo } from "react";
import { ArrowIcon } from "../../shared/components/ArrowIcon";

interface FinancialMetricProps {
  label: string;
  value: string;
  change: string;
  isPositive: boolean;
}

const getLabelColor = (label: string): string => {
  switch (label) {
    case "Total Inflow":
      return "#4545FE";
    case "MRR":
      return "#12B76A";
    case "Commission Revenue":
      return "#14B8A6";
    case "GMV":
      return "#F04438";
    default:
      return "#6b7280";
  }
};

export const FinancialMetric: React.FC<FinancialMetricProps> = React.memo(
  ({ label, value, change, isPositive }) => {
    const labelColor = useMemo(() => getLabelColor(label), [label]);
    return (
      <div className="h-full rounded-md sm:rounded-lg border border-gray-200 sm:border-2 bg-white p-2.5 sm:p-3 md:p-4 flex flex-col gap-1.5 sm:gap-2 justify-around">
        <p
          className="mt-1 sm:mt-2 text-lg sm:text-xl lg:text-2xl font-semibold line-clamp-1"
          style={{ color: labelColor }}
        >
          {value}
        </p>
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-1.5 sm:gap-2 md:gap-3">
          <p className="text-xs sm:text-sm md:text-base text-gray-600">
            {label}
          </p>
          <div className="flex items-center gap-0.5 sm:gap-1">
            <ArrowIcon
              direction={isPositive ? "up" : "down"}
              size={14}
              className="sm:w-4 sm:h-4"
              fill={isPositive ? "#12B76A" : "#F04438"}
            />
            <span
              className={`text-xs sm:text-sm font-medium ${
                isPositive ? "text-green-600" : "text-red-600"
              }`}
            >
              {change}
            </span>
          </div>
        </div>
      </div>
    );
  }
);

FinancialMetric.displayName = "FinancialMetric";
