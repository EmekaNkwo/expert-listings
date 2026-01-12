import { useCallback } from 'react';

interface UsersMetrics {
  total: string;
  riders: string;
  subscribers: string;
}

interface UseUsersOverviewReturn {
  metrics: UsersMetrics;
  handleViewAll: () => void;
}

const mockMetrics: UsersMetrics = {
  total: '20.7k',
  riders: '8.5k',
  subscribers: '7.5k',
};

export const useUsersOverview = (): UseUsersOverviewReturn => {
  const handleViewAll = useCallback(() => {
    console.log('View all users clicked');
  }, []);

  return {
    metrics: mockMetrics,
    handleViewAll,
  };
};

