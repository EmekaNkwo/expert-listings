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

// Mock data - can be replaced with API call later
const mockMetrics: ListingsMetrics = {
  total: '1.8k',
  active: '80',
  archived: '1k',
};

export const useListingsOverview = (): UseListingsOverviewReturn => {
  const handleViewAll = useCallback(() => {
    // TODO: Navigate to listings page
    console.log('View all listings clicked');
  }, []);

  return {
    metrics: mockMetrics,
    handleViewAll,
  };
};

