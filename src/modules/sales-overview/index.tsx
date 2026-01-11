"use client";

import React, { useState } from "react";
import { SalesChart } from "./components/SalesChart";
import { FinancialMetric } from "./components/FinancialMetric";
import { TimeFilter } from "./components/TimeFilter";
import { useSalesOverview } from "./hooks/useSalesOverview";
import { Carousel } from "../shared/components/Carousel";

export const SalesOverview: React.FC = () => {
  const {
    chartData,
    metrics,
    selectedTimeFilter,
    period,
    handleTimeFilterChange,
    handleViewTransactions,
  } = useSalesOverview();

  const [currentIndex, setCurrentIndex] = useState(0);

  const timeFilterOptions: Array<"1 Week" | "1 Month" | "1 Year"> = [
    "1 Week",
    "1 Month",
    "1 Year",
  ];

  const handleNext = () => {
    setCurrentIndex((prev) => {
      const totalItems = 2; // Number of SalesChart items
      return prev + 1 >= totalItems ? 0 : prev + 1;
    });
  };

  const handlePrevious = () => {
    setCurrentIndex((prev) => {
      const totalItems = 2; // Number of SalesChart items
      return prev === 0 ? totalItems - 1 : prev - 1;
    });
  };

  return (
    <div className="flex flex-col gap-4 sm:gap-6 border-2 border-border rounded-2xl bg-white p-4 sm:p-6">
      <div className="flex lg:flex-row flex-col items-start lg:items-center justify-between gap-4 lg:gap-0">
        <div className="flex flex-col gap-2 sm:gap-4">
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
            Sales Overview
          </h2>
          <p className="text-xs sm:text-sm text-gray-600">Showing overview {period}</p>
        </div>
        <button
          onClick={handleViewTransactions}
          className="w-full lg:w-fit lg:min-w-[20rem] cursor-pointer rounded-4xl bg-transparent px-4 py-3 sm:px-8 sm:py-8 text-xs sm:text-sm font-semibold text-deep-gray transition-colors 
          border-2 border-border hover:bg-primary-light hover:text-white"
        >
          View Transactions
        </button>
      </div>
      <div className="flex justify-center sm:justify-end">
        <TimeFilter
          options={timeFilterOptions}
          selectedOption={selectedTimeFilter}
          onSelect={handleTimeFilterChange}
        />
      </div>
      <hr className="border-border" />
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-4 sm:gap-6">
        <div className="lg:col-span-1">
          <Carousel
            currentIndex={currentIndex}
            itemsPerView={1}
            onNext={handleNext}
            onPrevious={handlePrevious}
            showArrows={true}
            showIndicators={false}
            className="h-full"
          >
            {[
              <SalesChart key="chart" data={chartData} />,
              <SalesChart key="chart2" data={chartData} />,
            ]}
          </Carousel>
        </div>
        <div className="lg:col-span-1">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 h-full">
            <FinancialMetric
              label="Total Inflow"
              value={metrics.totalInflow.value}
              change={metrics.totalInflow.change}
              isPositive={metrics.totalInflow.isPositive}
            />
            <FinancialMetric
              label="MRR"
              value={metrics.mrr.value}
              change={metrics.mrr.change}
              isPositive={metrics.mrr.isPositive}
            />
            <FinancialMetric
              label="Commission Revenue"
              value={metrics.commissionRevenue.value}
              change={metrics.commissionRevenue.change}
              isPositive={metrics.commissionRevenue.isPositive}
            />
            <FinancialMetric
              label="GMV"
              value={metrics.gmv.value}
              change={metrics.gmv.change}
              isPositive={metrics.gmv.isPositive}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
