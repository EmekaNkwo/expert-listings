import { useState, useMemo, useCallback } from 'react';
import { ChartDataPoint } from '../components/SalesChart';
import { TimeFilterOption } from '../components/TimeFilter';

interface FinancialMetrics {
  totalInflow: { value: string; change: string; isPositive: boolean };
  mrr: { value: string; change: string; isPositive: boolean };
  commissionRevenue: { value: string; change: string; isPositive: boolean };
  gmv: { value: string; change: string; isPositive: boolean };
}

interface UseSalesOverviewReturn {
  chartData: ChartDataPoint[];
  metrics: FinancialMetrics;
  selectedTimeFilter: TimeFilterOption;
  period: string;
  handleTimeFilterChange: (filter: TimeFilterOption) => void;
  handleViewTransactions: () => void;
}

// Mock data - can be replaced with API calls later
// Values are in millions (m) to match the Y-axis scale (0-50m)
const mockChartData: Record<TimeFilterOption, ChartDataPoint[]> = {
  '1 Week': [
    { month: 'Mon', value1: 30, value2: 25, value3: 9 },
    { month: 'Tue', value1: 35, value2: 30, value3: 9 },
    { month: 'Wed', value1: 40, value2: 35, value3: 9 },
    { month: 'Thu', value1: 45, value2: 40, value3: 9 },
    { month: 'Fri', value1: 50, value2: 45, value3: 9 },
    { month: 'Sat', value1: 35, value2: 30, value3: 9 },
    { month: 'Sun', value1: 30, value2: 25, value3: 9 },
  ],
  '1 Month': [
    { month: 'Week 1', value1: 35, value2: 30, value3: 9 },
    { month: 'Week 2', value1: 40, value2: 35, value3: 9 },
    { month: 'Week 3', value1: 45, value2: 40, value3: 9 },
    { month: 'Week 4', value1: 50, value2: 45, value3: 9 },
  ],
  '1 Year': [
    { month: 'Jan', value1: 35, value2: 28, value3: 9 },
    { month: 'Feb', value1: 5, value2: 28, value3: 9 },
    { month: 'Mar', value1: 14, value2: 6, value3: 3 },
    { month: 'Apr', value1: 14, value2: 25, value3: 9 },
    { month: 'May', value1: 9, value2: 3, value3: 2 },
    { month: 'Jun', value1: 30, value2: 48, value3: 8 },
    { month: 'Jul', value1: 20, value2: 30, value3: 15 },
    { month: 'Aug', value1: 20, value2: 5, value3: 15 },
    { month: 'Sep', value1: 35, value2: 30, value3: 8 },
  ],
};

const mockMetrics: FinancialMetrics = {
  totalInflow: {
    value: '₦120,000,000.00',
    change: '2.5%',
    isPositive: true,
  },
  mrr: {
    value: '₦50,000,000.00',
    change: '2.5%',
    isPositive: true,
  },
  commissionRevenue: {
    value: '₦200,000,000.00',
    change: '0.5%',
    isPositive: true,
  },
  gmv: {
    value: '₦100,000,000.00',
    change: '0.5%',
    isPositive: false,
  },
};

export const useSalesOverview = (): UseSalesOverviewReturn => {
  const [selectedTimeFilter, setSelectedTimeFilter] =
    useState<TimeFilterOption>('1 Year');

  const chartData = useMemo(
    () => mockChartData[selectedTimeFilter],
    [selectedTimeFilter]
  );

  const period = useMemo(() => {
    if (selectedTimeFilter === '1 Year') {
      return 'Jan 2022 - Sep 2022';
    }
    // Add logic for other periods
    return 'Current Period';
  }, [selectedTimeFilter]);

  const handleTimeFilterChange = useCallback((filter: TimeFilterOption) => {
    setSelectedTimeFilter(filter);
    // TODO: Fetch new data based on filter
  }, []);

  const handleViewTransactions = useCallback(() => {
    // TODO: Navigate to transactions page or open modal
    console.log('View transactions clicked');
  }, []);

  return {
    chartData,
    metrics: mockMetrics,
    selectedTimeFilter,
    period,
    handleTimeFilterChange,
    handleViewTransactions,
  };
};

