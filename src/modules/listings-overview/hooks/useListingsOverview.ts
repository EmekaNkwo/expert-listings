import { useCallback } from 'react';

interface ListingsMetrics {
  total: string;
  active: string;
  archived: string;
}

interface UseListingsOverviewReturn {
  metrics: ListingsMetrics;
  handleViewAll: () => void;
}

const mockMetrics: ListingsMetrics = {
  total: '1.8k',
  active: '80',
  archived: '1k',
};

export const useListingsOverview = (): UseListingsOverviewReturn => {
  const handleViewAll = useCallback(() => {
    console.log('View all listings clicked');
  }, []);

  return {
    metrics: mockMetrics,
    handleViewAll,
  };
};

