"use client";

import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export interface ChartDataPoint {
  month: string;
  value1: number; // Blue bar
  value2: number; // Green bar
  value3: number; // Red bar
}

interface SalesChartProps {
  data: ChartDataPoint[];
}

interface ChartData {
  month: string;
  "Series 1": number;
  "Series 2": number;
  "Series 3": number;
}

interface TooltipPayload {
  name: string;
  value: number;
  color: string;
  payload: ChartData;
}

export const SalesChart: React.FC<SalesChartProps> = ({ data }) => {
  const chartData = data.map((point) => ({
    month: point.month,
    "Series 1": point.value1,
    "Series 2": point.value2,
    "Series 3": point.value3,
  }));

  const formatYAxis = (value: number) => {
    return `${value}m`;
  };

  const customTooltip = (props: {
    active?: boolean;
    payload?: readonly TooltipPayload[];
    label?: string | number;
  }): React.ReactElement | null => {
    const { active, payload } = props;
    if (active && payload && payload.length) {
      return (
        <div className="rounded-lg border border-gray-200 bg-white p-3 shadow-lg">
          <p className="mb-2 text-sm font-semibold text-gray-900">
            {payload[0].payload.month}
          </p>
          {payload.map((entry, index) => (
            <p
              key={index}
              className="text-sm text-gray-600"
              style={{ color: entry.color }}
            >
              {entry.name}: {entry.value}m
            </p>
          ))}
        </div>
      );
    }
    return null;
  };

  return (
    <div className=" p-6">
      <ResponsiveContainer width="100%" height={220}>
        <BarChart
          data={chartData}
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid
            strokeDasharray="3 3"
            stroke="#e5e7eb"
            vertical={false}
          />
          <XAxis
            dataKey="month"
            stroke="#6b7280"
            fontSize={12}
            tick={{ fill: "#6b7280" }}
            axisLine={false}
            tickLine={false}
          />
          <YAxis
            stroke="#6b7280"
            fontSize={12}
            tick={{ fill: "#6b7280" }}
            domain={[0, 50]}
            tickFormatter={formatYAxis}
            axisLine={false}
            tickLine={false}
          />
          <Tooltip content={customTooltip} />
          <Bar
            dataKey="Series 1"
            fill="#3b82f6"
            radius={[4, 4, 0, 0]}
            name="Series 1"
          />
          <Bar
            dataKey="Series 2"
            fill="#16a34a"
            radius={[4, 4, 0, 0]}
            name="Series 2"
          />
          <Bar
            dataKey="Series 3"
            fill="#ef4444"
            radius={[4, 4, 0, 0]}
            name="Series 3"
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};
