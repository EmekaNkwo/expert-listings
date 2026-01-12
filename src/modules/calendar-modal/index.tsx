"use client";

import React from "react";
import { CalendarModal } from "./components/CalendarModal";
import { useCalendarModal } from "./hooks/useCalendarModal";

interface CalendarModalModuleProps {
  isOpen?: boolean;
  onOpenChange?: (isOpen: boolean) => void;
}

export const CalendarModalModule: React.FC<CalendarModalModuleProps> = ({
  isOpen: controlledIsOpen,
  onOpenChange,
}) => {
  const { isOpen: internalIsOpen, closeModal } = useCalendarModal();

  const isOpen =
    controlledIsOpen !== undefined ? controlledIsOpen : internalIsOpen;

  const handleClose = () => {
    if (controlledIsOpen === undefined) {
      closeModal();
    }
    onOpenChange?.(false);
  };

  return <CalendarModal isOpen={isOpen} onClose={handleClose} />;
};

export { useCalendarModal };
