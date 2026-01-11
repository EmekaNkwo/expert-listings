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

  const handleCalculatorClick = useCallback(() => {
    onOpenBudgetModal?.();
  }, [onOpenBudgetModal]);

  const handleCalendarClick = useCallback(() => {
    onOpenCalendarModal?.();
  }, [onOpenCalendarModal]);

  const handleSearchClick = useCallback(() => {
    // TODO: Implement search functionality
    console.log('Search clicked');
  }, []);

  const handleWalletClick = useCallback(() => {
    // TODO: Implement wallet functionality
    console.log('Wallet clicked');
  }, []);

  const handleBuildingClick = useCallback(() => {
    // TODO: Implement building functionality
    console.log('Building clicked');
  }, []);

  return {
    user,
    handleCalculatorClick,
    handleCalendarClick,
    handleSearchClick,
    handleWalletClick,
    handleBuildingClick,
  };
};

