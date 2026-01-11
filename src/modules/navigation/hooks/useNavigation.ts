import { useState } from 'react';

export type NavItemType =
  | 'dashboard'
  | 'listings'
  | 'users'
  | 'request'
  | 'applications'
  | 'tasks';

interface UseNavigationReturn {
  activeItem: NavItemType;
}

export const useNavigation = (): UseNavigationReturn => {
  const [activeItem] = useState<NavItemType>('dashboard');

  return {
    activeItem,
  };
};

