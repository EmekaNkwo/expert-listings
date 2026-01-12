import { useState, useCallback } from 'react';

interface User {
  name: string;
  initial: string;
  email: string;
}

interface UseHeaderProps {
  onOpenBudgetModal?: () => void;
  onOpenCalendarModal?: () => void;
}

interface UseHeaderReturn {
  user: User;
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
  closeSidebar: () => void;
  handleCalculatorClick: () => void;
  handleCalendarClick: () => void;
  handleSearchClick: () => void;
  handleWalletClick: () => void;
  handleBuildingClick: () => void;
}

export const useHeader = ({ 
  onOpenBudgetModal,
  onOpenCalendarModal,
}: UseHeaderProps = {}): UseHeaderReturn => {
  const [user] = useState<User>({
    name: 'Dylan Frank',
    initial: 'D',
    email: 'dylanfran96@gmail.com',
  });

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = useCallback(() => {
    setIsSidebarOpen((prev) => !prev);
  }, []);

  const closeSidebar = useCallback(() => {
    setIsSidebarOpen(false);
  }, []);

  const handleCalculatorClick = useCallback(() => {
    onOpenBudgetModal?.();
  }, [onOpenBudgetModal]);

  const handleCalendarClick = useCallback(() => {
    onOpenCalendarModal?.();
  }, [onOpenCalendarModal]);

  const handleSearchClick = useCallback(() => {
    console.log('Search clicked');
  }, []);

  const handleWalletClick = useCallback(() => {
    console.log('Wallet clicked');
  }, []);

  const handleBuildingClick = useCallback(() => {
    console.log('Building clicked');
  }, []);

  return {
    user,
    isSidebarOpen,
    toggleSidebar,
    closeSidebar,
    handleCalculatorClick,
    handleCalendarClick,
    handleSearchClick,
    handleWalletClick,
    handleBuildingClick,
  };
};

