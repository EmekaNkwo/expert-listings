import { useState } from "react";

interface UseBudgetModalReturn {
  isOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
  handleCreateBudget: () => void;
}

export const useBudgetModal = (): UseBudgetModalReturn => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const handleCreateBudget = () => {
    console.log("Create budget clicked");
    closeModal();
  };

  return {
    isOpen,
    openModal,
    closeModal,
    handleCreateBudget,
  };
};

