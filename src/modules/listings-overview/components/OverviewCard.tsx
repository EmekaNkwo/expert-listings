import React from "react";

interface OverviewCardProps {
  title: string;
  icon: React.ReactNode;
  metrics: {
    label: string;
    value: string;
  }[];
  onViewAll?: () => void;
}

export const OverviewCard: React.FC<OverviewCardProps> = ({
  title,
  icon,
  metrics,
  onViewAll,
}) => {
  return (
    <div className="rounded-2xl border-2 border-border bg-white h-full">
      <div className="mb-4 flex items-center justify-between bg-[#F9FAFB] p-6 rounded-t-2xl">
        <div className="flex items-center gap-2">
          {icon}
          <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
        </div>

        <button
          onClick={onViewAll}
          className="text-sm font-medium text-accent "
        >
          View all &gt;
        </button>
      </div>
      <div className=" p-6 flex justify-between ">
        {metrics.map((metric, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-around"
          >
            <span className="text-md text-gray-600 font-medium">
              {metric.label}
            </span>
            <span className="text-2xl font-semibold text-gray-900 mt-[2rem]">
              {metric.value}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
