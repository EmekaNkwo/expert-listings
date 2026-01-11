"use client";

import React from "react";
import { BudgetModal } from "./components/BudgetModal";
import { useBudgetModal } from "./hooks/useBudgetModal";

interface BudgetModalModuleProps {
  isOpen?: boolean;
  onOpenChange?: (isOpen: boolean) => void;
}

export const BudgetModalModule: React.FC<BudgetModalModuleProps> = ({
  isOpen: controlledIsOpen,
  onOpenChange,
}) => {
  const {
    isOpen: internalIsOpen,
    closeModal,
    handleCreateBudget,
  } = useBudgetModal();

  const isOpen =
    controlledIsOpen !== undefined ? controlledIsOpen : internalIsOpen;

  const handleClose = () => {
    if (controlledIsOpen === undefined) {
      closeModal();
    }
    onOpenChange?.(false);
  };

  const handleCreate = () => {
    handleCreateBudget();
    handleClose();
  };

  return (
    <BudgetModal
      isOpen={isOpen}
      onClose={handleClose}
      onCreateBudget={handleCreate}
    />
  );
};

// Export hook for external use
export { useBudgetModal };
