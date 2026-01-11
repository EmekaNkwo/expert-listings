"use client";

import React, { useState, useCallback } from "react";
import { Header } from "../header";
import { Navigation } from "../navigation";
import { Welcome } from "../welcome";
import { SalesOverview } from "../sales-overview";
import { ListingsOverview } from "../listings-overview";
import { UsersOverview } from "../users-overview";
import { PropertyListings } from "../property-listings";
import { FloatingButton } from "../shared/components/FloatingButton";
import { BudgetModalModule } from "../budget-modal";
import { CalendarModalModule } from "../calendar-modal";

export const Dashboard: React.FC = () => {
  const [isBudgetModalOpen, setIsBudgetModalOpen] = useState(false);
  const [isCalendarModalOpen, setIsCalendarModalOpen] = useState(false);

  const handleChatClick = useCallback(() => {
    // Handle chat button click
    console.log("Chat button clicked");
  }, []);

  const handleOpenBudgetModal = useCallback(() => {
    setIsBudgetModalOpen(true);
  }, []);

  const handleOpenCalendarModal = useCallback(() => {
    setIsCalendarModalOpen(true);
  }, []);

  return (
    <div className="min-h-screen bg-white ">
      <Header
        onOpenBudgetModal={handleOpenBudgetModal}
        onOpenCalendarModal={handleOpenCalendarModal}
      />
      <Navigation />
      <main className="p-4 sm:p-6 space-y-4 sm:space-y-6">
        <Welcome />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
          <div className="lg:col-span-2">
            <SalesOverview />
          </div>
          <div className="lg:col-span-1 gap-3 sm:gap-4 flex flex-col">
            <ListingsOverview />
            <UsersOverview />
          </div>
        </div>
        <PropertyListings />
      </main>
      <FloatingButton onClick={handleChatClick} />
      <BudgetModalModule
        isOpen={isBudgetModalOpen}
        onOpenChange={setIsBudgetModalOpen}
      />
      <CalendarModalModule
        isOpen={isCalendarModalOpen}
        onOpenChange={setIsCalendarModalOpen}
      />
    </div>
  );
};
