import React from "react";
import { ArrowIcon } from "../../shared/components/ArrowIcon";

interface FinancialMetricProps {
  label: string;
  value: string;
  change: string;
  isPositive: boolean;
}

export const FinancialMetric: React.FC<FinancialMetricProps> = ({
  label,
  value,
  change,
  isPositive,
}) => {
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
        return "text-gray-600";
    }
  };
  return (
    <div className="h-full rounded-lg border-2 border-gray-200 bg-white p-4 flex flex-col gap-2 justify-around">
      <p
        className="mt-2 text-2xl font-semibold"
        style={{ color: getLabelColor(label) }}
      >
        {value}
      </p>
      <div className="flex items-center gap-3">
        <p className="text-md text-gray-600">{label}</p>
        <div className=" flex items-center gap-1">
          <ArrowIcon
            direction={isPositive ? "up" : "down"}
            size={16}
            fill={isPositive ? "#12B76A" : "#F04438"}
          />
          <span
            className={`text-sm font-medium ${
              isPositive ? "text-green-600" : "text-red-600"
            }`}
          >
            {change}
          </span>
        </div>
      </div>
    </div>
  );
};
