import { useState } from "react";

interface UseCalendarModalReturn {
  isOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
}

export const useCalendarModal = (): UseCalendarModalReturn => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return {
    isOpen,
    openModal,
    closeModal,
  };
};

