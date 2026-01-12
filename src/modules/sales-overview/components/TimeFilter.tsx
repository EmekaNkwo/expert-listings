import React from "react";

export type TimeFilterOption = "1 Week" | "1 Month" | "1 Year";

interface TimeFilterProps {
  options: TimeFilterOption[];
  selectedOption: TimeFilterOption;
  onSelect: (option: TimeFilterOption) => void;
}

export const TimeFilter: React.FC<TimeFilterProps> = ({
  options,
  selectedOption,
}) => {
  return (
    <div className="flex gap-8">
      {options.map((option) => (
        <button
          key={option}
          className={`rounded-lg px-4 py-2 text-sm text-deep-gray font-semibold transition-colors ${
            selectedOption === option ? "bg-gray-100" : " hover:bg-grey-100"
          } `}
        >
          {option}
        </button>
      ))}
    </div>
  );
};
